import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  todos!: Todo[];
  routeParam: string | null = '';
  parseNumber!: number;
  resolvedTodos: Todo[] = [];
  todos$: Observable<Todo[]> | null = null;
  constructor(private apiService: ApiService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.apiService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
    this.router.paramMap.subscribe((params) => {
      this.routeParam = params.get('id');
    });
    const currentPostsUrl = window.location.href;
    const match = currentPostsUrl.match(/\d+$/);
    if (match) {
      this.parseNumber = parseInt(match[0], 10);
    }
    this.todos$ = this.apiService.getUserTodos(this.parseNumber);
    this.todos$.subscribe(
      (posts) => {
        this.resolvedTodos = posts;
      },
      (error) => {
        console.error('Error fetching comments:', error);
      }
    );
  }
}
