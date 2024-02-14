import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Component/header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './Component/Login-page/login-page/login-page.component';
import { RegistrationPageComponent } from './Component/Registration-Page/registration-page/registration-page.component';
import { FormControl } from '@angular/forms';
import { HomePageComponent } from './Component/Home-page/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,HeaderComponent,HttpClientModule,LoginPageComponent,RegistrationPageComponent,HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
}
