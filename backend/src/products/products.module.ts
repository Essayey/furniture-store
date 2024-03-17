import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './products.model';
import { Category } from 'src/categories/categories.model';
import { Review } from 'src/reviews/reviews.model';
import { Cart } from 'src/carts/carts.model';
import { OrderItem } from 'src/orders/order-item.model';
import { ProductProperty } from './product-property.model';
import { PropertiesModule } from 'src/properties/properties.module';
import { CategoriesModule } from 'src/categories/categories.module';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { Property } from 'src/properties/properties.model';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    NestjsFormDataModule,
    SequelizeModule.forFeature([Product, Category, Review, Cart, OrderItem, ProductProperty, Property]),
    PropertiesModule,
    CategoriesModule
  ]
})
export class ProductsModule {}
