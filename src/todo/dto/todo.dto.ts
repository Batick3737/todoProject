import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"
import { todoState } from "../entity/todo.entity"

export class TodoDto {
    @ApiProperty()
    @IsString()
    title: string

    @ApiProperty()
    @IsString()
    state: todoState
}