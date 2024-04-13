import { ApiProperty } from "@nestjs/swagger";


export class FindAllProductsDto {
    @ApiProperty({ example: 'id категории', description: '1' })
    readonly categoryId?: number;

    @ApiProperty({ example: [{ propertyId: 1, value: 'Значение1' }, { propertyId: 2, value: 'Значение2' }], description: 'Массив объектов свойств', type: 'array', items: { type: 'object', properties: { propertyId: { type: 'number', example: 1 }, value: { type: 'string', example: 'Значение1' } } } })
    readonly properties?: { propertyId: number; value: string; }[];
}