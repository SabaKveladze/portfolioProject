import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../interfaces/users.interface';
import { Posts } from '../interfaces/posts.interface';
import { Todo } from '../interfaces/todo.interface';
import { Observable } from 'rxjs';
import { UserPosts } from '../interfaces/user-posts';
import { UserDetailsComponent } from '../header/user-details/user-details.component';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }
  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${this.apiUrl}/posts`);
  }
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}/todos`);
  }
  getUserPosts(id: number): Observable<UserPosts[]> {
    return this.http.get<UserPosts[]>(
      `https://jsonplaceholder.typicode.com/posts/?userId=${id}`
    );
  }
  getUserTodos(id: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(
      `https://jsonplaceholder.typicode.com/todos/?userId=${id}`
    );
  }
}
