import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import {  HttpClientModule, provideHttpClient } from '@angular/common/http';
provideHttpClient

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule ,NgClass, RouterModule, HttpClientModule],
  providers: [UserService],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  Email ="";
  Password="";
  errorMassageEmail="";
  errorMassagePassword="";
  changeType:boolean=true;
  visible :boolean=true;

 
  constructor(private sevice : UserService, private router: Router){
      
  }

   loginValidation = new FormGroup({
    email:new FormControl( "",
           [Validators.required , 
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
            Validators.email]
  ),

  pass: new FormControl("",[Validators.required, 
  Validators.minLength(8)]),

      });

  // validations Email && Password
 validationEmail(){
  if(this.loginValidation.value.email===""){
    this.errorMassageEmail=`This field is required`
  } else if(this.loginValidation.valid==false){
    this.errorMassageEmail="Please enter a valid email address example, Please include an '@' symbol in your email address"
  } else if (this.loginValidation.valid==true){
    this.errorMassageEmail=""
  }
  
 }

 validationPassword(){
  if(this.loginValidation.value.pass===""){
    this.errorMassagePassword=`This field is required`
  } else if(this.loginValidation.valid==false){
    this.errorMassagePassword="error pass"
  }else if (this.loginValidation.valid==true){
    this.errorMassagePassword=""
  } 
  
 }

removeInput(){
 
}

  Add(email:any, password:any){
   this.validationEmail();
   this.validationPassword();
    // console.log(this.loginValidation);

    this.sevice.login({email, password}).subscribe({
      next: (data)=>{;
        if (data.body.role === "admin"){
          // Save the token to local storage
          localStorage.setItem("token", data.body.token);
          localStorage.setItem("userName", data.body.userName);

          // Navigate to another component with the username as a query parameter
          this.router.navigate(['/dashboard'], {queryParams:{userName: data.body.userName}});
        }else if (data.body.role === "user"){
          // Save the token to local storage
          localStorage.setItem("token", data.body.token);
          // Navigate to another component with the username as a query parameter
          this.router.navigate(['/user-home'], {queryParams:{userName: data.body.userName}});
        }
      },
      error: (err)=>{console.log(err);
        alert('Login failed. Please check your credentials and try again.');
      }
    });
    // this.Email="";
    // this.Password="";
  }

  showPassword(){
    this.changeType= !this.changeType;
    this.visible = ! this.visible ;
  }

  

  




}
