import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  billAmount:number = 0;


  constructor(public route:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe( (param:any) => {this.billAmount = param['total']} );
  }
  payUser()
  {
    alert("payment success");
    this.router.navigate(["user_login"]);

  }

}
