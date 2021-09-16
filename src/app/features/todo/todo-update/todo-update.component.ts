import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodosService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {

  todoUpdateForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private todoService: TodosService, private router: Router) { }

  ngOnInit(): void {
    this.createUpdateForm();
  }



  createUpdateForm(){
    this.todoUpdateForm = this.formBuilder.group({
      userId: [0, Validators.required],
      title: ["", Validators.required],
      completed: [true, Validators.required]
    })
  }

  updateTodo(){
    if(this.todoUpdateForm.valid){
      this.todoService.updateTodo(this.todoUpdateForm.value).subscribe(data => console.log(data));
      this.router.navigate([""]);
    }
    else{
      console.log("hata")
      console.log(this.todoUpdateForm.value);
    }

  }
}
