import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = [
    {
      id: 1,
      name: 'iPhone',
      price: 100,
      description: 'High-quality smartphone',
      imgUrl: 'public/images/iphone.png',
      category: 'iOS',
    },
    {
      id: 2,
      name: 'Samsung Galaxy',
      price: 80,
      description: 'Android smartphone',
      imgUrl: 'public/images/galaxy.png',
      category: 'Android',
    },
    // إضافة المنتجات الأخرى مع التأكد من وجود جميع الحقول
  ];
constructor(){}
// دالة لارجاع البيانات
getProducts(){return this.products;}
// دالة لارجاع منتج معين 
getProductById(id:number){return this.products.find((product)=> product.id===id);}
// دالة لاضافةة منتج جديد 
// addProduct(product:{id:number; name:string; price:number; description:string;}){this.products.push(product);}

filterProducts(category:string): any[]{return this.products.filter(product=>product.category === category);}
}
