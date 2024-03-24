import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './categories.model';
import { PropertyCategory } from 'src/properties/property-category.model';
import { PropertiesService } from 'src/properties/properties.service';
import { Model } from 'sequelize';
import { Property } from 'src/properties/properties.model';
import { SetIsFinalDto } from './dto/setIsFinal.dto';

@Injectable()
export class CategoriesService {

  constructor(@InjectModel(Category) private categoryRepository: typeof Category,
    @InjectModel(PropertyCategory) private propertyCategoryRepository: typeof PropertyCategory,
    private propertiesService: PropertiesService) { }

  private async getAllCategories(parentId = null) {
    const categories = await Category.findAll({
      where: { parentId },
      raw: true,
      nest: true,
    })


    for (const category of categories) {
      category.childCategories = await this.getAllCategories(category.id)
      category.properties = await this.propertiesService.findAllByCategoryId(category.id)
    }

    return categories
  }

  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.categoryRepository.create(createCategoryDto)
    return category
  }

  async findAll() {
    const category = await this.getAllCategories()
    return category
  }

  async findOne(id: number) {
    const category = await this.categoryRepository.findOne({ where: { id } })
    return category
  }

  async setIsFinal(id: number, setIsFinalDto: SetIsFinalDto) {
    const category = await this.categoryRepository.findOne({ where: { id } })
    category.set({ isFinal: setIsFinalDto.isFinal })
    category.save()
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryRepository.findOne({ where: { id } })
    category.set({ ...updateCategoryDto })
    category.save()
    return category;
  }

  async remove(id: number) {
    const category = await this.categoryRepository.findOne({ where: { id } })
    category.destroy()
  }

  async getFinalCategories() {
    const categories = await this.categoryRepository.findAll({ where: { isFinal: true } })
    if (!categories) return []
    return categories
  }

  async addPropertyToCategory(categoryId: number, propertyId: number) {
    const category = await this.categoryRepository.findOne({ where: { id: categoryId } })


    if (!category) {
      throw new BadRequestException('Категории с таким id не существует')
    }

    const property = await this.propertiesService.findOne(propertyId)
    if (!property) {
      throw new BadRequestException('Свойства с таким id не существует')
    }

    const propertyCategory = await this.propertyCategoryRepository.findOne({ where: { propertyId, categoryId } })
    if (propertyCategory) {
      throw new BadRequestException('Данное свойство уже находится в данной категории')
    }

    await this.propertyCategoryRepository.create({ propertyId, categoryId })
    return 'Успешно'
  }

  async removePropertyFromCategory(categoryId: number, propertyId: number) {
    const category = await this.categoryRepository.findOne({ where: { id: categoryId } })


    if (!category) {
      throw new BadRequestException('Категории с таким id не существует')
    }

    const property = await this.propertiesService.findOne(propertyId)
    if (!property) {
      throw new BadRequestException('Свойства с таким id не существует')
    }

    const propertyCategory = await this.propertyCategoryRepository.findOne({ where: { propertyId, categoryId } })
    if (!propertyCategory) {
      throw new BadRequestException('Данного свойства нет в данной категории')
    }

    await propertyCategory.destroy()
    return 'Успешно'
  }

}
