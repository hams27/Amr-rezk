import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor (private router:Router){}

onLogin(){
  const email = (document.querySelector('input[name = "email"]') as 
HTMLInputElement
).value;
const password = (document.querySelector('input[name = "password"]') as 
HTMLInputElement
).value;

const storedPassword = localStorage.getItem(email);

if (storedPassword === null){
  alert('this account not sign');
}else if (storedPassword === password) {
  alert('success');

}else {
  alert('not success')
}
 }
}
