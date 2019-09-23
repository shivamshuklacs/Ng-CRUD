import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-userbyid',
  templateUrl: './userbyid.component.html',
  styleUrls: ['./userbyid.component.css']
})
export class UserbyidComponent implements OnInit {
  
    user:User
    id:String
  
  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  getById(id){
    this.userService.getById(id).subscribe(data =>this.user=data);
    alert("Data Found");
  }

}

