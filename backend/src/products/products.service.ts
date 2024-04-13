import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product, ProductCreationAttributes } from './products.model';
import { PropertiesService } from 'src/properties/properties.service';
import { CategoriesService } from 'src/categories/categories.service';
import { ProductProperty } from './product-property.model';
import { Property } from 'src/properties/properties.model';
import sequelize from 'sequelize';
import { UpdateProductPropertyDto } from './dto/update-product-property.dto';

@Injectable()
export class ProductsService {

  constructor(@InjectModel(Product) private productRepository: typeof Product,
    @InjectModel(ProductProperty) private productPropertyRepository: typeof ProductProperty,
    private propertiesService: PropertiesService,
    private categoriesService: CategoriesService
  ) { }

  createProductImgUrl(img: string) {
    return `product-images/${img}`
  }

  async create(createProductDto: CreateProductDto, img: string) {
    const category = await this.categoriesService.findOne(createProductDto.categoryId)

    if (!category) {
      throw new BadRequestException('Категории с таким id не существует')
    }
    console.log(category.id)
    const properties = await this.propertiesService.findAllByCategoryId(category.id)


    const notFoundPropertyIds = []
    const incorrectProperties = []
    const unwantedProperties = []
    properties.forEach(property => {
      const foundProperty = createProductDto.properties.find(dtoProperty => dtoProperty.propertyId === property.id)

      if (!foundProperty) {
        if (property.optional) return
        notFoundPropertyIds.push(property.id)
        return
      }

      if (property.options?.length) {
        const allowedValue = property.options.includes(foundProperty.value)
        if (!allowedValue) {
          incorrectProperties.push(property.id)
          return
        }
      }
    })



    createProductDto.properties.forEach(dtoProperty => {
      const foundProperty = properties.find(property => property.id === dtoProperty.propertyId)

      if (!foundProperty) {
        unwantedProperties.push(dtoProperty.propertyId)
      }
    })


    if (notFoundPropertyIds.length || incorrectProperties.length || unwantedProperties.length) {
      throw new BadRequestException(`Некорректные данные по свойствам! id недостающих свойств: ${notFoundPropertyIds.join(', ')};
      id неверных свойств (значение недопустимо): ${incorrectProperties.join(', ')}; id свойств, не входящих в категорию: ${unwantedProperties.join(', ')};`)
    }

    const product = await this.productRepository.create({ ...(createProductDto as ProductCreationAttributes), img });

    for(let property of createProductDto.properties){
      await this.productPropertyRepository.create({ productId: product.id, propertyId: property.propertyId, value: property.value })
    }
    
    
    const resultProduct = await this.findOne(product.id)

    return resultProduct
  }

  async findAll() {
    const products = await this.productRepository.findAll({
      include: [
        {
          model: Property,
          attributes: ['id', 'name'], // Выбираем id и имя свойства
          through: { attributes: ['value'], as: 'propertyValue' }, // Выбираем только значение свойства
          required: true,
          as: 'properties',
        }
      ]
    })

    products.forEach(product => product.set('img', this.createProductImgUrl(product.img)))

    return products
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne({
      where: { id },
      include: [
        {
          model: Property,
          attributes: ['id', 'name'], // Выбираем id и имя свойства
          through: { attributes: ['value'], as: 'propertyValue' }, // Выбираем только значение свойства
          required: true,
          as: 'properties',
        }
      ]
    })
    if (!product) {
      throw new BadRequestException({message: 'Товара не существует'})
    }

    product.set('img', this.createProductImgUrl(product.img))

    return product
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.findOne({ where: { id } })
    product.set({ ...updateProductDto })
    product.save()
    return product;
  }

  async remove(id: number) {
    const product = await this.productRepository.findOne({ where: { id } })
    return product.destroy();
  }

  async updateProductProperty(updateProductPropertyDto: UpdateProductPropertyDto) {
    const productProperty = await this.productPropertyRepository.findOne({where: {productId: updateProductPropertyDto.productId, propertyId: updateProductPropertyDto.propertyId}})

    if (!productProperty) {
      throw new BadRequestException(`Неверные id`)
    }

    const property = await this.propertiesService.findOne(updateProductPropertyDto.propertyId)
    console.log(property?.options?.includes(productProperty.value))
    if (!property?.options?.length || property?.options?.includes(updateProductPropertyDto.value)) {
      productProperty.set('value', updateProductPropertyDto.value)
      productProperty.save()
      return productProperty
    }
    throw new BadRequestException(`Значение недопустимо`)
  }
}
