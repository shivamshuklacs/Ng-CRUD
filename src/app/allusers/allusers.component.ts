import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  users:User[]=[]
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.getAllUser();
  }
  getAllUser(){
    this.userService.getAllUser().subscribe(data => this.users=data);
  }
}
