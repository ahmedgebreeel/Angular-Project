import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { authGuardGuard } from './components/Guards/auth-guard.guard';

export const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'dashboard', canActivate:[authGuardGuard], component: HomeComponent },
  { path: 'register', component: RegistrationPageComponent },
  { path: 'posts', canActivate:[authGuardGuard],component: PostsComponent },
  { path: 'users',canActivate:[authGuardGuard], component: UsersComponent },
  { path: 'logout',canActivate:[authGuardGuard], component: LoginPageComponent },
  { path: 'user-home',canActivate:[authGuardGuard], component: UserHomeComponent },
  {path:"add-user",canActivate:[authGuardGuard],component:AddUserComponent},
  {path:"newpost",canActivate:[authGuardGuard],component:NewPostComponent},
  { path: 'edit-post/:id',canActivate:[authGuardGuard], component: EditPostComponent },
  { path: 'edit-user/:id',canActivate:[authGuardGuard], component: EditUserComponent }
];
