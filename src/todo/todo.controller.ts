
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { TodoDto } from "./dto/todo.dto";
import { Todo } from "./entity/todo.entity";
import { TodoService } from "./service/todo.service";

@ApiTags('Todo')
@Controller('todo')

export class TodoController {
    constructor(
        private todoService: TodoService
    ) {}

    @Get()
    getAllTodo(
    ): Promise<Todo[]> {
        return this.todoService.getAllTodo()
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTodo(
        @Body() todoDto: TodoDto,
    ): Promise<Todo> {
        return this.todoService.createTodo(todoDto)
    }

    @Delete('/:id')
    deleteTodoById(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<void>{
        return this.todoService.deleteTodoById(id)
    }
}