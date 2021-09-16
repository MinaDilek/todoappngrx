import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todo.service';
import { PagingInfo } from 'src/app/shared/models/pagingInfo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  todos: Todo[] = [];
  pagingInfo: PagingInfo = { pageSize: 10, currentPage: 0, pageCount: 0 };
  pageArray: number[] = [];
  

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(data => {
      this.pagingInfo.pageCount = Math.ceil(data.length / this.pagingInfo.pageSize);
      this.generatePageArray();
    });

    this.getTodosByPage(1);
  }

  generatePageArray(){
    for(let i = 0; i < this.pagingInfo.pageCount; i++){
      this.pageArray.push(i);
    }
  }

  getTodosByPage(page: number){
    this.todoService.getTodosByPage(page).subscribe(data => {
      this.todos = data;
      this.pagingInfo.currentPage = page;
    });
  }

  getCurrentPageStyle(index: number):string{
    if(index + 1 === this.pagingInfo.currentPage){
      return "page-item active";
    }else{
      return "page-item";
    }
  }
}
