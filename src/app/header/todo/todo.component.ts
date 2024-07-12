import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  todos!: Todo[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
}
