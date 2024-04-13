import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { createDiskStorage } from 'src/lib/createDiskStorage';
import { FormDataRequest } from 'nestjs-form-data';
import { UpdateProductPropertyDto } from './dto/update-product-property.dto';
import { FindAllProductsDto } from './dto/find-all-products.dto';

@ApiTags('Товары')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('img', {
    storage: createDiskStorage('product-images')
  }
  ))
  create(@UploadedFile() img, @Body() createProductDto: CreateProductDto) {
    console.log(createProductDto)
    console.log(createProductDto.properties)
    let body: CreateProductDto
  

    if (typeof createProductDto.properties === 'string') {
      body = {...createProductDto, properties: JSON.parse(createProductDto.properties)};
    }

    return this.productsService.create(body, img.filename);
  }

  @Post('/findAllByFilters')
  findAllByFilters(@Body() findAllProductsDto: FindAllProductsDto) {
    return this.productsService.findAll(findAllProductsDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }


  @Put(['updateProductProperty'])
  updateProductProperty(@Body() updateProductPropertyDto: UpdateProductPropertyDto) {
    return this.productsService.updateProductProperty(updateProductPropertyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
