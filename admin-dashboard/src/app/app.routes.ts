import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { SettingComponent } from './components/setting/setting.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"users",component:UsersComponent},
  {path:"posts",component:PostsComponent},
  {path:"setting",component:SettingComponent},
  {path:"logout",component:LogoutComponent}
];
