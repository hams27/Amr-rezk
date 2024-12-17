import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  constructor() {
    // تحميل بيانات السلة من Local Storage إذا كانت موجودة
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }

  getCart() {
    return this.cart;
  }

  addToCart(product: any) {
    const existingProduct = this.cart.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity +=1;
      existingProduct.totalPrice += product.price;
    } else {
      this.cart.push({
        ...product,
        quantity: 1,
        totalPrice: product.price,
      });
    }
    this.updateCartItemCount();
    this.saveCartToLocalStorage();
  }

  removeFromCart(product: any) {
    this.cart = this.cart.filter((p) => p.id !== product.id);
    this.saveCartToLocalStorage();
    this.updateCartItemCount();

  }

  // removeFromCart(productId:number){
  //   this.cart= this.cart.filter((product)=> product.id !== productId)
  // }
  clearCart() {
    this.cart = [];
    this.saveCartToLocalStorage();
    this.updateCartItemCount();

  }

  updateQuantity(productId: number, quantity: number) {
    const product = this.cart.find((p) => p.id === productId);
    if (product) {
      product.quantity = quantity;
      product.totalPrice = product.price * quantity;

      if (quantity <= 0) {
        this.removeFromCart(product);
      } else {
        this.saveCartToLocalStorage();
      }
    }
  }

  private saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  // زيادة الكمية
increaseQuantity(productId:number){
  const product = this.cart.find((p)=> p.id === productId);
  if(product){
    product.quantity += 1;
  }
  this.updateCartItemCount();

}

// تقليل الكمية
decreaseQuantity(productId:number){
  const productIndex = this.cart.findIndex((product)=> product.id === productId);
  if (productIndex !== -1){
    const product = this.cart[productIndex];
    if (product.quantity >1 ){
      product.quantity -= 1 ;
    }else {
      this.cart.splice(productIndex , 1);
    }
  }
  this.updateCartItemCount();

}

// عرض العدد جمب السلة 
getTotalquantity(){
  return this.cart.reduce((sum , product) => sum + product.quantity , 0)
}

private CartItemCountSubject = new BehaviorSubject<number>(0);
getCartItemCount(){
  return this.CartItemCountSubject.asObservable();
}

// تحديث عدد المنتجات فى السلة 
private updateCartItemCount(){
  const totalQuantity = this.cart.reduce((sum , product) => sum + product.quantity , 0);
  this.CartItemCountSubject.next(totalQuantity);
}



}
