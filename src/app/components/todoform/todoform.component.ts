import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css'],
})
export class TodoformComponent implements OnInit {
  todo: any = {
    name: '',
    date: new Date(),
  };

  todos: any = [];

  constructor() {}

  ngOnInit(): void {}

  addTodo() {
    if (this.todo.name !== '') this.todos.push(this.todo);
    this.todo = {
      name: '',
      date: new Date(),
    };
  }

  handleDelete(event) {
    this.todos = this.todos.filter((todo) => todo.name !== event.name);
  }
}
