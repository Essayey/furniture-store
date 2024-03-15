import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrderItem } from './order-item.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './orders.model';
import { Product } from 'src/products/products.model';
import { User } from 'src/users/users.model';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [
    SequelizeModule.forFeature([Order, Product, User, OrderItem])
  ],
})
export class OrdersModule {}
