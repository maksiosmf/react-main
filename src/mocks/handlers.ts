// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'

export type Todo = {
  text: string,
  id: number,
}

let todos: Todo[] = [
  {text: 'sigma', id: 1},
]
 
export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('https://example.com/user', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),

  http.get('/ToDoList2', () => {
    return HttpResponse.json({
      data: todos,
    })
  }),
  http.post("/toDoList2", async (request) => {
    const result = await request.json();
    todos.push({text: result.ToDoText, id: Math.ceil(Math.random() * 10000)});
    return HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      firstName: 'John',
      lastName: 'Maverick',
    });
  }),
  http.delete("/toDoList2", async (request) => {
    todos = todos.filter((elem) => elem.id !== request.body.id);
    return HttpResponse.json({});
  })
];
