import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];




  constructor(private userService:UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data
      
    });
  }


  deleteUser(user:User){
    this.userService.deleteUser(user).subscribe(data => {
      const item = this.users.find(u => u.id === user.id);
      if(item){
        this.users.splice(this.users.indexOf(item), 1);
      }
    });
  }

}
