import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-inicios',
  templateUrl: './inicios.component.html',
  styleUrls: ['./inicios.component.css']
})
export class IniciosComponent implements OnInit {

  inicios = [];
mostrar= true;
  constructor(
    private ser: ServiceService,
  ) { }

  ngOnInit(): void {
    //lamo a los turnos regustrados, pero guardo solo los del cliente actual
    this.ser.obtenerBD("inicios").subscribe((auxAutos) => {
      this.inicios = [];

      auxAutos.forEach((response: any) => {
        let prodInfo = response.payload.doc.data();
        this.inicios.push(prodInfo);
      })
    });

    setTimeout(() => {
      this.mostrar=false;
      
    }, 2000);
  }
}
