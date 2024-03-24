import { ApiProperty } from "@nestjs/swagger";

export class SetIsFinalDto {
    @ApiProperty({ example: true, description: 'Изменить финальность категории' })
    readonly isFinal: boolean;
}
