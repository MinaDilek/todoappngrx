import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  todo: Todo = {
    userId: 0,
    id: 0,
    title: "",
    completed: false
  }

  constructor(private todoService: TodosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.getTodoById(params["id"]));
  }

  getTodoById(id: number) {
    this.todoService.getTodoById(id).subscribe(data => this.todo = data);
  }


}
