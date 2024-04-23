import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user: any;
  constructor() {
    console.log('User Profile Component');
    const userString = sessionStorage.getItem('loggedUser');
    this.user = userString ? JSON.parse(userString) : {};
  }

}
