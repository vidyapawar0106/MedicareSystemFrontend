import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { User1 } from '../user1';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  userInfo:Array<User1>=[];
  b1:boolean=true;
  b2:boolean=false;
  b3:boolean=false;
  userref=new FormGroup({
    id:new FormControl,
    username:new FormControl,
    email:new FormControl,
    password:new FormControl
  })
  user:User1={
    id:0,
    username:'',
    email:'',
    password:''
  }

  constructor(public us:UserService,public rout:Router,public router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getallUser();
  }
  getallUser()
  {
    this.us.getAllUser().subscribe({
      next:(data:any)=>this.userInfo=data,
      error:(error:any)=>console.log(error),
      complete:()=>console.log(this.userInfo)
    });
  }
  onClickUpdate(id:any)
  {
    this.b1=false;
    this.b2=true;
    this.b3=false;
    this.us.getUserById(id).subscribe({
      next:(data:any)=>this.user=data,
      error:(error:any)=>console.log(error),
      complete:()=>this.userref.patchValue({
        id:this.user.id,
        username:this.user.username,
        email:this.user.email,
        password:this.user.password
      })
    })

  }
  OnClickDelete(id:any)
  {
    this.us.deleteUser(id).subscribe({
      complete:()=>this.getallUser()

    });
    
  }
  updateUser()
  {
    let user=this.userref.value;
    this.userref.reset();
    this.us.updateUser(user).subscribe(res=>{
      if(res!=null)
      {
        alert("user Updated successfully");
        this.b1=true;
        this.b2=false
      }
      else{
        alert("user not updated");
      }
    })

  }
  admin()
  {
    this.rout.navigate(["admin-home"]);
  }
 
}
