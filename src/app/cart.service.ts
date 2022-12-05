import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl="http://localhost:8084/cart"

  constructor(public http:HttpClient) { }
  Addtocart(pid:any,uid:any){
    return this.http.get(this.baseUrl+"/add/"+pid+"/"+uid)
  }
  getCart(uid:any){
    return this.http.get<any>(this.baseUrl+"/getcart/"+uid);

  }
  updateCart(cart:any, cid:any){
    return this.http.put<any>(this.baseUrl+"/updatecart/"+cid,cart)
  }
  deleteCart(cid:any){
    return this.http.delete<any>(this.baseUrl+"/delete/"+cid)
  }

}
