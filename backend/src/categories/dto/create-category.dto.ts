import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
    @ApiProperty({ example: 1, description: 'Идентификатор родительской категории' })
    readonly parentId: number;

    @ApiProperty({ example: 'Название категории', description: 'Название категории' })
    readonly name: string;

    @ApiProperty({ example: 'Описание категории', description: 'Описание категории' })
    readonly description: string;
}
