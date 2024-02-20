import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '../../Services/users.service';

import { HeaderComponent } from '../header/header.component';
import { OneUserComponent } from '../one-user/one-user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [HeaderComponent, OneUserComponent],
  providers: [UsersService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  constructor(private UService: UsersService) {}
  Users: any;
  ngOnInit() {
    this.UService.GetAllUsers().subscribe({
      next: (data) => {
        //console.log(data)
        this.Users = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
