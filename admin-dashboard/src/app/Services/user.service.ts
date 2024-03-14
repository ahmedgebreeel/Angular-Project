// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
  
//   private url  = "http://localhost:8000/user/login";
  
//   constructor(private client:HttpClient) { }


//   login(user:any){
//     return this.client.post(this.url, user);
//   }

// }


import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private url = "http://localhost:8000/user/login";
  private url = "https://dashboardadmin-83if.onrender.com/user/login";


  userData:any = new BehaviorSubject(null);
  tokenData(){
    let encodeToken = JSON.stringify(localStorage.getItem('token'));
    let decodeJwt :object = jwtDecode(encodeToken);
   
    this.userData.next(decodeJwt);
    console.log(this.userData.getValue());

  }

  constructor(private client: HttpClient) { }

  login(user: any): Observable<HttpResponse<any>> {
    return this.client.post(this.url, user, { observe: 'response' });
  }
}
