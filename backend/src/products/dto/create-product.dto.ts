import { ApiProperty } from "@nestjs/swagger";



export class CreateProductDto {
    @ApiProperty({ example: 'Название продукта', description: 'Название продукта' })
    readonly name: string;

    @ApiProperty({ example: 'Описание продукта', description: 'Описание продукта' })
    readonly description: string;

    @ApiProperty({ type: 'string', format: 'binary', description: 'Изображение продукта' })
    readonly img: any;

    @ApiProperty({ example: 'Идентификатор категории', description: 'Идентификатор категории' })
    readonly categoryId: number;

    @ApiProperty({ example: [{ propertyId: 1, value: 'Значение1' }, { propertyId: 2, value: 'Значение2' }], description: 'Массив объектов свойств', type: 'array', items: { type: 'object', properties: { propertyId: { type: 'number', example: 1 }, value: { type: 'string', example: 'Значение1' } } } })
    readonly properties: { propertyId: number; value: string; }[];

    @ApiProperty({ example: 10, description: 'Количество продукта' })
    readonly amount: number;

    @ApiProperty({ example: 100, description: 'Цена продукта' })
    readonly price: number;
}