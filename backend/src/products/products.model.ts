import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany, HasOne } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../categories/categories.model'; // Подключаем модель категории
import { Review } from '../reviews/reviews.model'; // Подключаем модель отзыва
import { Cart } from 'src/carts/carts.model';
import { OrderItem } from 'src/orders/order-item.model';

interface ProductCreationAttributes {
    name: string,
    description: string
    img: string
    categoryId: string
    collectionId?: string
    properties: {
        propertyId: string,
        value: string
    }[]
    amount: number
    price: number
}

@Table({tableName: 'products'})
export class Product extends Model<Product, ProductCreationAttributes>{
    @ApiProperty({example: '1', description: 'Идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({ example: 'Название продукта', description: 'Название продукта' })
    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @ApiProperty({ example: 'Описание продукта', description: 'Описание продукта' })
    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    @ApiProperty({ example: 'изображение.jpg', description: 'URL изображения продукта' })
    @Column({ type: DataType.STRING, allowNull: false })
    img: string;

    @ApiProperty({ example: [{ propertyId: 'color', value: 'red' }], description: 'Массив свойств' })
    @Column({ type: DataType.JSONB, allowNull: false })
    properties: { propertyId: string, value: string }[];

    @ApiProperty({ example: 10, description: 'Количество товаров' })
    @Column({ type: DataType.INTEGER, allowNull: false })
    amount: number;

    @ApiProperty({ example: 100.50, description: 'Цена продукта' })
    @Column({ type: DataType.FLOAT, allowNull: false })
    price: number;




    @ApiProperty({ example: 'идентификатор_категории', description: 'Идентификатор категории' })
    @ForeignKey(() => Category)
    @Column({ type: DataType.INTEGER, allowNull: false })
    categoryId: number;

    @BelongsTo(() => Category)
    category: Category;

    @HasMany(() => Review)
    reviews: Review[];

    @HasMany(() => Cart)
    carts: Cart[];

    @HasMany(() => OrderItem)
    orderItems: OrderItem[];
}