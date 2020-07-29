import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-listadoturnos-pasados',
  templateUrl: './listadoturnos-pasados.component.html',
  styleUrls: ['./listadoturnos-pasados.component.css']
})
export class ListadoturnosPasadosComponent implements OnInit {

  turnos = [];
  email;
fechaTurno:string;
  turnoEncuenta;
 
mostrar=true;

 abrir=false;
  especialista = 0;
  resenia : string ;

  constructor(
    private ser:ServiceService,
  ) { }

  ngOnInit(): void {
    this.email = this.ser.traerMail();
    
    this.ser.obtenerBD("turnos").subscribe((auxTurnos) => {
      this.turnos = [];
      auxTurnos.forEach((response: any) => {
        let turnoInfo = response.payload.doc.data();
        if(turnoInfo.cliente == this.email && turnoInfo.estado){
          this.turnos.push(turnoInfo);
          
        }
      })
      console.log(this.turnos)
    });
    setTimeout(() => {
      this.mostrar=false;
      
    }, 2000);
  }

  cerrarEncuesta(){
    this.abrir = false;
    this.fechaTurno='';
   
  }
  abrirEncuenta(fecha: string){
    this.abrir=true;
    this.fechaTurno=fecha;

  }
  agregarEncuesta(fecha, especialista, cliente){
    let id : string;
 
   this.ser.obtenerBD("turnos").subscribe((auxturno) => {
      auxturno.forEach((response: any) => {
        let turnoInfo = response.payload.doc.data();
        if(turnoInfo.cliente == cliente && turnoInfo.especialista == especialista && turnoInfo.fecha == fecha ){
          id = response.payload.doc.id
          let entrevista = {Esp: this.especialista, Resenia: this.resenia};
          let turnoEncues;
          if(turnoInfo.resenia){
            turnoEncues = { cliente: turnoInfo.cliente, especialista: turnoInfo.especialista, fecha: turnoInfo.fecha, sala: turnoInfo.sala, estado: turnoInfo.estado, resenia: turnoInfo.resenia, entrevista: entrevista};
         console.log(turnoEncues) }else{
            turnoEncues = { cliente: turnoInfo.cliente, especialista: turnoInfo.especialista, fecha: turnoInfo.fecha, sala: turnoInfo.sala, estado: turnoInfo.estado, entrevista: entrevista};
          }
          this.ser.actualizar("turnos/", id, turnoEncues);
        }
      })
    });
    this.abrir = false;
    this.fechaTurno='';
  }

}
