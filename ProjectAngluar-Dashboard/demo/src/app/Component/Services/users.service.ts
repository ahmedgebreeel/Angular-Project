import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public MyUsers:HttpClient) {}
  DB_URL = "https://jsonplaceholder.typicode.com/users" ;

  GetAllUsers(){
    return this.MyUsers.get(this.DB_URL);
  }

  GetUserId(id:number){
    return this.MyUsers.get(this.DB_URL+ "/" +id);
  }
}
