import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiTags } from '@nestjs/swagger';
import { SetIsFinalDto } from './dto/setIsFinal.dto';

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
  findOne(@Param('id') id: number) {
    return this.categoriesService.findOne(+id);
  }


  @Post(['getFinalCategories'])
  findFinal() {
    return this.categoriesService.getFinalCategories()
  }

  @Put(['setIsFinal/:id'])
  setIsFinal(@Param('id') id: number, @Body() setIsFinalDto: SetIsFinalDto){
    return this.categoriesService.setIsFinal(id, setIsFinalDto)
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.categoriesService.remove(+id);
  }

  @Put(['addPropertyToCategory/:categoryId/:propertyId'])
  addPropertyToCategory(@Param('categoryId') categoryId: number, @Param('propertyId') propertyId: number) {
    return this.categoriesService.addPropertyToCategory(+categoryId, +propertyId);
  }

  @Delete(['removePropertyFromCategory/:categoryId/:propertyId'])
  removePropertyFromCategory(@Param('categoryId') categoryId: number, @Param('propertyId') propertyId: number) {
    return this.categoriesService.removePropertyFromCategory(+categoryId, +propertyId);
  }


}
