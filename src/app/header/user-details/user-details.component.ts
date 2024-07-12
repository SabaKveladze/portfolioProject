import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/users.interface';
import { Posts } from '../../interfaces/posts.interface';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent {
  users!: User[];
  posts!: Posts[];
  routeParam: string | null = '';
  parseNumber!: number;
  posts$: Observable<Posts[]> | null = null;
  resolvedPosts: Posts[] = [];
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.apiService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
    this.route.paramMap.subscribe((params) => {
      this.routeParam = params.get('id');
    });
    const currentPostsUrl = window.location.href;
    const match = currentPostsUrl.match(/\d+$/);
    if (match) {
      this.parseNumber = parseInt(match[0], 10);
    }
    this.posts$ = this.apiService.getUserPosts(this.parseNumber);
    this.posts$.subscribe(
      (posts) => {
        this.resolvedPosts = posts;
      },
      (error) => {
        console.error('Error fetching comments:', error);
      }
    );
  }
  // getUserPosts(userId: number) {
  //   const posts = this.posts?.filter((post) => post.userId === userId);
  //   return posts ? posts : [];
  // }
}
