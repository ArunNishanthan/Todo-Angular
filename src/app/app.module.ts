import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoformComponent } from './components/todoform/todoform.component';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [AppComponent, TodoformComponent, TodoComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
