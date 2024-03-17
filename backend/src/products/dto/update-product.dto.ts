import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto {
    @ApiProperty({ example: 'Название продукта', description: 'Название продукта' })
    readonly name: string;

    @ApiProperty({ example: 'Описание продукта', description: 'Описание продукта' })
    readonly description: string;

    @ApiProperty({ example: 10, description: 'Количество продукта' })
    readonly amount: number;

    @ApiProperty({ example: 100, description: 'Цена продукта' })
    readonly price: number;
}
