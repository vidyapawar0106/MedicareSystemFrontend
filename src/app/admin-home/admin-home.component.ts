import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Product1 } from '../product1';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  productInfo:Array<Product1>=[];
  pid:any

  constructor(public ps:ProductService,public router:ActivatedRoute,public rout:Router) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData():void{
    let msg1 =sessionStorage.getItem("username");
     this.ps.loadproduct().subscribe({
       next:(data:any)=>this.productInfo=data,
       error:(error:any)=>console.log("error generated"+error),
       complete:()=>console.log(this.productInfo)
 
     });
}
updateProduct(pid:any)
{
  this.pid=pid;
  console.log(pid);
  this.rout.navigate(['updateproduct',pid])


}
deleteProduct(pid:any)
{
  // alert("product "+id+" will be deleted")
  this.ps.deleteProduct(pid).subscribe({
    
  complete:()=>this.loadData(),
  

  });
  

}
manageUser()
{
  this.rout.navigate(["manage-user"]);

}
addAdmin()
{
  this.rout.navigate(["manage-admin"]);
  
}
addProduct()
{
  this.rout.navigate(["Add_Product"]);
}
logout()
{
  this.rout.navigate(["Admin_login"]);
}
bulk_upload()
{
  this.rout.navigate(["bulk-upload"]);
}
}
