import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from './properties.model';
import { InjectModel } from '@nestjs/sequelize';
import { PropertyCategory } from './property-category.model';

@Injectable()
export class PropertiesService {

  constructor(@InjectModel(Property) private propertyRepository: typeof Property,
    @InjectModel(PropertyCategory) private propertyCategoryRepository: typeof PropertyCategory
  ) { }

  async create(createPropertyDto: CreatePropertyDto) {
    const property = await this.propertyRepository.create(createPropertyDto)
    return property
  }

  async findAll() {
    const properties = await this.propertyRepository.findAll()
    return properties
  }

  async findAllByCategoryId(id: number) {
    const propertyCategories = await this.propertyCategoryRepository.findAll({ where: { categoryId: id }, })
    const properties = await Promise.all(propertyCategories.map(async propertyCategory => {
      const result = this.findOne(propertyCategory.propertyId)
      return result
    }))

    return properties
  }

  async findOne(id: number) {
    const property = await this.propertyRepository.findOne({ where: { id } })
    return property
  }

  async update(id: number, updatePropertyDto: UpdatePropertyDto) {
    const property = await this.propertyRepository.findOne({ where: { id } })
    property.set({ ...updatePropertyDto })
    property.save()
    return property;
  }

  async remove(id: number) {
    const property = await this.propertyRepository.findOne({ where: { id } })
    return property.destroy()
  }
}
