import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Admin1 } from '../admin1';

@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.css']
})
export class ManageAdminComponent implements OnInit {
  adminInfo:Array<Admin>=[];
  b1:boolean=true;
  b2:boolean=false;
  b3:boolean=false;
  formref=new FormGroup({
    id:new FormControl,
    username: new FormControl,
    password:new FormControl
  });
  public admin: Admin={
    id: 0,
    username: '',
    password: '',
  }
  addAdminref=new FormGroup({
    username:new FormControl,
    password:new FormControl

  });
  
  constructor(public as:AdminService,public rout:Router,public router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getallAdmin();
  }

  getallAdmin()
  {
    this.as.getAdmin().subscribe({
      next:(data:any)=>this.adminInfo=data,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("task complete")
    })

  }
  updateAdmin(id:any)
  {
    this.b1=false;
    this.b2=true;
    this.as.getAdminId(id).subscribe({
      next:(data:any)=>this.admin=data,
      error:(error:any)=>console.log(error),
      complete:()=>this.formref.patchValue({
        id:this.admin.id,
        username:this.admin.username,
        password:this.admin.password

    })
  })

  }
  deleteAdmin(id:any)
  { 
     this.as.deleteAdmin(id).subscribe(res=>{
      
      
        alert("Admin deleted successfully")
        this.getallAdmin();
      
      

     })
  }
  addAdmin()
  {
    let admin=this.addAdminref.value;
    this.addAdminref.reset();
    this.as.storeAdmin(admin).subscribe(res=>{
      if(res!=null)
      {
        alert("Admin added successfully")
        this.b1=true;
        this.b2=false;
        this.b3=false;
      }
      else
      {
        alert("Admin not added")
      }

    })

  }
  updateadmin1()
  {
    let addadmin=this.formref.value
      this.formref.reset();
      this.as.updateAdmin(addadmin).subscribe(res=>{
        if(res !=null){
  
          alert("Admin updated Successfully!");
          this.b1=true;
          this.b2=false;
          
  
  
  
      }
  
      else{
  
        alert("updation failed! Try Again..")
  
       
  
      }
      })
  

  }
  onClick()
  {
    this.b3=true;
    this.b1=false;
    this.b2=false;
  }
  adminHome()
  {
    this.rout.navigate(["admin-home"]);
  }

}
