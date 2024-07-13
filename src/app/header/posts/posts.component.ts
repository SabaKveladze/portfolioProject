import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../interfaces/users.interface';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { Posts } from '../../interfaces/posts.interface';
import { Router } from '@angular/router';
import { PostsModalComponent } from './posts-modal/posts-modal.component';
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, HttpClientModule, PostsModalComponent],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  users!: User[];
  posts!: Posts[];
  itIsOpen: boolean = false;
  postTitle: String = '';
  postBody: String = '';
  // @Input() close: Boolean;
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((users) => {
      this.users = users;
    });
    this.apiService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
  closeModal() {
    this.itIsOpen = false;
  }
  getUserName(userId: number): String {
    const user = this.users?.find((user) => user.id === userId);
    return user ? user.name : '';
  }
  navigateToPost(post: Posts): void {
    this.itIsOpen = true;
    this.router.navigate(['/posts', post.id]);
    this.postTitle = post.title;
    this.postBody = post.body;
  }
  
}
