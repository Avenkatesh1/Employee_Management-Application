import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
  loginObj:any = {
     userName: '',
     password: ''
   }
 
   router = inject(Router);

   onLogin(){
    if(this.loginObj.userName == "venkat" && this.loginObj.password == 112233){
      alert('Successfully logged in with username');
      this.router.navigate(['/Dashboard']);
    }else{
      alert('Invalid credentials');
    }
   }
}
