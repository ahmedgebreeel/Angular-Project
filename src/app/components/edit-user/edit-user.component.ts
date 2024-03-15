import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../Services/users.service';

@Component({
  selector: 'app-student-update-delete',
  standalone: true,
  imports: [HttpClientModule, FormsModule, RouterLink],
  providers: [UserService],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css',
})
export class EditUserComponent implements OnInit {
  user: any;
  ID = '';
  constructor(private _request: UserService, id: ActivatedRoute, private router: Router) {
    this.ID = id.snapshot.params['id'];
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this._request.GetByID(this.ID, header).subscribe({
      next: (data) => {
        this.user = data;
      },
      error(err) {
        console.log(err);
      },
    });
  }

  UpdateUser() {
    const token = localStorage.getItem('token');
    const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this._request.UpdateUser(this.ID, this.user, header).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/users']);
      },
      error(err) {
        console.log(err);
      },
      complete: () => {
        alert('Add Successfully');
      },
    });
  }
}

// import { Component } from '@angular/core';
// import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { UserService } from '../../Service/users.service';
// import { HttpClientModule } from '@angular/common/http';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-edit-user',
//   standalone: true,
//   imports: [HttpClientModule , ReactiveFormsModule , CommonModule , RouterModule ],
//   providers:[UserService],
//   templateUrl: './edit-user.component.html',
//   styleUrl: './edit-user.component.css'
// })
// export class EditUserComponent {
//   constructor(private myServ : UserService ){}

//   regValidation = new FormGroup({
//     name: new FormControl("Full Name ", [Validators.required, Validators.pattern(/^[a-zA-Z\s'-]{4,20}$/)]),
//     email: new FormControl("example@gmail.com", [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
//     age: new FormControl("15", [Validators.required,Validators.min(10),Validators.max(50)]),
//     phone: new FormControl("01032827892", [Validators.required, Validators.maxLength(15),Validators.minLength(11)]),
//   });

//   get isNameValid() {
//       return this.regValidation.controls["name"].valid ;
//     }

//   get isAgeValid(){
//       return this.regValidation.controls["age"].valid
//     }

//   get isEmailValid() {
//     return this.regValidation.controls["email"].valid;
//   }

//   get isPhoneValid() {
//     return this.regValidation.controls["phone"].valid;
//   }

//   Add() {
//     if (this.regValidation.valid) {
//       const { name, email, age, phone } = this.regValidation.value;
//       let newUser = { name, email, age , phone };
//       this.myServ.AddNewUser(newUser).subscribe({
//         next:(data)=>{
//           console.log(data);
//         },
//         error:(err)=>{
//           console.log(err)
//         },
//         complete: () => {
//           alert("Add Successfully");
//         }
//       });
//   }
//   }

//   imageUrl = "../../../assets/images/new person.jpg"

//   onFileSelected(event: any) {
//     const file: File = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = (e: any) => {
//       this.imageUrl = e.target.result;
//     };

//     reader.readAsDataURL(file);
//   }

// }
