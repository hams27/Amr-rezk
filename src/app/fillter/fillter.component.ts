import { Component } from '@angular/core';
import { ProductsService } from '../products.service'; 
import { CartService } from '../cart.service';

// تعريف واجهة للمنتج
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imgUrl: string;
  category: string;
}
@Component({
  selector: 'app-fillter',
  templateUrl: './fillter.component.html',
  styleUrl: './fillter.component.css'
})
export class FillterComponent{
  filteredProducts: any[] = []; // تعريف المتغير بشكل صحيح

  constructor(private productService: ProductsService, private cartService: CartService) {
    this.filteredProducts = this.productService.getProducts();
  }

  onCategoryChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement; // تحويل الحدث
    const category = selectElement.value;
    this.filteredProducts = category
      ? this.productService.filterProducts(category)
      : this.productService.getProducts();
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Product added to cart!');
  }

}
