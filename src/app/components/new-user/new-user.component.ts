import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewUser } from '../../interfaces/new-user.interface';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth-service.service';
import { of } from 'rxjs';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [CommonModule,HeaderComponent, RouterModule, FormsModule,ReactiveFormsModule, HttpClientModule],
  templateUrl: './new-user.component.html',
  styles: `
    .validacion{
      color: red;
      text-align: end;
    }
  
  `
})
export default class NewUserComponent {

  newUserForm: FormGroup;


  constructor(private AuthService:AuthService, private fb: FormBuilder, private router: Router){
    this.newUserForm = this.fb.group({
      user: ['',Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      type_user: ['', Validators.required],

    }); 
  }

  newUser(){
    const newUser: NewUser ={
      user: this.newUserForm.value.user??'',
      password: this.newUserForm.value.password??'',
      name: this.newUserForm.value.name??'',
      last_name: this.newUserForm.value.last_name??'',
      type_user: parseInt(this.newUserForm.value.type_user??0) ,
   
    }

    this.AuthService.newUser(newUser);
   


    
  }

}
