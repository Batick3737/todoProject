import { EntityRepository, Repository } from "typeorm";
import { TodoDto } from "../dto/todo.dto";
import { Todo } from "../entity/todo.entity";

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {
    async createTodo(
        todoDto: TodoDto,
    ): Promise<Todo> {
        const { title, state } = todoDto

        const todo = new Todo()

        todo.title = title
        todo.state = state

        await todo.save()

        return todo
    }

    async getAllTodo(): Promise<Todo[]> {
        const query = this.createQueryBuilder('todo')
        const todos = await query.getMany()
        return todos
    }
}