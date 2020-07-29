import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-listado-recep',
  templateUrl: './listado-recep.component.html',
  styleUrls: ['./listado-recep.component.css']
})
export class ListadoRecepComponent implements OnInit {

  turnos = [];
  email;
  mostrar=true;
  constructor(
    private serv: ServiceService
  ) { }

  ngOnInit(): void {

    this.email = this.serv.traerMail();
    //lamo a los turnos regustrados, pero guardo solo los del cliente actual
    this.serv.obtenerBD("turnos").subscribe((aux) => {
      this.turnos = [];
      aux.forEach((response: any) => {

        let prodInfo = response.payload.doc.data();
        if(prodInfo.estado=='si'){
         
        }else{
          this.turnos.push(prodInfo);
        }
       
      })
    });
    setTimeout(() => {
      this.mostrar=false;
      
    }, 2000);

  }
  public cancelarTurno(turno){
    console.log(turno);
    let id: string;
    this.serv.obtenerBD("turnos/").subscribe((auxDatos) => {
      auxDatos.forEach((response: any) => {
        let turnoInfo = response.payload.doc.data();
        if (turnoInfo.fecha == turno.fecha && turnoInfo.cliente == turno.cliente && turnoInfo.especialista == turno.especialista) {
          id = response.payload.doc.id;
            this.serv.eliminar("turnos/", id);


            
            this.serv.obtenerBD("usuarios/" + turno.especialista + "/turnos").subscribe((auxDatos) => {
              auxDatos.forEach((response: any) => {
                let fechaInfo = response.payload.doc.data();
                if (fechaInfo.fecha == turno.fecha) {
                  id = response.payload.doc.id;
                  const dispActulizada = { fecha: fechaInfo.fecha, disponible: "si" };
                  this.serv.actualizar("usuarios/" + turno.especialista + "/turnos", id, dispActulizada);
                }
              })
            });
          
        }
      })
    });
  }


}
