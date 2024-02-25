import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private regClient:HttpClient) { }
 private url  = "http://localhost:8000/user/singUp";

 register(user:any){
  return this.regClient.post(this.url, user);
}
}
