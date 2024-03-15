import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Product } from './products.model';
import { Property } from 'src/properties/properties.model';

interface ProductPropertyCreationAttributes {
    productId: number;
    propertyId: number;
    value: string;
}

@Table({tableName: 'product-properties'})
export class ProductProperty extends Model<ProductProperty, ProductPropertyCreationAttributes>{
    @ApiProperty({example: '1', description: 'Идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({ example: 'Синий', description: 'Значение свойства' })
    @Column({ type: DataType.STRING, allowNull: false })
    value: string;

    @ApiProperty({ example: '1', description: 'ID пользователя' })
    @ForeignKey(() => Product)
    @Column({ type: DataType.INTEGER, allowNull: false })
    productId: number;

    @BelongsTo(() => Product)
    product: Product;

    @ApiProperty({ example: '1', description: 'ID продукта' })
    @ForeignKey(() => Property)
    @Column({ type: DataType.INTEGER, allowNull: false })
    propertyId: number;

    @BelongsTo(() => Property)
    property: Property;
}