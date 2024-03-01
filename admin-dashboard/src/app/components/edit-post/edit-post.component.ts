import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { UserService } from '../../Services/users.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgModel,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
    FormsModule,
  ],
  providers: [UserService],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css',
})
export class EditPostComponent implements OnInit {
  post: any;
  ID = '';

  private token = localStorage.getItem('token');
  private headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  constructor(private _requestD: UserService, id: ActivatedRoute, private router:Router) {
    this.ID = id.snapshot.params['id'];
  }
  ngOnInit() {
  

    this._requestD.GetPostByID(this.ID, this.headers).subscribe({
      next: (data) => {
        this.post = data;
      },
      error(err) {
        console.log(err);
      },
    });
  }

  UpdatePost() {
    console.log(this.post);
    console.log(this.ID);
    
    
    this._requestD.UpdatePost(this.ID, this.post, this.headers).subscribe({
      error(err) {
        console.log(err);
      },
      complete: () => {
        alert('Add Successfully');
        this.router.navigate(['/posts']);
      },
    
    });
  }

  imageUrl = 'assets/images/new person.jpg';

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };

    reader.readAsDataURL(file);
  }
}













































































































// import { HttpClientModule } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { UserService } from '../../Services/users.service';

// @Component({
//   selector: 'app-edit-post',
//   standalone: true,
//   imports: [HttpClientModule],
//   providers:[UserService],
//   templateUrl: './edit-post.component.html',
//   styleUrl: './edit-post.component.css'
// })
// export class EditPostComponent {

//   constructor(private addService: UserService){}

//   AddPost( title:any , description:any){
//     let newPost={ title , description}
//     this.addService.AddNewPost(newPost).subscribe();
//   }



//   imageUrl = "assets/images/new person.jpg"

//   onFileSelected(event: any) {
//     const file: File = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = (e: any) => {
//       this.imageUrl = e.target.result;
//     };

//     reader.readAsDataURL(file);
//   }
// }
