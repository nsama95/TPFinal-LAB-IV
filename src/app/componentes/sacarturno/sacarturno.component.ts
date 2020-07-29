import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sacarturno',
  templateUrl: './sacarturno.component.html',
  styleUrls: ['./sacarturno.component.css']
})
export class SacarturnoComponent implements OnInit {
  turno = { especialista: "", fecha: "" };
  fechas= [];
  turnoListo: any;
  mail: string;
  nombre;
mostrar=true;

  message: string = "";
  spinner: boolean = false;


  constructor(
    private ser: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mail = this.ser.traerMail();
    setTimeout(() => {
      this.mostrar=false;
      
    }, 2000);
  }


  buscarFechas(especialista: string) {
    if (especialista == "") {

    } else {
    
  
      this.ser.obtenerBD("usuarios/" + especialista + "/turnos").subscribe((auxDatos) => {
        this.fechas = [];
        auxDatos.forEach((response: any) => {
          let userInfo = response.payload.doc.data();
        
          let fechasAux = [];
        
          fechasAux.push(userInfo);
          
          this.fechas.push(fechasAux[0]);
          
        })
      });
    }
  }


  sacarTurno() {
 
    let id: string;
    this.ser.obtenerBD("usuarios/" + this.turno.especialista + "/turnos").subscribe((auxDatos) => {
      auxDatos.forEach((response: any) => {
        let fechaInfo = response.payload.doc.data();
        if (fechaInfo.fecha == this.turno.fecha) {
          id = response.payload.doc.id;
          const turno= { fecha: fechaInfo.fecha, disponible: "no" };
          this.ser.actualizar("usuarios/" + this.turno.especialista + "/turnos", id, turno);
        }
      })
    });
   
    let salaAleatoria= Math.floor(Math.random() * 7) + 1;

    this.turnoListo = { cliente: this.mail, especialista: this.turno.especialista, fecha: this.turno.fecha, sala: salaAleatoria,por:this.mail}
    this.ser.guardarTurno(this.turnoListo);
    this.router.navigate(['/turnosPendientes']);
  }
  sacarTurnoRec() {
 
    let id: string;
    this.ser.obtenerBD("usuarios/" + this.turno.especialista + "/turnos").subscribe((auxDatos) => {
      auxDatos.forEach((response: any) => {
        let fechaInfo = response.payload.doc.data();
        if (fechaInfo.fecha == this.turno.fecha) {
          id = response.payload.doc.id;
          const turno= { fecha: fechaInfo.fecha, disponible: "no" };
          this.ser.actualizar("usuarios/" + this.turno.especialista + "/turnos", id, turno);
        }
      })
    });
   
    let salaAleatoria= Math.floor(Math.random() * 7) + 1;

    this.turnoListo = { cliente: this.nombre, especialista: this.turno.especialista, fecha: this.turno.fecha, sala: salaAleatoria, por: 'recep@gmail.com'}
    this.ser.guardarTurno(this.turnoListo);
    this.router.navigate(['/turnosPendientesGeneral']);
  }

}
