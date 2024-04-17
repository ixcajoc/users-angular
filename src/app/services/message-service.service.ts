import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class MessageService {


  // private token: string | null = null;
  
  constructor() {}


  successAlert(){
    Swal.fire({
      icon: "success",
      title: "Excelente!",
      text: "Usuario Creado Exitosamente",
      // footer: '<a href="#">Why do I have this issue?</a>'
    });
  }
  errorAlert(text:string){
    Swal.fire({
      icon: "error",
      title: "Oopss...",
      text: `${text}`,
      // footer: '<a href="#">Why do I have this issue?</a>'
    });
  }
  
 
}