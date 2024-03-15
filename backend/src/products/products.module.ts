import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './products.model';
import { Category } from 'src/categories/categories.model';
import { Review } from 'src/reviews/reviews.model';
import { Cart } from 'src/carts/carts.model';
import { OrderItem } from 'src/orders/order-item.model';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    SequelizeModule.forFeature([Product, Category, Review, Cart, OrderItem]),
  ]
})
export class ProductsModule {}
