import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosRepository } from './repository/todos.repository';
import { TodosSchema } from './schemas/todos.schema';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Todos', schema: TodosSchema }]),],
  controllers: [TodosController],
  providers: [TodosService, TodosRepository]
})
export class TodosModule { }
