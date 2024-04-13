import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cart } from './carts.model';
import { User } from 'src/users/users.model';
import { Product } from 'src/products/products.model';
import { ProductsModule } from 'src/products/products.module';

@Module({
  controllers: [CartsController],
  providers: [CartsService],
  imports: [
    SequelizeModule.forFeature([Cart, User, Product]),
    ProductsModule
  ]
})
export class CartsModule {}
