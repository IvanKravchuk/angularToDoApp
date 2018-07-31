import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[];
  private nextId: number;

  constructor() {
    this.todos = [
      new Todo(0, 'qwe1'),
      new Todo(1, 'qwe2'),
      new Todo(3, 'qwe3')
    ];

    this.nextId = 3;
  }

  public addTodo(text: string): void {
    const todo = new Todo(this.nextId, text);
    this.todos.push(todo);
    this.nextId++;
  }

  public getTodos(searchText = ''): Todo[] {
    console.log(searchText);
    console.log(this.todos.filter(item => item.text.indexOf(searchText) !== -1));
    return this.todos.filter(item => item.text.indexOf(searchText) !== -1);
  }

  public removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
