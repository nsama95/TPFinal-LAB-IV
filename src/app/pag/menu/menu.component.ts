import { Component, OnInit } from '@angular/core';
import{ServiceService} from 'src/app/services/service.service'

import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
tipo='';
variable:boolean;
nombre='';
foto:string;
ver= false;
  constructor(private ser:ServiceService, private router :Router) { }

  ngOnInit(): void {

    
    const email = this.ser.traerMail();

    this.ser.obtenerBD("usuarios").subscribe((auxAutos) => {
      auxAutos.forEach((response: any) => {
        let user = response.payload.doc.data(0);
        if(email==user.correo)
        {
          
        this.tipo=user.tipo;
        this.foto=user.foto;
        this.nombre=user.nombre;
        }
       
        
      })
    });



  }
  public cerrarSesion() {
    this.variable = false;
    this.tipo= '';
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }
  info(){
this.ver=true;
  }
  cerrarInfo()
{
  this.ver=false;
}
}
