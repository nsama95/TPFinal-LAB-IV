import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modales/usuario';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  usuarios: Usuario={
   
    correo:'' ,
    password: '',
   nombre: '' ,
   tipo: '',
   foto: 'https://image.flaticon.com/icons/svg/2919/2919561.svg',
  };
  todoOk : boolean = false;
  mostrarAlert = false;
  mensajeAlert = '';
  mensajeError;
  colorAlert = 'alert alert-success alert-dismissible fade show';
mostrar=true;
  
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    if(captchaResponse){
      this.todoOk = true;
    }
  }
  constructor(public user :ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.usuarios.tipo='cl';
    setTimeout(() => {
      this.mostrar=false;
      
    }, 2000);
  }
  async OnSubmitLogin(){
    // compruebo que los inputs esten bien
    if ( this.validarDatosInputs()) {
      try {

      await  this.user.registrarUsuario(this.usuarios);

    
      this.colorAlert = 'alert alert-success alert-dismissible fade show';
      this.mostrarAlerta('Registro exitoso!');

      setTimeout(() => {
        
       this.usuarios.correo='';
       this.usuarios.nombre='';
       this.usuarios.password='';
       this.usuarios.tipo='';

      }, 2000);

      } catch ( e ) {
        console.log(e.message);

        this.filtrarErrorFirebase(e.message);
     
      }

    } else {
      // si no estan bien muestro alert con msj correspondiente
      this.mostrarAlerta(this.mensajeError);
    }


}

filtrarErrorFirebase(respuesta : string) {

switch (respuesta) {
  case 'The email address is badly formatted.':
    this.mostrarAlerta('Error! El correo electronico tiene un formato incorrecto.');
    break;
  case 'Password should be at least 6 characters':
    this.mostrarAlerta('Error! La contraseña debe tener un minimo de 6 caracteres');
    break;
  case 'The email address is already in use by another account.':
    this.mostrarAlerta('Error! el email esta en uso por otra cuenta , ingrese otro');
    break;
  default:
       break;
}
}

validarDatosInputs() {

let retorno = false;

if (this.usuarios.correo !== '' && this.usuarios.password !== '' && this.usuarios.nombre !== '' ) {
  retorno = true;
} else {
  this.mensajeError= 'Error, Complete todos los campos!';
}

return retorno;

}

mostrarAlerta(mensajeErr: string) {
  this.mostrarAlert = true;
  this.mensajeAlert = mensajeErr;
}

noMostrarAlert() {
this.mostrarAlert = false;
}




}
