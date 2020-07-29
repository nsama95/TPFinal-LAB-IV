import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-listadoturnos-esp',
  templateUrl: './listadoturnos-esp.component.html',
  styleUrls: ['./listadoturnos-esp.component.css']
})
export class ListadoturnosEspComponent implements OnInit {

  turnos = [];
  email;
  resenia;
usuarios;
mostrar=true;
  constructor(
    private serv: ServiceService,
  ) { }

  ngOnInit(): void {
    this.email = this.serv.traerMail();
    
    this.serv.obtenerBD("turnos").subscribe((auxAutos) => {
      this.turnos = [];
    
      auxAutos.forEach((response: any) => {
        let prodInfo = response.payload.doc.data();
        if (prodInfo.especialista == this.email) {
          this.turnos.push(prodInfo);
          
        }

      })
      console.log(this.turnos);  
      });
      setTimeout(() => {
        this.mostrar=false;
        
      }, 2000);
  }

  public realizarTurno(turno){
    let id: string;
   
    this.serv.obtenerBD("turnos/").subscribe((auxDatos) => {
      auxDatos.forEach((response: any) => {
        let turnoInfo = response.payload.doc.data();
        if (turnoInfo.fecha == turno.fecha && turnoInfo.cliente == turno.cliente && turnoInfo.especialista == turno.especialista) {
          id = response.payload.doc.id;

          if(!turno.resenia){
            const actualizada = {fecha: turno.fecha, especialista: turno.especialista, cliente: turno.cliente, sala: turno.sala, estado: "si"};
            this.serv.actualizar("turnos/", id,actualizada);
          }else{
            const actualizada = {fecha: turno.fecha, especialista: turno.especialista, cliente: turno.cliente, sala: turno.sala, resenia: turno.resenia, estado: "si"};
            this.serv.actualizar("turnos/", id, actualizada);
          }

        }
      })
    });

  }

  public agregarResen(turno){
    console.log(turno);
    let id: string;
    this.serv.obtenerBD("turnos/").subscribe((auxDatos) => {
      auxDatos.forEach((response: any) => {
        let turnoInfo = response.payload.doc.data();
        if (turnoInfo.fecha == turno.fecha && turnoInfo.cliente == turno.cliente && turnoInfo.especialista == turno.especialista) {
          id = response.payload.doc.id;

          if(!turno.realizado){
            const actualizada = {fecha: turno.fecha, especialista: turno.especialista, cliente: turno.cliente, sala: turno.sala,  resenia: turno.reseniaAux };
            this.serv.actualizar("turnos/", id, actualizada);
          }else{
            const actualizada = {fecha: turno.fecha, especialista: turno.especialista, cliente: turno.cliente, sala: turno.sala,  estado: "si", resenia: turno.reseniaAux,};
            this.serv.actualizar("turnos/", id, actualizada);
          }

        }
      })
    });
  }

}
