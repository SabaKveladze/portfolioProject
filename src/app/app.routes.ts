import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './header/posts/posts.component';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './header/main-page/main-page.component';
import { UsersComponent } from './header/users/users.component';
import { TodoComponent } from './header/todo/todo.component';
import { UserDetailsComponent } from './header/user-details/user-details.component';
export const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: '', redirectTo: '/firstPage', pathMatch: 'full' },
  { path: 'mainPage', component: MainPageComponent },
  { path: 'users', component: UsersComponent },
  { path: 'todo/:userId', component: TodoComponent },
  { path: 'users/:userId', component: UserDetailsComponent },
  { path: 'posts/:postId', component: PostsComponent },

  { path: '**', redirectTo: 'firstPage' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
