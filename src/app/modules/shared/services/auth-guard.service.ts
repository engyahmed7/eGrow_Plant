import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

//before login
@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{

  constructor(private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let role = sessionStorage.getItem('role');
    if(role == 'admin'){
      this.router.navigate(['/admin-dashboard']);
      return false;
    }else{
      return true;
    }
  }
}

//after login
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let role = sessionStorage.getItem('role');
    if(role == 'admin'){
      return true;
    }else{
      this.router.navigate(['/admin-login']);
      return false;
    }
  }
}


//customer before login
@Injectable({
  providedIn: 'root'
})
export class CustomerAuthGuard implements CanActivate{

  constructor(private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let role = sessionStorage.getItem('role');
    if(role == 'Seller' || role == 'seller'){
      this.router.navigate(['/seller-dashboard']);
      return false;
    }
    else if(role == 'Buyer' || role == 'buyer'){
      this.router.navigate(['/buyer-dashboard']);
      return false;
    }
    else{
      return true;
    }
  }
}

//customer after login
@Injectable({
  providedIn: 'root'
})
export class BuyerAuthGuardService implements CanActivate{

  constructor(private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let role = sessionStorage.getItem('role');
    if(role == 'Buyer' || role == 'buyer'){
      return true;
    }
    else{
      this.router.navigate(['/sign-in']);
      return false;
    }
  }
}

//seller after login
@Injectable({
  providedIn: 'root'
})
export class SellerAuthGuardService implements CanActivate{

  constructor(private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let role = sessionStorage.getItem('role');
    if(role == 'Seller' || role == 'seller'){
      return true;
    }
    else{
      this.router.navigate(['/sign-in']);
      return false;
    }
  }
}

