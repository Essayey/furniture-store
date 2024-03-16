import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Property } from './properties.model';
import { Category } from 'src/categories/categories.model';
import { PropertyCategory } from './property-category.model';
import { ProductProperty } from 'src/products/product-property.model';

@Module({
  controllers: [PropertiesController],
  providers: [PropertiesService],
  imports: [
    SequelizeModule.forFeature([Property, Category, PropertyCategory, ProductProperty]),
  ],
  exports: [
    PropertiesService
  ]
})
export class PropertiesModule {}
