import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productInfo:Array<Product>=[];
  storemgs:string="";
  

  formref=new FormGroup(
    {
      pname:new FormControl('',Validators.required),
      cname:new FormControl('',Validators.required),
      prize:new FormControl('',Validators.required),
      quantity:new FormControl('',Validators.required),
      url:new FormControl('',Validators.required)
    }
  );

  constructor(public ps:ProductService,public rout:Router) { }

  ngOnInit(): void {
    
  }
  addproduct(){
    
    let product=this.formref.value
    this.formref.reset();
    this.ps.storeproduct(product).subscribe(res=>{
      if(res !=null){

        alert("Product Registered Successfully!")
        this.rout.navigate(["admin-home"]);




    }

    else{

      alert("Registration failed! Try Again..")

     

    }
    })

  }
}
