
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService} from '../Services/users.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OneUserComponent } from '../one-user/one-user.component';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule,OneUserComponent],
  providers: [UsersService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  constructor(  private userServ:UsersService){}
  users:any;

  ngOnInit() {
//  console.log(this.userServ.GetAllUsers())
this.userServ.GetAllUsers().subscribe({
  next: (data)=>{
// console.log(data)

this.users = data;

  },


  error:(erro)=>{
    // console.log(erro)
  },

  
  complete: ()=>{}

})
  }

}
