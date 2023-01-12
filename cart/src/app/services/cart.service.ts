import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemList = new BehaviorSubject([])
  cartItemListArray:any = []

  constructor() { }
  //to get cart items to cart component
  getProducts(){
    return this.cartItemList.asObservable()
  }
  addToCart(product:any){
    this.cartItemListArray.push(product);
    this.cartItemList.next(this.cartItemListArray)
    this.getTotalPrice()
  }
  getTotalPrice(){
    let Total=0
    this.cartItemListArray.map((item:any)=>{
      Total+=item.price
      Math.round(Total)
      console.log(Total);
      
    })
    return Total;
  }
  //remove a single product detail from cart table
  removeItemCart(product){
    this.cartItemListArray.map((item:any,index:any)=>{
      if(product.id==item.id){
        this.cartItemListArray.splice(index,1)
      }

    })
    this.cartItemList.next(this.cartItemListArray)
    
  }
  //remove all items from cart
  removeAllItemCart(){
    this.cartItemListArray=[]
    this.cartItemList.next(this.cartItemListArray)
  }
}
