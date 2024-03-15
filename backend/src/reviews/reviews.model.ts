import { Table, Column, Model, DataType, HasMany, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'src/products/products.model';
import { User } from 'src/users/users.model';

interface ReviewCreationAttributes {
    userId: number;
    productId: number;
    value?: string;
    rating: number;
}

@Table({tableName: 'reviews'})
export class Review extends Model<Review, ReviewCreationAttributes>{
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

    @ApiProperty({ example: 'Отзыв на товар', description: 'Отзыв' })
    @Column({ type: DataType.STRING, allowNull: true })
    value: string;

    @ApiProperty({ example: '3', description: 'Рейтинг от 1 до 5' })
    @Column({ type: DataType.INTEGER, allowNull: false })
    rating: number;
}