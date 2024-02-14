import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { SettingComponent } from './components/setting/setting.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UsersComponent } from './components/users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[
    RouterOutlet,
    HeaderComponent,
    HomeComponent,
    PostsComponent,
    UsersComponent,
    SettingComponent,
    LogoutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


}
