import { Component, Input } from '@angular/core';
import { User } from '../../../interfaces/type-user.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  
    <div class="card" style="width: 18rem;">

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
      <p class="card-title fs-3"><span class="fw-bolder">Id:</span> {{user.id}}</p>
      <p class="card-text"><span class="fw-bold">Usuario:</span> {{user.user}}</p>
      <!-- <p class="card-text"><span class="fw-bold">Descripcion:</span> {{user.type_user.descripction}}</p> -->
      <p class="card-text"><span class="fw-bold">Tipo:</span> {{user.type_user.type}}</p>
      <!-- <p class="card-text"><span class="fw-bold">id Tipo Usuario:</span> {{user.type_user.type_user_id}}</p> -->

      <a [routerLink]="['/details',user.id]" class="btn btn-primary" >Ver detalles</a>

    </div>
  </div>
  
  `,
  
})
export class UserCardComponent {
  @Input() user!: User;

}
