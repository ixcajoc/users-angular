import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

//quitar el sugerencia de usuarios, o el autocmpletado
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule,ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
 
export default class LoginComponent {

  // loginForm = new FormGroup({

  //     user: new FormControl(''),
  //     password: new FormControl(''),
  
  // });


  loginForm: FormGroup;

  constructor(private AuthService: AuthService, private fb: FormBuilder){
    this.loginForm = this.fb.group({
      user: ['',Validators.required],
      password: ['', Validators.required],

    }); 

   }

  auth(){
    let post = {
      user: this.loginForm.value.user??'',
      password: this.loginForm.value.password??'',
      
    }

    this.AuthService.auth(post);

    
  }

  getUsers(){
    this.AuthService.getUsers().subscribe({
      next: (response)=> {console.log(response)},
      error: (error) => {console.log(error)}
    });

  }

  getTypeUsers(){
    this.AuthService.GetTypesUsers().subscribe({
      next: (response)=> {console.log(response)},
      error: (error) => {console.log(error)}
    });

  }

}
