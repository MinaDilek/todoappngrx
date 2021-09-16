import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  userUpdateForm: FormGroup;

  @Input() user: User;
  @Output() updateUserEvent: EventEmitter<number> = new EventEmitter();

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.createUpdateForm();
  }

  createUpdateForm(){
    this.userUpdateForm = this.formBuilder.group({
      name: ["", Validators.required],
      username: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]]
    });
  }

  updateUser(){
    if(this.userUpdateForm.valid){
      this.userService.updateUser(this.userUpdateForm.value).subscribe(data => console.log(data))
      this.router.navigate([""])
    }else{
      console.log(this.userUpdateForm.value);
      console.log("hata...");
    }
  }

}
