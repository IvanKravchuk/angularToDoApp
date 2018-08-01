import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private searchProp: string;

  public get currentList () {
    return this.todoService.getTodos(this.searchProp);
  }

  public search (search: any) {
    this.searchProp = search;
  }

  constructor(private todoService: TodoService) { }
}
