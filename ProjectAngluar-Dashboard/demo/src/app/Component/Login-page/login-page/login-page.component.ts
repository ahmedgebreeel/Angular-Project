import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule ,NgClass],
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

  Add(){
   this.validationEmail();
   this.validationPassword();
    console.log(this.loginValidation);
    this.Email="";
    this.Password="";
  }

  showPassword(){
    this.changeType= !this.changeType;
    this.visible = ! this.visible ;

  }

  
  




}
