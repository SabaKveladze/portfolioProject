import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/users.interface';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { Posts } from '../../interfaces/posts.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  users!: User[];
  posts!: Posts[];
  constructor(private apiService: ApiService, private router: Router) {}

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
  navigateToPost(post: Posts): void {
    console.log(post.id);
    this.router.navigate(['/posts', post.id]);
  }
  // goToPost(postId: number): void {
  //   this.router.navigate(['/posts', postId]);
  // }
}
