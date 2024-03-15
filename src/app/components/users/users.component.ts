import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../Services/users.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { SearchFilterPipe } from '../../Pipes/search-filter.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    HeaderComponent,
    HttpClientModule,
    SearchFilterPipe,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  providers: [UserService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  Users: any;
  userName: any;
  searchText = '';


  constructor(private UService: UserService) {}
  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');

    const token = localStorage.getItem('token');

    if (token) {
      // Set the headers with the token
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      this.UService.GetAllUsers(headers).subscribe({
        next: (data) => {
          // console.log(data);

          this.Users = data.body;
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
  addUser() {}

  deleteRow(id: any) {
    const token = localStorage.getItem('token');
  const header = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    if (window.confirm('Are you sure you want to delete this user?')) {
      this.UService.deleteUser(id, header).subscribe(() => {
        // this.Users = this.Users.filter((user: { id: any }) => user.id !== id);
        this.ngOnInit();
      });
    }
  }


}
