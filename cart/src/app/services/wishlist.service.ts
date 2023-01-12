import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishList = new BehaviorSubject([])
  
  wishListArray =  []


  constructor() { }
  addTowList(product:any){
    this.wishListArray.push(product)
    this.wishList.next(this.wishListArray)
    let wlist=this.wishList['_value']
    localStorage.setItem("wishlist",JSON.stringify(this.wishListArray))
  }
}
