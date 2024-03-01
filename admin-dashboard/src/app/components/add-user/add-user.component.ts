import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { UserService } from '../../Services/users.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [HttpClientModule , ReactiveFormsModule , CommonModule , RouterLink ],
  providers:[UserService],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  constructor(private myServ : UserService ,private router :Router ){}

  regValidation = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z\s'-]{4,20}$/)]),
    email: new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    age: new FormControl("", [Validators.required,Validators.min(10),Validators.max(50)]),
    phone: new FormControl("", [Validators.required, Validators.maxLength(15),Validators.minLength(11)]),
    password : new FormControl("", [Validators.required])
  });

  get isNameValid() {

      return this.regValidation.controls["name"].valid;
    }

  get isAgeValid(){
      return this.regValidation.controls["age"].valid
    }

  get isEmailValid() {
    return this.regValidation.controls["email"].valid;
  }

  get isPhoneValid() {
    return this.regValidation.controls["phone"].valid;
  }
  get isPasswordValid(){
    return this.regValidation.controls["password"].valid;

  }

  Add() {
        const token = localStorage.getItem('token');
        const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    if (this.regValidation.valid) {
      const { name, email, age, phone, password } = this.regValidation.value;
      let newUser = { name, email, age, phone, password };
      console.log(newUser);
      
      this.myServ.AddNewUser(newUser, header).subscribe({
        
        next:(data)=>{
          console.log(data);
          this.router.navigate(['/users']);
        },
        error:(err)=>{
          console.log(err)
        },
        complete: () => {
          alert("Add Successfully");
        }
      });
  }
  }


  // imageUrl = "assets/images/new person.jpg"

  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   const reader = new FileReader();

  //   reader.onload = (e: any) => {
  //     this.imageUrl = e.target.result;
  //   };

  //   reader.readAsDataURL(file);
  // }

}
