import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { UserService } from '../../Services/users.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-one-post',
  standalone: true,
  imports: [CommonModule , RouterModule,HttpClientModule],
  providers:[UserService],
  templateUrl: './one-post.component.html',
  styleUrl: './one-post.component.css'
})
export class OnePostComponent {
@Input() onepost:any;
@Output() postDeleted = new EventEmitter<number>(); 

constructor(private postService: UserService, private router: Router) { }

deletePost(id: any) {
  const token = localStorage.getItem('token');
  const header = new HttpHeaders().set('Authorization', `Bearer ${token}`)
  // console.log(header);
  
  this.postService.deletePost(id, header).subscribe({
    // this.onepost = this.onepost.filter((onepost: { id: any; }) => onepost.id !== id);  });
    // this.router.navigate(["/posts"]);
    next: (data)=>{
      // console.log(data);
      alert('blog deleted successfully');
      this.postDeleted.emit(id);
    },
    error: (err)=>{console.log(err);
    }
    
});



// deletePost(id: any) {
//   if (window.confirm('Are you sure you want to delete this post?')){
//   this.onepost = this.onepost.filter((post:any) => post.id !== id);
}}
