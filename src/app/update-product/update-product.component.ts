import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Product1 } from '../product1';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  pid:any;
  productInfo:Array<Product1>=[];
  

  productref=new FormGroup({
    pid:new FormControl,
    pname:new FormControl,
    cname:new FormControl,
    prize:new FormControl,
    quantity:new FormControl,
    url:new FormControl
  })
  public product1: Product1={
    pid: 0,
    pname: '',
    cname: '',
    prize: 0,
    quantity:0,
    url:''
    
  }
 
 
  

  constructor(public ps:ProductService,public router:ActivatedRoute,public rout:Router) { }

  ngOnInit(): void {
    this.pid=this.router.snapshot.paramMap.get('id');
    console.log(this.pid);

    this.getproduct();
    
  }
  getproduct()
  {
    let id=this.pid;
    
    this.ps.getproductid(this.pid).subscribe({
       next:(data:any)=>this.product1=data,
      error:(error:any)=>console.log("error generated"+error),
      
      complete:()=>this.productref.patchValue({
        pid:this.product1.pid,
        pname:this.product1.pname,
        cname:this.product1.cname,
        prize:this.product1.prize,
        quantity:this.product1.quantity,
        url:this.product1.url
      })


    });
   
    }
  updateProduct()
    {
      let product=this.productref.value
      this.productref.reset();
      this.ps.updateproduct(product).subscribe(res=>{
        if(res !=null){
  
          alert("Product updated Successfully!")
          this.rout.navigate(["admin-home"]);
  
  
  
      }
  
      else{
  
        alert("updation failed! Try Again..")
  
       
  
      }
      })
  

    }
  

}
