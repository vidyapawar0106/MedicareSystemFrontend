import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { Admin1 } from './admin1';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl:string="http://localhost:8084/admin";

  constructor(public http:HttpClient) { }
   getAdmin()
  {
    return this.http.get<Admin[]>(this.baseUrl+"/getadmin");
  }
  storeAdmin(admindata:Admin1):Observable<Admin1>{
    return this.http.post<Admin1>(this.baseUrl+"/insertadmin",admindata)
  }
  updateAdmin(adminData:Admin1):Observable<Admin1>{
    return this.http.put<Admin1>(this.baseUrl+"/update",adminData);
  }
  getAdminId(id:any){
    return this.http.get<Admin>(this.baseUrl+"/getadminbyid/" +id);
  }
  deleteAdmin(id:any){
    return this.http.delete(this.baseUrl+"/delete/" +id);
  }

  
}
