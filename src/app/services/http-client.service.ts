import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../classes/todo';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private _url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  async getTodosFromFaker(): Promise<Todo[]> {
    return this.http.get<Todo[]>(this._url).toPromise();
  }

}
