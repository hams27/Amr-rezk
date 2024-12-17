import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { TestmonialsComponent } from './testmonials/testmonials.component';
import { PaymentSectionComponent } from './payment-section/payment-section.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { Nav2Component } from './nav2/nav2.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BestSellarComponent } from './best-sellar/best-sellar.component';
import { OfferingComponent } from './offering/offering.component';
import { FillterComponent } from './fillter/fillter.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartComponent } from './cart/cart.component';
import { ShippingAdessComponent } from './shipping-adess/shipping-adess.component';
import { PaymentMethoodComponent } from './payment-methood/payment-methood.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';  // إضافة هذه السطر
// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    TestmonialsComponent,
    PaymentSectionComponent,
    HeroSectionComponent,
    Nav2Component,
    AboutComponent,
    ContactComponent,
    BestSellarComponent,
    OfferingComponent,
    FillterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    SingleProductComponent,
    CartComponent,
    ShippingAdessComponent,
    PaymentMethoodComponent,
    AdminComponent,
//  FormsModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule , // إضافة FormsModule هنا

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
