import { Injectable } from '@nestjs/common';
import { CreateItemDto, CreateTodoDto, UpdateItemDto, UpdateTodoDto } from './Dto/todos.dto';
import { TodosRepository } from './repository/todos.repository';
import { Todos } from './schemas/todos.schema';

@Injectable()
export class TodosService {

    constructor(private todosRepository: TodosRepository,) { }

    async createTodo(createTodoDto: CreateTodoDto): Promise<Todos> {

        return await this.todosRepository.createTodo(createTodoDto)
    }

    async updateTodo(todoId: string, updateTodoDto: UpdateTodoDto): Promise<Todos> {

        return await this.todosRepository.updateTodo(todoId, updateTodoDto)
    }

    async deleteTodo(todoId: string): Promise<Todos> {

        return await this.todosRepository.deleteTodo(todoId)
    }

    async updateTodoIsCompolete(todoId: string): Promise<Todos> {

        return await this.todosRepository.updateTodoIsCompolete(todoId)
    }

    async getTodoItems(todoId: string): Promise<Todos> {

        return await this.todosRepository.getTodoItems(todoId)
    }

    async deleteTodoItem(todoId: string, itemId: string): Promise<Todos> {

        return await this.todosRepository.deleteTodoItem(todoId, itemId)
    }

    async AddTodoItem(todoId: string, createItemDto: CreateItemDto): Promise<Todos> {

        return await this.todosRepository.AddTodoItem(todoId, createItemDto)
    }

    async updateTodoItemIsCompoleted(todoId: string, itemId: string): Promise<Todos> {

        return await this.todosRepository.updateTodoItemIsCompoleted(todoId, itemId)
    }

    async updateTodoItem(todoId: string, itemId: string, updateItemDto: UpdateItemDto): Promise<Todos> {

        return await this.todosRepository.updateTodoItem(todoId, itemId, updateItemDto)
    }
}
