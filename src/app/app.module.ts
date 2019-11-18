import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UserOptionsComponent } from './components/panels/user-options/user-options.component';
import { PostsComponent } from './components/panels/posts/posts.component';
import { TasksComponent } from './components/panels/tasks/tasks.component';
import { UsersComponent } from './components/panels/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    UserOptionsComponent,
    PostsComponent,
    TasksComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
