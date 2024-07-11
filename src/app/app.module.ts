import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    // Other modules as needed
  ],
  providers: [HttpClient],
  declarations: [], // No declarations needed if not using AppModule for components
})
export class AppModule {
  constructor(private appRef: ApplicationRef) {}

  ngDoBootstrap() {
    // Manually bootstrap components if needed
    this.appRef.bootstrap(AppComponent);
  }
}
