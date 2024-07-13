import { Component, NgModule, OnInit } from '@angular/core';
import { User } from '../../interfaces/users.interface';
import { ApiService } from '../../services/api.service';
import { Posts } from '../../interfaces/posts.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Todo } from '../../interfaces/todo.interface';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}
  users!: User[];
  todos!: Todo[];
  filteredUsers: User[] = [];
  searchQuery: string = '';
  ngOnInit(): void {
    this.apiService.getUsers().subscribe((users) => {
      this.users = users;
      this.filteredUsers = users;
    });
    this.apiService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
  getUserName(userId: number): String {
    const user = this.users?.find((user) => user.id === userId);
    return user ? user.name : '';
  }
  navigateToUserPosts(user: User): void {
    this.router.navigate(['/users', user.id]);
  }
  navigateToUserTodos(user: User): void {
    this.router.navigate(['/todo', user.id]);
  }
  filterUsers(): void {
    if (this.searchQuery.trim()) {
      this.filteredUsers = this.users.filter(
        (user) =>
          user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredUsers = this.users;
    }
  }
}
