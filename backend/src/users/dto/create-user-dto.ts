import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDto {
    @ApiProperty({example: 'email@email.com', description: 'email'})
    readonly email: string;
    
    @ApiProperty({example: 'password', description: 'password'})
    readonly password: string;

    @ApiProperty({example: 'firstName', description: 'firstName'})
    readonly firstName: string;

    @ApiProperty({example: 'lastName', description: 'lastName'})
    readonly lastName: string;

    @ApiProperty({example: 'address 3, address 3', description: 'address'})
    readonly address: string;

    @ApiProperty({example: '+7800293928', description: 'phoneNumber'})
    readonly phoneNumber: string;

    @ApiProperty({example: 'false', description: 'Забанен?'})
    readonly banned: boolean;

    @ApiProperty({example: 'Причина бана'})
    readonly banReason: string;
}