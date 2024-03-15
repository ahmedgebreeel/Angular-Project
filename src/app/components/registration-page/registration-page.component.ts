import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RegisterService } from '../../Services/register.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [RouterModule, HttpClientModule],
  providers:[RegisterService],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.css'
})
export class RegistrationPageComponent {
   constructor(private service: RegisterService, private router: Router){}



  AddUser(name:any, email:any, password:any, passwordConfirm:any){
      this.service.register({name, email, password, passwordConfirm}).subscribe({
        next: (data)=>{console.log(data);
          this.router.navigate(['/dashboard']);
        },
        error: (err)=>{console.log(err);
          // alert("Error: " + err.error.error);
          alert("failed. Please try again");

      }})
  }
}
