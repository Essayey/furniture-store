import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript"
import { Cart } from "src/carts/carts.model";
import { Order } from "src/orders/orders.model";
import { Review } from "src/reviews/reviews.model";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";


interface UserCreationAttibutes {
    email: string,
    password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttibutes>{
    @ApiProperty({example: '1', description: 'id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'email@email.com', description: 'email'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: 'password', description: 'password'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'firstName', description: 'firstName'})
    @Column({type: DataType.STRING, allowNull: false})
    firstName: string;

    @ApiProperty({example: 'lastName', description: 'lastName'})
    @Column({type: DataType.STRING, allowNull: false})
    lastName: string;

    @ApiProperty({example: 'address 3, address 3', description: 'address'})
    @Column({type: DataType.STRING, allowNull: true})
    address: string;

    @ApiProperty({example: '+7800293928', description: 'phoneNumber'})
    @Column({type: DataType.STRING, allowNull: true})
    phoneNumber: string;

    @ApiProperty({example: 'false', description: 'Забанен?'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'Причина бана'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]

    @HasMany(() => Review)
    reviews: Review[];

    @HasMany(() => Cart)
    carts: Cart[];

    @HasMany(() => Order)
    orders: Order[];
}