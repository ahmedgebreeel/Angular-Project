import { Component } from '@angular/core';
import { UserService } from '../../Services/users.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule ,FormGroup , FormControl , Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [HttpClientModule , RouterLink , ReactiveFormsModule ,CommonModule ],
  providers:[UserService],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {
  constructor(private addService: UserService, private router:Router ){}

  AddPost( title:any , description:any, image:any){
    const token = localStorage.getItem('token');
    const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    let newPost={ title , description, image }
    console.log(newPost.image);   ////C:\fakepath\Screenshot from 2024-03-01 15-45-17.png
    let imageArray= newPost.image.split('\\');
    let imageName = imageArray[imageArray.length -1] ; 
    // console.log(imageName);
   let newBlog={...newPost, image: imageName};
    console.log(newBlog);
    
    this.addService.AddNewPost(newBlog, header).subscribe({
      next: (data)=>{
        // console.log(data);
        this.router.navigate(['/posts']);
        alert(data)
        
      },
      error: (err)=>{
        console.log(err);
        
      }
    });
  }



  imageUrl = "assets/images/new person.jpg"

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };

    reader.readAsDataURL(file);
  }

}





