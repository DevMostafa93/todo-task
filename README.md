<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# NestJS API

This backend is based on NestJS Framework V8.1.5 (https://nestjs.com/) and nodejs v16.13.1, This is API Backend for todo app

- Mongo DB
- Nestjs
- mongoose



## Env VARS: (create a .env file in root)
```bash
PORT=3000
MONGO_URI=mongodb://localhost:27017/todo


```

## Run with docker compose

```bash
cp env.example .env
```
you must make sure that MONGO_URI=mongodb://mongodb:27017/todo

```bash
docker-compose up -d

```
## run app local
nodejs v16.13.1 

```bash
cp env.example .env
```

```bash
$ npm install
$ npm run start
```

Server will be running on http://localhost:3000
to check endpoint health on http://localhost:3000/health
docs will be running on http://localhost:3000/docs

# Endpoints

```bash
[Nest] 101522  - 06/27/2022, 8:57:06 PM     LOG [RoutesResolver] AppController {/}: +14ms
[Nest] 101522  - 06/27/2022, 8:57:06 PM     LOG [RouterExplorer] Mapped {/health, GET} route +3ms
[Nest] 101522  - 06/27/2022, 8:57:06 PM     LOG [RoutesResolver] TodosController {/todos}: +1ms
[Nest] 101522  - 06/27/2022, 8:57:06 PM     LOG [RouterExplorer] Mapped {/todos, POST} route +1ms
[Nest] 101522  - 06/27/2022, 8:57:06 PM     LOG [RouterExplorer] Mapped {/todos/:todoId, PUT} route +1ms
[Nest] 101522  - 06/27/2022, 8:57:06 PM     LOG [RouterExplorer] Mapped {/todos/:todoId, DELETE} route +0ms
[Nest] 101522  - 06/27/2022, 8:57:06 PM     LOG [RouterExplorer] Mapped {/todos/:todoId/isCompolete, PUT} route +1ms
[Nest] 101522  - 06/27/2022, 8:57:06 PM     LOG [RouterExplorer] Mapped {/todos/:todoId/items, GET} route +0ms
[Nest] 101522  - 06/27/2022, 8:57:06 PM     LOG [RouterExplorer] Mapped {/todos/:todoId/items/:itemId, DELETE} route +1ms
[Nest] 101522  - 06/27/2022, 8:57:06 PM     LOG [RouterExplorer] Mapped {/todos/:todoId/items, POST} route +1ms
[Nest] 101522  - 06/27/2022, 8:57:06 PM     LOG [RouterExplorer] Mapped {/todos/:todoId/items/:itemId/isCompoleted, PUT} route +1ms
[Nest] 101522  - 06/27/2022, 8:57:06 PM     LOG [RouterExplorer] Mapped {/todos/:todoId/items/:itemId, PUT} route +1ms
[Nest] 101522  - 06/27/2022, 8:57:06 PM     LOG [NestApplication] Nest application successfully started +3ms
app listening at port 3000
```
