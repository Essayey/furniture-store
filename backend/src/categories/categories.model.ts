import { Table, Column, Model, DataType, HasMany, BelongsTo, ForeignKey, BelongsToMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'src/products/products.model';
import { Property } from 'src/properties/properties.model';
import { PropertyCategory } from 'src/properties/property-category.model';

interface CategoryCreationAttributes {
    name: string,
    description: string
}

@Table({ tableName: 'categories' })
export class Category extends Model<Category, CategoryCreationAttributes>{
    @ApiProperty({ example: '1', description: 'Идентификатор' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: '1', description: 'ID родительской категории' })
    @ForeignKey(() => Category)
    @Column({ type: DataType.INTEGER, allowNull: true })
    parentId: number;

    @BelongsTo(() => Category)
    parentCategory: Category;

    @ApiProperty({ example: 'Название категории', description: 'Название категории' })
    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @ApiProperty({ example: 'Описание категории', description: 'Описание категории' })
    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    @HasMany(() => Product)
    products: Product[];

    @BelongsToMany(() => Property, () => PropertyCategory)
    properties: Property[]
}