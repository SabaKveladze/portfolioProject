import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './header/posts/posts.component';
import { NgModule } from '@angular/core';
export const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: '', redirectTo: '/firstPage', pathMatch: 'full' },
  { path: 'firstPage', component: PostsComponent },
  //   { path: '**', redirectTo: 'firstPage' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
