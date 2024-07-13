import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './header/todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './header/posts/posts.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    HeaderComponent,
    TodoComponent,
    CommonModule,
    HttpClientModule,
    PostsComponent,
    BurgerMenuComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  title = 'portfolioProject';
}
