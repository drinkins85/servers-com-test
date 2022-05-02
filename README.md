## Messages

Сервис для публикации сообщений с возможностью фильтрации и промиотром информации об авторе.

Демо: https://drinkins85.github.io/servers-com-test/

### Сборка

**production сборка**  

```shell
npm run build
```  

сборка с тестовыми данными (запросы на сервер не отправляются, используются [замоканные данные](https://github.com/drinkins85/servers-com-test/tree/main/src/mocks)) 
```shell
npm run build:mock
```  

**локальная сборка**  

сборка в гибридном режиме (локальный фронт на http://localhost:9000, запросы API на сервер через прокси)  
```shell
npm run start
```
сборка с использованием [json-server](https://github.com/typicode/json-server)  
1. Установить json-server глобально  
```shell
npm install -g json-server
```
2. запустить сервер (сервер полнимется на http://localhost:7777)
```shell
npm run server
```
3. запустить фронт
```shell
npm run start:local
```

локальный ервер с тестовыми данными (запросы на сервер не отправляются, используются [замоканные данные](https://github.com/drinkins85/servers-com-test/tree/main/src/mocks))   
```shell
npm run start:mock
```

## API

```
/api/messages/?page={pageNumber}
```
### Получение списка сообщений  

| method             | get          |
|--------------------|--------------|
| входные параметры  |              |
| Выходные параметры | IMessage[ ]  |


| IMessage  | тип                    | обязательный  |
|-----------|------------------------|---------------|
| id        | number                 | +             |
| date      | string (YYYY-MM-DD)    | +             |
| text      | string                 | +             |
| authorId  | number                 | +             |

### Добавление сообщения
```
/api/message/
```
| method             | post        |
|--------------------|-------------|
| входные параметры  | INewMessage |
| Выходные параметры | IMessage[ ] |


| INewMessage | тип                  | обязательный |
|-------------|----------------------|--------------|
| date        | string (YYYY-MM-DD)  | +            |
| text        | string               | +            |
| authorId    | number               | +            |


### Получение списка авторов
```
/api/authors/
```
Возвращает список авторов. Данные авторов в сокращенном виде

| method             | get        |
|--------------------|------------|
| входные параметры  |            |
| Выходные параметры | IAuthor[ ] |



| IAuthor       | тип      | обязательный  |
|---------------|----------|---------------|
| id            | number   | +             |
| firstName     | string   | +             |
| lastName      | string   | +             |


### Получение автора
```
/api/author/{ID автора}
```
Возвращает полную информацию об авторе

| method             | get      |
|--------------------|----------|
| входные параметры  |          |
| Выходные параметры | IAuthor  |



| IAuthor       | тип      | обязательный  |
|---------------|----------|---------------|
| id            | number   | +             |
| firstName     | string   | +             |
| lastName      | string   | +             |
| detail.avatar | string   |               |
| detail.email  | string   |               |
| detail.phone  | string   |               |
| detail.rating | number   |               |
| detail.msgIds | number[] |               |
