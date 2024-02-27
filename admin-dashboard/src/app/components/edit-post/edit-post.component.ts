import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../../Services/users.service';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [HttpClientModule],
  providers:[UserService],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent {

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
