import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Order } from "./orders.model";
import { Product } from "src/products/products.model";



interface OrderItemCreationAttibutes {
    value: string,
    description: string
}

@Table({tableName: 'order_items'})
export class OrderItem extends Model<OrderItem, OrderItemCreationAttibutes>{
    @ApiProperty({ example: 1, description: 'Идентификатор записи товара в заказе' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 1, description: 'Идентификатор заказа' })
    @ForeignKey(() => Order)
    @Column({ type: DataType.INTEGER })
    orderId: number;

    @BelongsTo(() => Order)
    order: Order;

    @ApiProperty({ example: 2, description: 'Идентификатор товара' })
    @ForeignKey(() => Product)
    @Column({ type: DataType.INTEGER })
    productId: number;

    @BelongsTo(() => Product)
    product: Product;

    @ApiProperty({ example: 5, description: 'Количество товаров в заказе' })
    @Column({ type: DataType.INTEGER })
    quantity: number;
}