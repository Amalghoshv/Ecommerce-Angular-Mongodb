import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalitem=0
  constructor(private api:ApiService ,private cartService:CartService){}
  
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((data)=>{
      this.totalitem = data.length
    })
    
  }
  search(event:any){
    // console.log(event.target.value);
    
    let searchValue = event.target.value
    this.api.searchTerm.next(searchValue)
  }


}
