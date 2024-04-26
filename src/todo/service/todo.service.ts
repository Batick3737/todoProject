import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TodoDto } from "../dto/todo.dto";
import { Todo } from "../entity/todo.entity";
import { TodoRepository } from "../repository/todo.repository";

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(TodoRepository)
        private todoRepository: TodoRepository
    ) {}

    async getAllTodo(): Promise<Todo[]>{
        return this.todoRepository.getAllTodo()
    }

    async createTodo(
        todoDto: TodoDto,
    ): Promise<Todo> {
        console.log('todoService: ', this.todoRepository)
        return this.todoRepository.createTodo(todoDto)
    }



    async deleteTodoById(id: number): Promise<void> {
        const todo = await this.todoRepository.delete({ id })

        if (todo.affected === 0) {
            throw new NotFoundException(`This ${id} is not found`)
        }
    }
}