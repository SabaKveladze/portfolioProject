import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Users } from '../interfaces/users.interface';
import { Posts } from '../interfaces/posts.interface';
import { Todo } from '../interfaces/todo.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.apiUrl}/users`);
  }
  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${this.apiUrl}/posts`);
  }
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}/todos`);
  }
}
