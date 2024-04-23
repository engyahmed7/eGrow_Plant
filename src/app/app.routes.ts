import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AdminLoginComponent } from './modules/admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './modules/admin/admin-dashboard/admin-dashboard.component';
import { UserCrudComponent } from './modules/admin/user-crud/user-crud.component';
import { ProductComponent } from './components/product/product.component';
import { SigninSignupComponent } from './modules/customer/signin-signup/signin-signup.component';
import { SellerDashboardComponent } from './modules/customer/seller/seller-dashboard/seller-dashboard.component';
import { BuyerDashboardComponent } from './modules/customer/buyer/buyer-dashboard/buyer-dashboard.component';
import { CheckoutComponent } from './modules/customer/buyer/checkout/checkout.component';
import { PageNotFoundComponent } from './modules/shared/layouts/page-not-found/page-not-found.component';
import { AdminAuthGuard, AuthGuardService, BuyerAuthGuardService, CustomerAuthGuard, SellerAuthGuardService } from './modules/shared/services/auth-guard.service';

export const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"profile",component:UserProfileComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"about-us",component:ContactUsComponent},

  // admin routes
  {path:"",canActivate:[AdminAuthGuard], children:[
    {path:"admin-login", component:AdminLoginComponent}

  ]},
  {path:"", canActivate:[AuthGuardService], children:[
    {path:"admin-dashboard", component:AdminDashboardComponent},
    {path:"admin/user", component:UserCrudComponent},
    {path:"admin/products", component:ProductComponent}
  ]},
  {path:"", canActivate:[CustomerAuthGuard], children:[
    {path:'sign-in',component:SigninSignupComponent},
    {path:'signUp',component:SigninSignupComponent},
  ]},
  {path:"",  canActivate:[SellerAuthGuardService], children:[
    {path:"seller-dashboard", component:SellerDashboardComponent},
    {path:"seller/product", component:ProductComponent}
  ]},
  {path:"", canActivate:[BuyerAuthGuardService], children:[
    {path:"buyer-dashboard",component:BuyerDashboardComponent},
    {path:"checkout",component:CheckoutComponent}
  ]},

  {path:"**",component:PageNotFoundComponent}
];
