import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Posts } from '../../../interfaces/posts.interface';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../services/api.service';
@Component({
  selector: 'app-posts-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts-modal.component.html',
  styleUrl: './posts-modal.component.scss',
})
export class PostsModalComponent implements OnInit {
  @Input() title: String = '';
  @Input() body: String = '';
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  openModal() {
    this.isModalOpen = true;
  }
  closeModal() {
    this.close.emit();
  }
  constructor(private http: HttpClient, private apiService: ApiService) {}
  isModalOpen: boolean = false;

  ngOnInit(): void {}
  // loadPostTitleAndBody(): void {
  //   this.http
  //     .get<Posts>(
  //       `https://jsonplaceholder.typicode.com/posts/${this.parseNumber}`
  //     )
  //     .subscribe(
  //       (post) => {
  //         this.postTitle = post.title;
  //         this.postBody = post.body;
  //       },
  //       (error) => {
  //         console.error('Error loading post:', error);
  //       }
  //     );
  // }
}
