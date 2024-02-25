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
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:8000/user/login";

  constructor(private client: HttpClient) { }

  login(user: any): Observable<HttpResponse<any>> {
    return this.client.post(this.url, user, { observe: 'response' });
  }
}
