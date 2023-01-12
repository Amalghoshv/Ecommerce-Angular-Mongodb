import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-allproductview',
  templateUrl: './allproductview.component.html',
  styleUrls: ['./allproductview.component.css']
})
export class AllproductviewComponent implements OnInit {
  productDetails:any;
  search:any;

  constructor(private api:ApiService , private wlist:WishlistService,private cartService:CartService){}
  ngOnInit(): void {
    this.api.getproducts()
    .subscribe((result:any)=>{
      this.productDetails=result.products
      console.log(this.productDetails);
      this.productDetails.forEach((item:any)=>{
        Object.assign(item,{quantity:1,total:item.price})
      })
      
      
    })
    this.api.searchTerm.subscribe((data)=>{
      this.search = data
    })
    
    
  }
  addTowishList(product:any){
    this.wlist.addTowList(product)
    alert("Product added to Wishlist!")
  }
  addToCart(product:any){
    this.cartService.addToCart(product)
    alert("Product added to Cart!")
  }

}

