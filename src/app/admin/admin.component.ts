import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  logindata:any
  loginref=new FormGroup({
    username:new FormControl,
    password:new FormControl

  })

  constructor(public as:AdminService,public router:ActivatedRoute,public rout:Router) { }

  ngOnInit(): void {
  }
  login()
  {
    this.logindata=this.loginref.value;
    this.loginref.reset();

    
         

            

         //console.log("uname "+this.uname+" password"+this.pwd)
         if(this.logindata.username=="admin" && this.logindata.password=="admin")
         {
          alert("Login Successful1!")

          console.log("login success")
          this.rout.navigate(["admin-home"]);

         }
         this.as.getAdmin().subscribe( adminList =>  {

          console.log(adminList);
   
         adminList.forEach( data => {

        if(data.username == this.logindata.username && data.password ==this.logindata.password){

          alert("Login Successful!")

           console.log("login success")
          //  localStorage.setItem('token',"hgdgfjbvjh-dnjdbvjh-klkioubhawgf")
          //  this.uname=="admin@gmail.com" ? localStorage.setItem('userType','admin') : localStorage.setItem('userType','user')
           this.rout.navigate(["admin-home"]);

         }
         
        else{
            console.log("Invalid Credentials, Enter valid data")

        }

      });

});  
  }

}
