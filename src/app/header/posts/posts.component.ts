import { Component, OnInit } from '@angular/core';
import { Users } from '../../interfaces/users.interface';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { Posts } from '../../interfaces/posts.interface';
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  users!: Users[];
  posts!: Posts[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((users) => {
      this.users = users;
    });
    this.apiService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
  getUserName(userId: number): String {
    const user = this.users?.find((user) => user.id === userId);
    return user ? user.name : '';
  }
}
