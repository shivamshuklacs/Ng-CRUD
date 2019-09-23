import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getAllUser(){
    return this.http.get<User[]>("http://localhost:8080/api");
  }
  addUser(user:User){
    return this.http.post("http://localhost:8080/api",user);
  }
  getById(id:String){
    return this.http.get<User>("http://localhost:8080/api"+"/"+id);
  }
}
