import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Категории')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }

  @Put(['addPropertyToCategory/:categoryId/:propertyId'])
  addPropertyToCategory(@Param('categoryId') categoryId: string, @Param('propertyId') propertyId: string) {
    return this.categoriesService.addPropertyToCategory(+categoryId, +propertyId);
  }

  @Delete(['removePropertyFromCategory/:categoryId/:propertyId'])
  removePropertyFromCategory(@Param('categoryId') categoryId: string, @Param('propertyId') propertyId: string) {
    return this.categoriesService.removePropertyFromCategory(+categoryId, +propertyId);
  }
}
