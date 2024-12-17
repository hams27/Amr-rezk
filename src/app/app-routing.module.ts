import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsService } from './products.service';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { BestSellarComponent } from './best-sellar/best-sellar.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { FillterComponent } from './fillter/fillter.component';
import { FooterComponent } from './footer/footer.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { NavComponent } from './nav/nav.component';
import { Nav2Component } from './nav2/nav2.component';
import { OfferingComponent } from './offering/offering.component';
import { PaymentSectionComponent } from './payment-section/payment-section.component';
import { ShippingAdessComponent } from './shipping-adess/shipping-adess.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { TestmonialsComponent } from './testmonials/testmonials.component';
import { CartService } from './cart.service';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'about',component:AboutComponent},
  {path:'admin',component:AdminComponent},
  {path:'bestsellar',component:BestSellarComponent},
  {path:'cart',component:CartComponent},
  {path:'contact',component:ContactComponent},
  {path:'fillter',component:FillterComponent},
  {path:'footer',component:FooterComponent},
  {path:'herosection',component:HeroSectionComponent},
  {path:'nav',component:NavComponent},
  {path:'nav2',component:Nav2Component},
  {path:'offering',component:OfferingComponent},
  {path:'paymentmethood',component:PaymentMethodChangeEvent},
  {path:'paymentsection',component:PaymentSectionComponent},
  {path:'shippingaddress',component:ShippingAdessComponent},
  {path:'singleproduct',component:SingleProductComponent},
  {path:'testmonials',component:TestmonialsComponent},
  {path:'products',component:ProductsService},
  // {path:'fillter',component:FillterComponent},
  {path:'cartservice',component:CartService},
  {path:'FormsModule',component:FormsModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
