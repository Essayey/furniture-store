import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Property } from "./properties.model";
import { Category } from "src/categories/categories.model";


@Table({ tableName: 'property_category', createdAt: false, updatedAt: false })
export class PropertyCategory extends Model<PropertyCategory>{
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(() => Property)
    @Column({ type: DataType.INTEGER})
    propertyId: number;

    @ForeignKey(() => Category)
    @Column({ type: DataType.INTEGER})
    categoryId: number;
}