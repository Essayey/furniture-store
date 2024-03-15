import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './categories.model';

@Injectable()
export class CategoriesService {

  constructor(@InjectModel(Category) private categoryRepository: typeof Category) { }

  private async getAllCategories(parentId = null) {
    const categories = await Category.findAll({
      where: { parentId },
      raw: true, // Получаем сырые данные без моделей Sequelize
    });

    // Рекурсивно получаем дочерние категории для каждой категории
    for (const category of categories) {
      category.childCategories = await this.getAllCategories(category.id);
    }

    return categories;
  };

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

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    
    return `This action updates a #${id} category`;
  }

  async remove(id: number) {
    const category = await this.categoryRepository.findOne({ where: { id } })
    category.destroy()
  }
}
