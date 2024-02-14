import { Routes } from '@angular/router';
import { UsersComponent } from './Component/users/users.component';
import { UsersDetailsComponent } from './Component/users-details/users-details.component';
import { ErrorComponent } from './Component/error/error.component';

export const routes: Routes = [
    { path:"",component:UsersComponent},
    {path:"Users", component:UsersComponent},
    {path:"UsersDetails/:id",component:UsersDetailsComponent},
    {path:"**", component:ErrorComponent}



];
