import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  userAddForm: FormGroup;
  @Input() users: User[] = [];

  constructor( private userService: UserService,
               private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.createAddForm();
  }

  createAddForm(){
    this.userAddForm = this.formBuilder.group(
      {
        name : ["", Validators.required],
        username : ["", Validators.required],
        email: ["", [Validators.required, Validators.email]]
      }
    );
  }
  
  addUser(){
    if(this.userAddForm.valid){
      this.userService.addUser(this.userAddForm.value).subscribe(data => {
        this.users.push(data);
      })
    }else{
      console.log(this.userAddForm.value);
      console.log("hata oluştu...")
    }
  }

}
