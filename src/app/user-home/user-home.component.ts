import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Product1 } from '../product1';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  productInfo:Array<Product1>=[];
  uid:any
  pid:any
  username:string="welcome"+" "    +sessionStorage.getItem("username");

  constructor(public ps:ProductService,public router:ActivatedRoute,public cservice:CartService,public rout:Router) { }

  ngOnInit(): void {
    
    this.uid=this.router.snapshot.paramMap.get('id');
    
    console.log(this.uid)
    this.loadProduct();
  }
  loadProduct():void
  {
    this.ps.loadproduct().subscribe({
      next:(data:any)=>this.productInfo=data,
      error:(error:any)=>console.log(error),
      complete:()=>console.log(this.productInfo)

    })

  }
  getWishlist()
  {

  }
  getCartData()
  {
       
       this.rout.navigate(['cart',this.uid])

  }
  userLogout()
  {
    sessionStorage.removeItem("username");
    this.rout.navigate(["user_login"]);

  }
  addCartData(pid:number)
  {
    this.pid=pid
    this.cservice.Addtocart(pid,this.uid).subscribe(res=>{
      alert("item added to cart")
    });
    

  }
  getData(pid:any)
  {

  }
}
