import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TODO } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor( private http: HttpClient ) {}

  todos: TODO[] = [];


  createTodo(title: string) {
    const todo: TODO = {
      title,
      id: new Date().getTime(),
      userId: 1,
      completed: false,
    }

    this.todos.push(todo);
  }

  deleteTodo(todoId: number) {
  

    const todoIndex = this.todos.findIndex(t => t.id == todoId);
    if (todoIndex == -1) return;
    this.todos.splice(todoIndex, 1);
  }

 
  fetchTodo() {

    if (this.todos.length > 0) return;
   
    this.http.get<TODO[]>('http://jsonplaceholder.typicode.com/todos').subscribe(
      (data) => {
        
        
        this.todos = data.slice(0, 10)
      },
      (error) => {
        console.log(error)
      }
    );
  }
}