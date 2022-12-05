import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { User1 } from './user1';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string="http://localhost:8084/user";

  constructor(public http:HttpClient) { }
  storeuser(userData:User):Observable<User>{
    return this.http.post<User>(this.baseUrl+"/adduser",userData)
  }
  
  
    getAllUser(){
    
      return this.http.get<User1[]>(this.baseUrl+"/getalluser");
      
    }
    getUserById(uid:any)
    {
      return this.http.get<User1>(this.baseUrl+"/getuser/"+uid)
    }
    deleteUser(uid:any)
    {
      return this.http.delete(this.baseUrl+"/delete/"+uid);
    }
    updateUser(userData:User):Observable<User>{
      return this.http.put<User>(this.baseUrl+"/updateuser",userData)
    }
  }


