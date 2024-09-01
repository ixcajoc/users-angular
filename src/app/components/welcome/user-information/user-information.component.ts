import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth-service.service';
import { User, UserAlone } from '../../../interfaces/type-user.interface';
import { HeaderComponent } from '../../header/header.component';

//cambiar opciones a espaniol

@Component({
  selector: 'app-user-information',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  template: `

  <app-header/>

  <div class="container text-center">
    <h1 class="my-5">Información de usuario</h1>
    <div class="d-flex justify-content-center">
      
      <div class="card" *ngIf="user" style="width: 18rem;">
        
        @if(user.type_user.type === "Admin"){
          <div  style="background-color: #21CABD;" >
            <i class="bi bi-person-circle fs-1" style="color: #fff;" ></i>

          </div>
        }
        @else{
          <div style="background-color: #0E51D5;">
            <i class="bi bi-person fs-1" style="color: #fff;"></i> 

          </div>
        }

        <div class="card-body">
          
          @for (key of getObjectKeys(user); track $index) {

            @if (key !== 'type_user') {
              <p class="card-text"><span class="fw-bold">{{ key }}:</span>  {{ user[key] }}</p>

            }
            @else {
              @for (key2 of getObjectKeys(user[key]); track $index) {
                <p class="card-text"><span class="fw-bold">{{ key2 }}:</span>  {{ user[key][key2] }}</p>
              }
            }
          }
          <a href="/welcome" class="btn btn-primary" >Regresar</a>

        </div>

      </div>

    </div>
  
  </div>

  `,
})
export default class UserInformationComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  // authService = inject(AuthService);

  users: any[] = [];
  user: any | undefined;


  constructor(private authService: AuthService) {

    this.authService.getUsers().subscribe({
      next: (response: any[]) => {
        this.users = response;
        const userId = parseInt(this.route.snapshot.params['id'], 10);
        this.user = this.users.find(user => user.id === userId);
        // console.log(this.user);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

}
