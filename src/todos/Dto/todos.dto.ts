import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString, IsUUID } from "class-validator"

export class CreateTodoDto {
    @ApiProperty({
        type: String,
    })
    @IsString()
    @IsNotEmpty()
    title: string

    @ApiProperty({
        type: String,
    })
    @IsString()
    @IsNotEmpty()
    description: string
}

export class UpdateTodoDto {
    @ApiProperty({
        type: String,
    })
    @IsString()
    @IsNotEmpty()
    title: string

    @ApiProperty({
        type: String,
    })
    @IsString()
    @IsNotEmpty()
    description: string
}

export class CreateItemDto {
    @ApiProperty({
        type: String,
    })
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({
        type: String,
    })
    @IsString()
    @IsNotEmpty()
    description: string
}

export class UpdateItemDto {
    @ApiProperty({
        type: String,
    })
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({
        type: String,
    })
    @IsString()
    @IsNotEmpty()
    description: string
}

export class TodoIdDto {
    @ApiProperty({
        type: String,
    })
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    todoId: string
}

export class TodoIdAndItemIdDto {
    @ApiProperty({
        type: String,
    })
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    todoId: string

    @ApiProperty({
        type: String,
    })
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    itemId: string
}

