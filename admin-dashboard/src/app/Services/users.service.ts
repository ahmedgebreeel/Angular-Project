import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, input } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private DB_URL = 'http://localhost:8000/user';
  private DB_URL2 = 'http://localhost:8000/blogs';
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
  AddNewUser(user: any) {
    return this.myClient.post(this.DB_URL, user);
  }
  AddNewPost(post: any) {
    return this.myClient.post(this.DB_URL2, post);
  }
  SavePost(inputData: object, onepostId: number) {
    return this.myPosts.get(
      `http://localhost:3000/posts/${onepostId}/edit-post`,
      inputData
    );
  }
  DeletePost(onepostId: number) {
    return this.myPosts.delete(
      `http://localhost:3000/posts/${onepostId}/delete-post`
    );
  }
}
