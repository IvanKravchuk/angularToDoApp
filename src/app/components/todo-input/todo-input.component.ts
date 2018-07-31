import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { debounce } from 'lodash-es';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  public searchTodo: Function;
  private todoText: string;
  // private searchText: string;
  @Output() search = new EventEmitter();

  constructor( private todoService: TodoService) {
    this.todoText = '';
    // this.searchText = '';
    this.searchTodo =  debounce(this.forDeb.bind(this), 2000);
  }

  ngOnInit() {
  }

  public addTodo(): void {
    this.todoService.addTodo(this.todoText);
    this.todoText = '';
  }

  private forDeb(): any {
    return this.search.emit(this.todoText);
  }

}
