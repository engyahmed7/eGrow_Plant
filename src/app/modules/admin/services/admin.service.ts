import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private user_url= 'http://localhost:3000/user';
  private product_url= 'http://localhost:3000/product';
  private order_url= 'http://localhost:3000/order';

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get(this.user_url);
  }

  getAllProducts(){
    return this.http.get(this.product_url);
  }

  getAllOrders(){
    return this.http.get(this.order_url);
  }

  deleteUser(id:number){
    return this.http.delete(this.user_url+'/'+id);
  }

  deleteProduct(id:number){
    return this.http.delete(this.product_url+'/'+id);
  }

  deleteOrder(id:number){
    return this.http.delete(this.order_url+'/'+id);
  }

  getUserById(id:number){
    return this.http.get(this.user_url+'/'+id);
  }

  getProductById(id:number){
    return this.http.get(this.product_url+'/'+id);
  }

  getOrderById(id:number){
    return this.http.get(this.order_url+'/'+id);
  }

  updateUser(user:any){
    return this.http.put(this.user_url+'/'+user.id, user);
  }

  updateProduct(product:any){
    return this.http.put(this.product_url+'/'+product.id, product);
  }

  updateOrder(order:any){
    return this.http.put(this.order_url+'/'+order.id, order);
  }

  createUser(user:any){
    return this.http.post(this.user_url, user);
  }

  createProduct(product:any){
    return this.http.post(this.product_url, product);
  }

  createOrder(order:any){
    return this.http.post(this.order_url, order);
  }

  searchUser(name:string){
    return this.http.get(this.user_url+'?name='+name);
  }

  searchProduct(name:string){
    return this.http.get(this.product_url+'?name='+name);
  }

  searchOrder(name:string){
    return this.http.get(this.order_url+'?name='+name);
  }

  

}
