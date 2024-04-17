import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';
import { UserCardComponent } from './user-card/user-card.component';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/type-user.interface';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule,
    UserCardComponent, 
    HeaderComponent, 
    FooterComponent],
  
    templateUrl: './welcome.component.html',
})
export default class WelcomeComponent implements OnInit{

  usersData: User[] = [];
  currentUser:any;

  constructor(private AuthService: AuthService){}

  
  ngOnInit(): void{
    this.currentUser = this.AuthService.getCurrentUser();
    this.getUsers();

  }


  getUsers(){
    this.AuthService.getUsers().subscribe({
      next: (response: User[])=> {
        this.usersData = response;
      },
      error: (error) => {error}
    });

  }

  

}