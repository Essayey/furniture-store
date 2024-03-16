import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { ProductsModule } from 'src/products/products.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './categories.model';
import { Product } from 'src/products/products.model';
import { Property } from 'src/properties/properties.model';
import { PropertyCategory } from 'src/properties/property-category.model';
import { PropertiesModule } from 'src/properties/properties.module';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [
    SequelizeModule.forFeature([Category, Product, Property, PropertyCategory]),
    PropertiesModule
  ]
})
export class CategoriesModule {}
