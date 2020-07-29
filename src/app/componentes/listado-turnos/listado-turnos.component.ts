import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-listado-turnos',
  templateUrl: './listado-turnos.component.html',
  styleUrls: ['./listado-turnos.component.css']
})
export class ListadoTurnosComponent implements OnInit {
 mail;
 listadoTurnos=[];
 mostrar=true;
  constructor( private ser:ServiceService) { }

  ngOnInit(): void {
    this.mail = this.ser.traerMail();
    //lamo a los turnos regustrados, pero guardo solo los del cliente actual
    this.ser.obtenerBD("turnos").subscribe((auxAutos) => {
      this.listadoTurnos = [];
      auxAutos.forEach((response: any) => {
        let turnoInfo = response.payload.doc.data();
        if(turnoInfo.cliente == this.mail && !turnoInfo.estado){
          this.listadoTurnos.push(turnoInfo);
        }
      })
    });
    setTimeout(() => {
      this.mostrar=false;
      
    }, 2000);
  }

  }


