import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminControlService {

  private URL = "http://localhost:8000/user";
  constructor(private adminClient :HttpClient) { }

  getUsers(headers?: HttpHeaders): Observable<HttpResponse<any>>{
    return this.adminClient.get(this.URL, {headers, observe:"response"});
  }
}
