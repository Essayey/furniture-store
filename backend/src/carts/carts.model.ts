import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'src/products/products.model';
import { User } from 'src/users/users.model';

interface CartCreationAttributes {
    userId: number;
    productId: number;
    quantity: number;
}

@Table({tableName: 'carts'})
export class Cart extends Model<Cart, CartCreationAttributes>{
    @ApiProperty({example: '1', description: 'Идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({ example: '1', description: 'ID пользователя' })
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false })
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @ApiProperty({ example: '1', description: 'ID продукта' })
    @ForeignKey(() => Product)
    @Column({ type: DataType.INTEGER, allowNull: false })
    productId: number;

    @BelongsTo(() => Product)
    product: Product;

    @ApiProperty({ example: '3', description: 'Количество продуктов' })
    @Column({ type: DataType.INTEGER, allowNull: false })
    quantity: number;
}