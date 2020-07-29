import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modales/usuario';
import{ServiceService } from 'src/app/services/service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo : string;
  password :string;
  todoOk : boolean = false;
 
  resolved(captchaResponse: string) {
   console.log(`Resolved captcha with response: ${captchaResponse}`);
   if(captchaResponse){
     this.todoOk = true;
   }
 }
 
  /* */
  usuarios: Usuario ={
    
   correo:'' ,
   password: '',
  nombre: '' ,
  tipo:'',
  foto:''
 
 };
 mostrarAlert = false;
 mensajeAlert = '';
 mensajeError;
 colorAlert = 'alert alert-success alert-dismissible fade show';
 //usuarios.correo='';
   
   constructor(public user :ServiceService, private router: Router) { }
 
   ngOnInit(): void {
 
     //this.mostrarAlert = false;
 
   }
   validarDatosInputs(): boolean {
 
     let retorno = false;
 
     if (this.usuarios.correo !== '' && this.usuarios.password === '') {
       console.log('Error, completar la  contraseña también ');
       this.mensajeError = 'Error, completar la  contraseña también ';
     }
 
     if (this.usuarios.correo === '' && this.usuarios.password !== '') {
       this.mensajeError = 'Error, completar el correo también ';
       console.log('Error, completar el correo también ');
     }
 
     if (this.usuarios.correo === '' && this.usuarios.password === '') {
       this.mensajeError = 'Error, completar correo y contraseña';
       console.log('Error, completar correo y contraseña');
     }
 
     if (this.usuarios.correo !== '' && this.usuarios.password !== '') {
       retorno = true;
       console.log('entro');
     }
     return retorno;
   }
  async OnSubmitLogin(){
    if(this.validarDatosInputs()){
     try {
     await  this.user.iniciarSesion(this.usuarios);
     this.colorAlert = 'alert alert-success alert-dismissible fade show';
     this.mostrarAlerta('logeado con exito');
     if(this.usuarios.correo !== "administrador@gmail.com"){
      var today = new Date();
      let sesion = {mail: this.usuarios.correo, today} 
      this.user.crear("inicios", sesion);
    }
     setTimeout(() => {
       let tipo= localStorage.getItem('tipo')
        if(tipo=='cl'){
          this.router.navigate(['/turnosPendientes']);
     
        }
        if(tipo=='esp'){
          this.router.navigate(['/turnosEsp']);
     
        }
        if(tipo=='admin'){
          this.router.navigate(['/inicios']);
     
        }
        if(tipo=='rec'){
          this.router.navigate(['/sacarTurnos']);
     
        }
       
     }, 1000);
    
 
       
       
 
      console.log('entre al try');
 
 
      } catch ( e ) {
        console.log(e.message);
 
        this.filtrarErrorFirebase(e.message);
        console.log('entre al error');
      }
 
    } else {
      //si no estan bien muestro alert con msj correspondiente
      this.mostrarAlerta(this.mensajeError);
    }
 
  }
 
 
  filtrarErrorFirebase(respuesta: string) {
 
   switch (respuesta) {
     case 'The email address is badly formatted.':
 
       this.mostrarAlerta('Error! El correo electronico tiene un formato incorrecto.');
       break;
     case 'The password is invalid or the user does not have a password.':
 
       this.mostrarAlerta('Error! La contraseña es incorrecta');
       break;
     case 'There is no user record corresponding to this identifier. The user may have been deleted.':
 
         this.mostrarAlerta('Error! la cuenta con la que intenta ingresar no existe');
         break;
     default:
       break;
   }
 }
 mostrarAlerta(mensajeErr: string) {
   this.mostrarAlert = true;
   this.mensajeAlert = mensajeErr;
 }
 
 
 selecionCuenta(cuenta) {
  switch (cuenta) {
    case "admin": {
      this.usuarios.correo = "admin@gmail.com";
      this.usuarios.password = "123456";
      break;
    }
    case "cl": {
      this.usuarios.correo = "user@gmail.com";
      this.usuarios.password = "123456";
      break;
    }
    case "rec": {
      this.usuarios.correo = "recep@gmail.com";
      this.usuarios.password = "123456";
      break;
    }
    case "esp1": {
      this.usuarios.correo = "esp1@gmail.com";
      this.usuarios.password = "123456";
      break;
    }
    case "esp2": {
      this.usuarios.correo = "esp2@gmail.com";
      this.usuarios.password = "123456";
      break;
    }
  }
}
 
 
 
    }
 