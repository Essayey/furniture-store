import { ApiProperty } from "@nestjs/swagger";

export class UpdateProductPropertyDto {
    @ApiProperty({ example: 1, description: 'Идентификатор продукта' })
    readonly productId: number;

    @ApiProperty({ example: 1, description: 'Идентификатор свойства' })
    readonly propertyId: number;

    @ApiProperty({ example: 'Новое значение', description: 'Новое значение свойства' })
    readonly value: string;
}