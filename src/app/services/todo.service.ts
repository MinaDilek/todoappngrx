import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiUrl: string = "http://localhost:3000/todos";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getTodos():Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(this.apiUrl);
  }

  getTodoById(id:number):Observable<Todo>{
    return this.httpClient.get<Todo>(this.apiUrl + "/" +id);
  }

  getTodosByUserId(userId: number):Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(this.apiUrl + "?userId=" + userId);
  }

  getTodosByPage(page: number):Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(this.apiUrl + "?_page=" + page);
  }

  updateTodo(todo: Todo):Observable<any>{
    const url =  this.apiUrl + "/" + todo.id;
    return this.httpClient.put(url, todo, this.httpOptions)
  }

}
