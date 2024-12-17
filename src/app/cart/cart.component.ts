import { Component, OnInit} from '@angular/core';
import { CartService } from '../cart.service'; 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart: any[] = [];

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
  }

  removeItem(product: any) {
    this.cartService.removeFromCart(product);
    this.cart = this.cartService.getCart(); // تحديث قائمة السلة
  }
ngOnInit(){
  this.cart=this.cartService.getCart();
  this.updateTotal();
}
  clearCart() {
    this.cartService.clearCart();
    this.cart = []; // إعادة تعيين السلة
  }

  updateQuantity(product: any, newQuantity: number) {
    this.cartService.updateQuantity(product.id, newQuantity);
    this.cart = this.cartService.getCart(); // تحديث السلة
  }

  removeProduct(productId:number){this.cartService.removeFromCart(productId);
    this.cart= this.cartService.getCart();
  }
  // total:number = 0 ;
  getTotalPrice() {
    // getTotalPrice:number = 0;
    return this.cart.reduce((total, product) => total + product.totalPrice , 0);

    // this.total = this.cart.reduce((sum ,product) => sum + product.price *  , 0)
  }

// زيادة منتج
  increaseQuantity(productId:number){
    this.cartService.increaseQuantity(productId);
    this.cart= this.cartService.getCart();
  // return this. getTotalPrice()
  this.updateTotal();
// this.updateCartCount();
  }

  // تقليل منتج 
  decreaseQuantity(productId:number){
    this.cartService.decreaseQuantity(productId);
    this.cart = this.cartService.getCart();
    this.updateTotal();
  }
total:number = 0 ;



updateTotal(){

  this.total = this.cart.reduce((sum , product)=> sum + (product.price * product.quantity) , 0)
}


}
