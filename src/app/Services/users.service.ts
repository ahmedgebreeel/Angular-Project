import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, input } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private DB_URL = 'http://localhost:8000/user';
  // private DB_URL2 = 'http://localhost:8000/blogs';
  private DB_URL = 'https://dashboardadmin-83if.onrender.com/user';
  private DB_URL2 = 'https://dashboardadmin-83if.onrender.com/blogs';
  constructor(private myClient: HttpClient, private myPosts: HttpClient) {}

  GetAllUsers(headers?: HttpHeaders): Observable<HttpResponse<any>> {
    return this.myClient.get(this.DB_URL, {headers,observe: "response"});
  }

  GetAllPosts(headers?: HttpHeaders): Observable<HttpResponse<any>> {
    return this.myClient.get(this.DB_URL2, {headers,observe: "response"});
  }
  // GetAllPosts() {
  //   return this.myPosts.get(this.DB_URL2);
  // }

  
  GetByID(id: any, headers?:HttpHeaders) {
    return this.myClient.get(`${this.DB_URL}/${id}`, {headers});
  }
  UpdateUser(id: any, user: any, headers?:HttpHeaders) {
    return this.myClient.patch(`${this.DB_URL}/${id}`, user, {headers});
  }

 
  GetPostByID(id: any, headers?: HttpHeaders) {
    return this.myClient.get(`${this.DB_URL2}/${id}`, {headers});
  }
  UpdatePost(id: any, post: any, headers?: HttpHeaders) {
    return this.myClient.patch(`${this.DB_URL2}/${id}`, post, {headers});;
  }


  AddNewUser(user: any, headers?: HttpHeaders) {
    return this.myClient.post(this.DB_URL, user, {headers});
  }
  AddNewPost(post: any, headers?: HttpHeaders) {
    return this.myPosts.post(this.DB_URL2, post, {headers});
  }


  deletePost(id: any, headers?: HttpHeaders) {
      return this.myPosts.delete(`${this.DB_URL2}/${id}`, {headers});
  }
  deleteUser(id: any, headers?:HttpHeaders) {
      return this.myClient.delete(`${this.DB_URL}/${id}`, {headers});
  }
 
}
