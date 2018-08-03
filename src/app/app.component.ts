import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { HttpClientService } from './services/http-client.service';
import { Subscription } from 'rxjs';
import { Todo } from './classes/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private searchProp: string;
  public todos: Todo[];
  public subscription: Subscription;

  public get currentList () {
    return this.todoService.getTodos(this.searchProp);
    // return this.todoService.filterdTotos;
    }

  public search (search: any) {
    this.searchProp = search;
  }

  constructor(private todoService: TodoService, private httpClient: HttpClientService) { }

  async ngOnInit() {
    this.todos = await this.httpClient.getTodosFromFaker();
  }
}
