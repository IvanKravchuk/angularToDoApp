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
    // console.log(search);
    // console.log('111', this.todoService.getTodos(search));
    //  this.todoService.getTodos(search);
    this.searchProp = search;
  }

  constructor(private todoService: TodoService) { }
}
