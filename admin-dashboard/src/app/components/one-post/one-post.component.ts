import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-one-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './one-post.component.html',
  styleUrl: './one-post.component.css'
})
export class OnePostComponent {
@Input() onepost:any;




}
