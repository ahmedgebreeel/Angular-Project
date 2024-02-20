import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly myClient: HttpClient) {}
  private readonly DB_URL = 'http://localhost:3000/users';

  GetAllUsers() {
    return this.myClient.get(this.DB_URL);
  }
}
