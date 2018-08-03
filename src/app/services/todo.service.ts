import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';
// import { Subject, Subscription, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[];
  private nextId: number;
  public filterdTotos: Todo[];
  // public search


  constructor() {
    this.todos = [
      new Todo(0, 'qwe1'),
      new Todo(1, 'qwe2'),
      new Todo(3, 'qwe3')
    ];

    this.nextId = 3;
    this.filterdTotos = this.todos;
  }

  public addTodo(title: string): void {
    const todo = new Todo(this.nextId, title);
    this.todos.push(todo);
    this.nextId++;
  }

  public getTodos(searchText = ''): Todo[] {
    return this.todos.filter(item => item.title.indexOf(searchText) !== -1);
  }

  public removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

}
