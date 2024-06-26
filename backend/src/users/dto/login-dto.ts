import { ApiProperty } from "@nestjs/swagger";


export class LoginDto {
    @ApiProperty({example: 'email@email.com', description: 'email'})
    readonly email: string;
    
    @ApiProperty({example: 'password', description: 'password'})
    readonly password: string;
}