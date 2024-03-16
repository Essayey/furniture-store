import { Table, Column, Model, DataType, BelongsToMany, HasMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'src/categories/categories.model';
import { PropertyCategory } from './property-category.model';
import { ProductProperty } from 'src/products/product-property.model';


interface PropertyCreationAttributes {
    name: string;
    options?: string[];
    description: string;
    optional: boolean;
}

@Table({ tableName: 'properties' })
export class Property extends Model<Property, PropertyCreationAttributes>{
    @ApiProperty({ example: '1', description: 'Идентификатор' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'Название свойства', description: 'Название свойства' })
    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @ApiProperty({ example: ['option1', 'option2'], description: 'Возможные варианты. Если свойство может принимать любое значение то пустой массив [].' })
    @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: true })
    options?: string[];

    @ApiProperty({ example: 'Описание свойства', description: 'Описание свойства' })
    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    @ApiProperty({ example: true, description: 'Опциональное или обязательное свойство' })
    @Column({ type: DataType.BOOLEAN, allowNull: false })
    optional: boolean;

    @BelongsToMany(() => Category, () => PropertyCategory)
    categories: Category[]

    @HasMany(() => ProductProperty)
    productProperties: ProductProperty[];
}