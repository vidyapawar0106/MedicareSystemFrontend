import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { User1 } from '../user1';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  f1:boolean=false;
  b1:boolean=true;
  b2:boolean=false;
  r1:boolean=false;
  storemgs:string="";
  userinfo:Array<User1>=[];
  logininfo:Array<User>=[];
  msg:string="";
  uid:any;


  userref=new FormGroup({
    username:new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)

  });
   loginref=new FormGroup({
    email:new FormControl(),
    password:new FormControl()

   })

  constructor(public us:UserService, public router:Router,public rout:ActivatedRoute) { }

  ngOnInit(): void {
  }

  register()
  {
    this.b1=false;
    this.b2=true;
    this.r1=true;

  }
  registeruser()
  {
    let user=this.userref.value;
    
    console.log(user);
    this.userref.reset();
     this.us.storeuser(user).subscribe({
      next:(data:any)=>this.storemgs="data loaded successfully",
     error:(error:any)=>this.storemgs="data isnt store",
      complete:()=>console.log("task complete")})
      this.b1=true
      this.r1=false
  
  }
  login()
  {
    let user=this.loginref.value;
    console.log(user);
    this.loginref.reset();
    this.us.getAllUser().subscribe( userList =>  {

      console.log(userList);
      // alert(userList)

        userList.forEach( data => { 

            console.log(data);

         

      if(data.email == user.email && data.password == user.password){

          alert("Login Successful!")

           console.log("login success")

            sessionStorage.setItem("username",data.username);
           //localStorage.setItem('token',"hgdgfjbvjh-dnjdbvjh-klkioubhawgf-uidhrbvsejuhdvjbj-jfdhh")
           //this.uid=data.id;
            this.router.navigate(["user_home",data.id]);

         }
         
        else{

            console.log("Invalid Credentials, Enter valid data")

        }

      });

});  
      

    

  }
}
