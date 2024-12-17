import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor (private router:Router){}
 onRegister(){
  const email = (document.querySelector('input[name = "email"]') as 
HTMLInputElement
).value;
const password = (document.querySelector('input[name = "password"]') as 
HTMLInputElement
).value;

localStorage.setItem(email,password);
alert('success')
this.router.navigate(['/home'])
 }
}
