import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-one-user',
  standalone: true,
  imports: [],
  templateUrl: './one-user.component.html',
  styleUrl: './one-user.component.css'
})
export class OneUserComponent {
@Input() getOneUser:any;
}
