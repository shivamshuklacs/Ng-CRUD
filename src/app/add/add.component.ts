import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
    user: User
  constructor( private userService : UserService) {
    this.user = new User()
   }

  ngOnInit() {
  }
  add(){
    this.userService.addUser(this.user).subscribe();
    alert("Success");
  }

}
