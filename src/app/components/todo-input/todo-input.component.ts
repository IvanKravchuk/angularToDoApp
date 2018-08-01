import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { TodoService } from '../../services/todo.service';
// import { debounce } from 'lodash-es';
import { Observable, fromEvent, timer } from 'rxjs';
import { debounce, filter, map } from 'rxjs/operators';
// import { filter } from 'lodash-es';
// import { of, timer } from 'rxjs';
@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  @ViewChild('myInput') myInput: ElementRef;
  // public searchTodo: Function;
  private todoText: string;
  // private searchText: string;
  @Output() search = new EventEmitter();

  constructor( private todoService: TodoService) {
    this.todoText = '';
    // this.searchTodo = debounce(this.forDeb.bind(this), 2000);
  }

  ngOnInit() {
    const inputStream$ = fromEvent(this.myInput.nativeElement, 'input')
        .pipe(
          map((event: Event): string => (event.target as any).value),
          filter(value => value.length >= 2),
          debounce(() => timer(3000) )
        )
        .subscribe(
          (value) => {
            // console.log(event.target.value);
            this.search.emit(value);
          },
          error => console.log(error),
          () => console.log('Complete')
        );
  }

  public addTodo(): void {
    this.todoService.addTodo(this.todoText);
    this.todoText = '';
  }


  // private forDeb(): any {
    // return this.search.emit(this.todoText);
  // }

}
