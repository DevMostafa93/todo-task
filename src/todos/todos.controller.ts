import { Body, Controller, Delete, Get, Logger, Param, Post, Put, Req, Res } from '@nestjs/common';
import { CreateItemDto, CreateTodoDto, TodoIdAndItemIdDto, TodoIdDto, UpdateItemDto, UpdateTodoDto } from './Dto/todos.dto';
import { TodosService } from './todos.service';
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('todos')
export class TodosController {

    constructor(private todosService: TodosService,) { }

    @Post('/')
    @ApiOkResponse({ description: 'Todo created succefully' })
    @ApiBadRequestResponse({ description: 'parameters failed validation' })
    @ApiInternalServerErrorResponse({ description: 'System failed to handle your request' })
    async createTodo(@Body() createTodoDto: CreateTodoDto, @Req() req, @Res() res) {
        try {
            let todo = await this.todosService.createTodo(createTodoDto);
            return res.status(201).json({ error: false, message: 'Todo created succefully', data: todo })
        } catch (err) {
            Logger.error(err);
            throw err;
        }
    }

    @Put(':todoId')
    async updateTodo(@Param() params: TodoIdDto, @Body() updateTodoDto: UpdateTodoDto, @Req() req, @Res() res) {
        try {
            let todo = await this.todosService.updateTodo(params.todoId, updateTodoDto);
            return res.status(200).json({ error: false, message: 'Todo updated succefully', data: todo })
        } catch (err) {
            Logger.error(err);
            throw err;
        }
    }

    @Delete(':todoId')
    async deleteTodo(@Param() params: TodoIdDto, @Req() req, @Res() res) {
        try {
            let todo = await this.todosService.deleteTodo(params.todoId);
            return res.status(200).json({ error: false, message: 'Todo deleted succefully', data: todo })
        } catch (err) {
            Logger.error(err);
            throw err;
        }
    }

    @Put(':todoId/isCompolete')
    async updateTodoIsCompolete(@Param() params: TodoIdDto, @Req() req, @Res() res) {
        try {
            let todo = await this.todosService.updateTodoIsCompolete(params.todoId);
            return res.status(200).json({ error: false, message: 'Todo marked as isCompolete succefully', data: todo })
        } catch (err) {
            Logger.error(err);
            throw err;
        }
    }

    @Get(':todoId/items')
    async getTodoItems(@Param() params: TodoIdDto, @Req() req, @Res() res) {
        try {
            let items = await this.todosService.getTodoItems(params.todoId);
            return res.status(200).json({ error: false, message: 'Get Todo items succefully', data: items })
        } catch (err) {
            Logger.error(err);
            throw err;
        }
    }

    @Delete(':todoId/items/:itemId')
    async deleteTodoItem(@Param() params: TodoIdAndItemIdDto, @Req() req, @Res() res) {
        try {
            let items = await this.todosService.deleteTodoItem(params.todoId, params.itemId);
            return res.status(200).json({ error: false, message: 'Item removed from todo succefully', data: items })
        } catch (err) {
            Logger.error(err);
            throw err;
        }
    }

    @Post(':todoId/items')
    async AddTodoItem(@Param() params: TodoIdDto, @Body() createItemDto: CreateItemDto, @Req() req, @Res() res) {
        try {
            let items = await this.todosService.AddTodoItem(params.todoId, createItemDto);
            return res.status(200).json({ error: false, message: 'Item added to todo succefully', data: items })
        } catch (err) {
            Logger.error(err);
            throw err;
        }
    }

    @Put(':todoId/items/:itemId/isCompoleted')
    async updateTodoItemIsCompoleted(@Param() params: TodoIdAndItemIdDto, @Req() req, @Res() res) {
        try {
            let items = await this.todosService.updateTodoItemIsCompoleted(params.todoId, params.itemId);
            return res.status(200).json({ error: false, message: 'Item isCompoleted updated succefully', data: items })
        } catch (err) {
            Logger.error(err);
            throw err;
        }
    }

    @Put(':todoId/items/:itemId')
    async updateTodoItem(@Param() params: TodoIdAndItemIdDto, @Body() updateItemDto: UpdateItemDto, @Req() req, @Res() res) {
        try {
            let items = await this.todosService.updateTodoItem(params.todoId, params.itemId, updateItemDto);
            return res.status(200).json({ error: false, message: 'Item updated succefully', data: items })
        } catch (err) {
            Logger.error(err);
            throw err;
        }
    }

}
