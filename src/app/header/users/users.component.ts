import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/users.interface';
import { ApiService } from '../../services/api.service';
import { Posts } from '../../interfaces/posts.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}
  users!: User[];
  ngOnInit(): void {
    this.apiService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
  getUserName(userId: number): String {
  
    const user = this.users?.find((user) => user.id === userId);
    return user ? user.name : '';
  }
  navigateToUserPosts(user: User): void {
    this.router.navigate(['/users', user.id]);
  }
}
