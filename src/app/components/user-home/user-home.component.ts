import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {

  userName = "";

  constructor(private router :ActivatedRoute){
    router.queryParams.subscribe(params => this.userName = params['userName']);
  }

}
