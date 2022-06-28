import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateItemDto, CreateTodoDto, UpdateItemDto, UpdateTodoDto } from "../Dto/todos.dto";
import { Todos, TodosDocument } from "../schemas/todos.schema";

@Injectable()
export class TodosRepository {
    constructor(@InjectModel('Todos') private todosModel: Model<TodosDocument>) { }

    async createTodo(todoDto: CreateTodoDto): Promise<Todos> {
        const newTodo = new this.todosModel(todoDto);
        return newTodo.save()
    }

    async updateTodo(todoId: string, updateTodoDto: UpdateTodoDto): Promise<Todos> {
        let todo = await this.todosModel.findByIdAndUpdate(todoId, updateTodoDto, { new: true, runValidators: true })

        if (!todo)
            throw new HttpException('cant find todo', HttpStatus.BAD_REQUEST);

        return todo
    }

    async deleteTodo(todoId: string): Promise<Todos> {
        let todo = await this.todosModel.findByIdAndDelete(todoId)

        if (!todo)
            throw new HttpException('cant find todo', HttpStatus.BAD_REQUEST);

        return todo
    }

    async updateTodoIsCompolete(todoId: string): Promise<Todos> {
        let todo = await this.todosModel.findOneAndUpdate({ todoId, isCompolete: false }, { isCompolete: true }, { new: true, runValidators: true })

        if (!todo)
            throw new HttpException('cant find todo or todo is already Compoleted', HttpStatus.BAD_REQUEST);

        return todo
    }

    async getTodoItems(todoId: string): Promise<Todos> {
        let todo = await this.todosModel.findById(todoId).select('items')

        if (!todo)
            throw new HttpException('cant find todo', HttpStatus.BAD_REQUEST);

        return todo
    }

    async deleteTodoItem(todoId: string, itemId: string): Promise<Todos> {
        let todo = await this.todosModel.findOneAndUpdate({ todoId, 'items._id': itemId }, { $pull: { items: { _id: itemId } } }, { new: true, runValidators: true })

        if (!todo)
            throw new HttpException('cant find todo or item', HttpStatus.BAD_REQUEST);

        return todo
    }

    async AddTodoItem(todoId: string, createItemDto: CreateItemDto): Promise<Todos> {
        let todo = await this.todosModel.findByIdAndUpdate(todoId, { $push: { items: createItemDto } }, { new: true, runValidators: true })

        if (!todo)
            throw new HttpException('cant find todo', HttpStatus.BAD_REQUEST);

        return todo
    }

    async updateTodoItemIsCompoleted(todoId: string, itemId: string): Promise<Todos> {
        let todo = await this.todosModel.findOneAndUpdate({ todoId, 'items._id': itemId, 'items.isCompoleted': false }, { $set: { 'items.$.isCompoleted': true } }, { new: true, runValidators: true })

        if (!todo)
            throw new HttpException('cant find todo or item or item is already Compoleted', HttpStatus.BAD_REQUEST);

        if (!todo.isCompolete && todo.items.every((item) => item.isCompoleted)) {
            return await this.todosModel.findByIdAndUpdate(todoId, { isCompolete: true }, { new: true, runValidators: true })
        }

        else
            return todo
    }

    async updateTodoItem(todoId: string, itemId: string, updateItemDto: UpdateItemDto): Promise<Todos> {
        let todo = await this.todosModel.findOneAndUpdate({ todoId, 'items._id': itemId }, { $set: { 'items.$.name': updateItemDto.name, 'items.$.description': updateItemDto.description } }, { new: true, runValidators: true })

        if (!todo)
            throw new HttpException('cant find todo or item', HttpStatus.BAD_REQUEST);

        return todo
    }

}