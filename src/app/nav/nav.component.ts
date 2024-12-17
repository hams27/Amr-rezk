import { Component , OnInit} from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{

  cartItemCount : number = 0 ;
constructor(private cartService : CartService){}
ngOnInit() {
  // this.cartItemCount = this.cartService.getTotalquantity();
  this.cartService.getCartItemCount().subscribe((count) => {
    this.cartItemCount = count ;
  })
  // تحديث عدد المنتجات عند تحميل المكون 
  
}
// يمكن تحديث عدد المنتجات عند اضافة او ازالة المنتجات 
updateCartCount(){
  this.cartItemCount = this.cartService.getTotalquantity();
}
}
