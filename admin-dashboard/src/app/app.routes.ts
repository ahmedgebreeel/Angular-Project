import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { SettingComponent } from './components/setting/setting.component';




export const routes: Routes = [
  {path:"",component:LoginPageComponent},
  {path:"login",component:LoginPageComponent},
  {path:"home",component:HomeComponent},
  {path:"register",component:RegistrationPageComponent},
  {path:"posts",component:PostsComponent},
  {path:"users",component:UsersComponent},
  {path:"setting",component:SettingComponent},
  {path:"logout",component:LoginPageComponent},


];
