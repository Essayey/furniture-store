import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { Role } from "./roles/roles.model";
import { RolesModule } from './roles/roles.module';
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { ReviewsModule } from './reviews/reviews.module';
import { Category } from "./categories/categories.model";
import { Product } from "./products/products.model";
import { Review } from "./reviews/reviews.model";
import { PropertiesModule } from './properties/properties.module';
import { OrdersModule } from './orders/orders.module';
import { CartsModule } from './carts/carts.module';
import { Cart } from "./carts/carts.model";
import { Property } from "./properties/properties.model";
import { PropertyCategory } from "./properties/property-category.model";
import { Order } from "./orders/orders.model";
import { OrderItem } from "./orders/order-item.model";
import { ProductProperty } from "./products/product-property.model";
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { NestjsFormDataModule } from "nestjs-form-data";

@Module({
    controllers: [],
    providers: [],
    imports: [
        NestjsFormDataModule,
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'static'),
        }),
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRESS_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles, Category, Product, Review, Cart, Property, PropertyCategory, Order, OrderItem, ProductProperty],
            autoLoadModels: true
          }),
        UsersModule,
        RolesModule,
        AuthModule,
        ProductsModule,
        CategoriesModule,
        ReviewsModule,
        PropertiesModule,
        OrdersModule,
        CartsModule,
    ]
})
export class AppModule {}
