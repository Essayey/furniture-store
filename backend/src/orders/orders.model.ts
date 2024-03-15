import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript"
import { User } from "src/users/users.model";
import { OrderItem } from "./order-item.model";


interface OrderCreationAttibutes {
    value: string,
    description: string
}

@Table({tableName: 'orders'})
export class Order extends Model<Order, OrderCreationAttibutes>{
    @ApiProperty({ example: 1, description: 'Идентификатор заказа' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 1, description: 'Идентификатор пользователя' })
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @HasMany(() => OrderItem)
    orderItems: OrderItem[];
}