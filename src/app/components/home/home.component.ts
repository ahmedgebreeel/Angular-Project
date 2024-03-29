import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AdminControlService } from '../../Services/admin-control.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { OnePostComponent } from '../one-post/one-post.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,OnePostComponent, HttpClientModule, RouterModule],
  providers:[AdminControlService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  userName:any;
  usersNum = 0;
  blogs :any;

  constructor(private router: ActivatedRoute, private adminService: AdminControlService){
    /// displaying username 
    this.router.queryParams.subscribe((params)=>{
      this.userName = params['userName'];
    })
  }

  ngOnInit(){
     // Retrieve the token from local storage
     const token = localStorage.getItem('token');
     this.userName = localStorage.getItem('userName');

  if (token) {
    // Set the headers with the token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    this.adminService.getUsers(headers).subscribe({
      next:(data)=>{;
       this.usersNum = data.body.length;
      },
      error:(err)=>{console.log(err);
      }
    });

    this.adminService.getBlogs(headers).subscribe({
      next:(data)=>{
       this.blogs = data.body;
      //  console.log(this.blogs[0]);
       
       
       
      },
      error:(err)=>{console.log(err);
      }
    });
  }
  }

}
