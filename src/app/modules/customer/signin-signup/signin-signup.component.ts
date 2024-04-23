declare let google:any;
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../core/Model/object-model';
import { LoginSignupService } from '../../shared/services/login-signup.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-signin-signup',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './signin-signup.component.html',
  styleUrl: './signin-signup.component.css'
})
export class SigninSignupComponent implements OnInit{
  private router = inject(Router);
  isLogged:boolean = false;
  regForm:boolean = false;
  signUpfrom!:FormGroup;
  signInfrom!:FormGroup;
  signUpsubmitted = false;
  href:string ='';
  user_data:any;
  user_dto!:User;
  user_reg_data:any;
  signInFormValue:any ={};

  constructor(private formBuilder:FormBuilder, private _router:Router, private loginService:LoginSignupService){
  }
  ngOnInit(): void {

    this.href = this._router.url;
    if(this.href =='/signUp'){
    this.regForm = true;
    }else if(this.href =='/sign-in'){
      this.regForm = false;
    }

    this.signUpfrom = this.formBuilder.group({
      name: ['', Validators.required],
      mobNumber: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required,]],
      password: ['', [Validators.required,]],
      addressLine1: ['', Validators.required],
      addressLine2: [],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      language: ['', Validators.required],
      gender: ['', Validators.required],
      aboutYou: ['', Validators.required],
      uploadImage: ['', Validators.required],
      agreetc: ['', Validators.required],
      role: ['', Validators.required],
    });

    google.accounts.id.initialize({
      client_id:'1057516052759-2u9c0ev3g9eom3l0desm6p1ra697499d.apps.googleusercontent.com',
      callback: (resp:any)=>{
        console.log(resp);
        this.handleLogin(resp);
      }


    });

    google.accounts.id.renderButton(
      document.getElementById('google-signin'),
      {
        theme: 'filled-dark',
        size: 'large',
        text: 'signin',
        shape:'rectangle',
        locale: 'en',
        width:250,
      }
    );
  }


  get rf() {
    return this.signUpfrom.controls;
    }

  onSubmitSignUp(){
    this.signUpsubmitted =true;
    if(this.signUpfrom.invalid){
      console.log("inavlid");
      return;
    }
    this.user_reg_data = this.signUpfrom.value;
    this.user_dto ={
      aboutYou:this.user_reg_data.aboutYou,
      age:this.user_reg_data.age,
      agreetc:this.user_reg_data.agreetc,
      email:this.user_reg_data.email,
      gender:this.user_reg_data.gender,
      address:{
        id: 0,
        addressLine1: this.user_reg_data.addressLine1,
        addressLine2: this.user_reg_data.addressLine1,
        city: this.user_reg_data.city,
        state: this.user_reg_data.state,
        zipCode: this.user_reg_data.zipCode,
      },
      language:this.user_reg_data.language,
      mobNumber:this.user_reg_data.mobNumber,
      name:this.user_reg_data.name,
      password:this.user_reg_data.password,
      uploadImage:this.user_reg_data.uploadImage,
      role:this.user_reg_data.role
    }
    console.log('data');

    this.loginService.userRegister(this.user_dto).subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl('/sign-in');
    })
  }


  // onSubmitSignIn(){
  //   console.log('ggg');
  //   this.loginService.authLogin(this.signInFormValue.userEmail, this.signInFormValue.userPassword).subscribe(data=>{
  //     this.user_data = data;
  //     if(this.user_data.length ==1){
  //       if(this.user_data[0].role =="seller"){
  //         sessionStorage.setItem("user_session_id", this.user_data[0].id);
  //         sessionStorage.setItem("role", this.user_data[0].role);
  //         this.router.navigateByUrl('/seller-dashboard');
  //       }else if(this.user_data[0].role =="buyer"){
  //         sessionStorage.setItem("user_session_id", this.user_data[0].id);
  //         sessionStorage.setItem("role", this.user_data[0].role);
  //         this.router.navigateByUrl('/buyer-dashboard');
  //       }else{
  //         alert("Invalid login details");
  //       }
  //     }else{
  //       alert("Invalid")
  //     }
  //     console.log(this.user_data)
  //   }, error=>{
  //     console.log("My error", error)
  //   })
  // }



onSubmitSignIn() {
  console.log('ggg');
  this.loginService.authLogin(this.signInFormValue.userEmail, this.signInFormValue.userPassword)
    .pipe(
      tap(data => {
        this.user_data = data;
        if (this.user_data.length === 1) {
          if (this.user_data[0].role == "seller" || this.user_data[0].role == "Seller") {
            sessionStorage.setItem("user_session_id", this.user_data[0].id);
            sessionStorage.setItem("role", this.user_data[0].role);
            this.router.navigateByUrl('/seller-dashboard');
          } else if (this.user_data[0].role == "buyer" || this.user_data[0].role == "Buyer") {
            sessionStorage.setItem("user_session_id", this.user_data[0].id);
            sessionStorage.setItem("role", this.user_data[0].role);
            this.router.navigateByUrl('/buyer-dashboard');
          } else {
            alert("Invalid login details");
          }
        } else {
          alert("Invalid")
        }
        console.log(this.user_data);
      })
    )
    .subscribe({
      error: error => console.log("My error", error)
    });
}


  private decodeToken(token: string){
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleLogin(resp:any){
    console.log(resp);
    const payload = this.decodeToken(resp.credential);
    if(payload){
      sessionStorage.setItem('loggedUser', JSON.stringify(payload));
      this.isLogged = true;
    }
    // route to homepage
    this.router.navigate(['/home']);
}

}

