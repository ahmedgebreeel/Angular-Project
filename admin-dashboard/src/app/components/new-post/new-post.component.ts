import { Component } from '@angular/core';
import { UserService } from '../../Services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
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
  constructor(private addService: UserService){}

  AddPost( title:any , description:any){
    let newPost={ title , description}
    this.addService.AddNewPost(newPost).subscribe();
  }



  imageUrl = "../../../assets/images/new person.jpg"

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };

    reader.readAsDataURL(file);
  }

}

