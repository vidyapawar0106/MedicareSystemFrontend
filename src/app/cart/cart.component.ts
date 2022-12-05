import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { User1 } from '../user1';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  u_id:any
  p_id:any
  user1:Array<User1>=[];
  user:User1={
    id: 0,
    username: '',
    email: '',
    password: ''
    
  }
  grandTotal:any
  products:any=[]
  carts:any

  constructor(private router:ActivatedRoute,private rout:Router,public cs:CartService,public uservice:UserService) { }

  ngOnInit(): void {
    this.u_id=this.router.snapshot.paramMap.get('id')
    console.log(this.u_id);
    
    // alert("Welcome to Cart")
    this.getCart()

  }
  findTotalPrice() {
    this.grandTotal = 0;
    this.cs.getCart(this.user.id).subscribe(carts => {

      for(let cart of carts){
        this.grandTotal += cart.totalPrice;
      }
       
    })
  }
  getCart()
  {
    this.uservice.getUserById(this.u_id).subscribe( data=>{
      this.user=data

      
      console.log(data)

      this.cs.getCart(this.u_id).subscribe(res=>{
        this.carts=res
        console.log(res)
      })
    })


  }
  decreaseQuantity(cart: any, id: any) {
    cart.unit -= 1;
    cart.totalPrice = cart.unit* cart.product.prize;
    this.updateCart(cart, id);   
  }

  increaseQuantity(cart: any, id: any) {
  
    cart.unit += 1;
   
    cart.totalPrice = cart.unit * cart.product.prize;
    this.updateCart(cart, id);   
  }


  updateCart(cart: any, cartId: any) {
    
     this.cs.updateCart(cart, cartId).subscribe(cart => {
       console.log(cart);
       this.getCart();
     });
  }

  deleteCart(id:any){
    this.cs.deleteCart(id).subscribe(res=>{
      alert("item deleted ")
      this.getCart();

     })

}
goToDiscount()
{

}
}
