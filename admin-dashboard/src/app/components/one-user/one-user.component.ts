import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-one-user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './one-user.component.html',
  styleUrl: './one-user.component.css'
})
export class OneUserComponent {
@Input() oneuser:any
}
