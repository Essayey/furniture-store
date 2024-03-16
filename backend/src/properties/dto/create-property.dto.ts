import { ApiProperty } from "@nestjs/swagger";

export class CreatePropertyDto {
    @ApiProperty({ example: 'Цвет', description: 'Название свойства' })
    readonly name: string;

    @ApiProperty({ example: ['Серый', 'Синий'], description: 'Массив опций для свойства. Если свойством является любая строка прислать пустой массив.', type: [String], required: false })
    readonly options?: string[];

    @ApiProperty({ example: 'Основной цвет товара.', description: 'Описание свойства' })
    readonly description: string;

    @ApiProperty({ example: true, description: 'Флаг, указывающий, является ли свойство необязательным' })
    readonly optional: boolean;
}