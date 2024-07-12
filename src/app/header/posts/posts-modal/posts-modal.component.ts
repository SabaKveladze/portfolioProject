import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-posts-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts-modal.component.html',
  styleUrl: './posts-modal.component.scss',
})
export class PostsModalComponent implements OnInit {
  @Input() title: string = '';
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  closeModal() {
    this.close.emit();
  }
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  // loadPostTitleAndBody(): void {
  //   this.http
  //     .get<Body>(
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
