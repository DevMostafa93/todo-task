import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  }), DbModule, TodosModule,],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
