import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "http://localhost:3000/users";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(private httpClient: HttpClient) { }
  
  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  addUser(user: User):Observable<User>{
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions);
  }

  deleteUser(user: User):Observable<unknown>{
    const url = this.apiUrl + "/" + user.id;
    return this.httpClient.delete(url, this.httpOptions);
  }

  updateUser(user: User):Observable<User>{
    return this.httpClient.put<User>(this.apiUrl + "/" + user.id, user);
  }
}