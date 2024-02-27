import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminControlService {

  private URL = "http://localhost:8000/";
  constructor(private adminClient :HttpClient) { }

  getUsers(headers?: HttpHeaders): Observable<HttpResponse<any>>{
    return this.adminClient.get(this.URL+"user", {headers, observe:"response"});
  }
  getBlogs(headers?: HttpHeaders): Observable<HttpResponse<any>>{
    return this.adminClient.get(this.URL+"blogs", {headers, observe:"response"});
  }
}
