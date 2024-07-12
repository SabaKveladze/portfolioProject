import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { PostsComponent } from './header/posts/posts.component';
import { UsersComponent } from './header/users/users.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BurgerMenuComponent,
    PostsComponent,
    UsersComponent,
  ],
  providers: [HttpClient],
  declarations: [],
})
export class AppModule {
  constructor(private appRef: ApplicationRef) {}

  ngDoBootstrap() {
    this.appRef.bootstrap(AppComponent);
  }
}
