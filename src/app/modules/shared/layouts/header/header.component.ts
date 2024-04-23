import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  logged_in:boolean=false;
  language:string='English';
  user_role!:any;

  constructor(private router : Router){}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.user_role = sessionStorage.getItem('role');
    const user_session_id = sessionStorage.getItem('user_session_id');
    if(user_session_id){
      this.logged_in = true;
    }else{
      this.logged_in = false;
    }
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/sign-in']);
  }
}
