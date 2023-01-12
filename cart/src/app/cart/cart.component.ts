import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products=[]
  totalPrice=0;
  

  constructor(private cartService:CartService,private router:Router){}
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((data)=>{
      this.products = data
      console.log(this.products);
      this.totalPrice=this.cartService.getTotalPrice()
      
      
      
    })

  }
  removeItemCart(item:any){
     this.cartService.removeItemCart(item)
     this.totalPrice= this.cartService.getTotalPrice()
     
  }
  removeAllItemCart(){
    this.cartService.removeAllItemCart()

  }

//giving discount of 10% if the item number is greater than 3

discountItem(){
  if(this.products.length>3){
    let discount = (this.totalPrice *10)/100
    let discountPrice = this.totalPrice-discount
    this.totalPrice=this.totalPrice-(this.totalPrice*10/100)
    alert('Your orderis Confirmed!! and Total price after discount is : '+Math.floor(discountPrice))
    this.removeAllItemCart()
    this.router.navigateByUrl("")

  }else{
    alert('Your orderis Confirmed!! and Total price is : '+Math.floor(this.totalPrice))
    this.removeAllItemCart()
    this.router.navigateByUrl("")


  }
}
}
