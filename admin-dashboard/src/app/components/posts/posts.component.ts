import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../Services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { OnePostComponent } from '../one-post/one-post.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [HeaderComponent, RouterModule ,CommonModule,HttpClientModule ,OnePostComponent],
  providers:[UserService],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  Posts:any ;
  userName:any;

  constructor(private PService:UserService){
  }
  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    this.PService.GetAllPosts().subscribe({
      next:(data)=>{
        this.Posts = data
      },
      error:(err)=>{console.log(err);
      },
    })
  }

}
