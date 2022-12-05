import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs'
import { Product } from './product';
import { Product1 } from './product1';
import { TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
baseUrl:string="http://localhost:8084/product";

  constructor( public http:HttpClient) { }

  storeproduct(productData:Product):Observable<Product>{
    return this.http.post<Product>(this.baseUrl+"/insert",productData)
  }
  loadproduct():Observable<Product1[]>
  {
    return this.http.get<Product1[]>(this.baseUrl+"/getall");

  }
  updateproduct(productData:Product):Observable<Product>{
    return this.http.put<Product>(this.baseUrl+"/update",productData);
  }
  getproductid(id:any){
    return this.http.get<Product>(this.baseUrl+"/getbyid/" +id);
  }
  deleteProduct(id:any){
    return this.http.delete(this.baseUrl+"/delete/" +id);
  }
}
