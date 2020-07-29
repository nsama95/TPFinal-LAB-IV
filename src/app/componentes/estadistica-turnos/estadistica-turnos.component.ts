import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexXAxis,
  ApexPlotOptions,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  colors: string[];
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
};
@Component({
  selector: 'app-estadistica-turnos',
  templateUrl: './estadistica-turnos.component.html',
  styleUrls: ['./estadistica-turnos.component.css']
})
export class EstadisticaTurnosComponent implements OnInit {

  autos = [];
  esp1 = 0;
  esp2 = 0;
  mostrar=true;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  ngOnInit(): void {
    this.autos = [];
    this.serv.obtenerBD("turnos").subscribe((aux) => {
      aux.forEach((response: any) => {
        let turInfo = response.payload.doc.data();
       
        if(turInfo.por === "recep@gmail.com" ){
          this.esp1++;
       
          console.log(this.esp1);
        }else if(turInfo.por != "recep@gmail.com" ){
          this.esp2++;
        }
        this.autos.push(turInfo);
      
       
      })
    });
    setTimeout(() => {
      this.mostrar=false;
      
    }, 2000);
  }
  constructor(
    private serv: ServiceService,
  ) {
    this.chartOptions = {
     
      chart: {
        type: "bar",
      },
      plotOptions: {
        bar: {
          barHeight: "100%",
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: "bottom"
          }
        }
      },
      colors: [
      
        "#f48024",
        "#69d2e7"
      ],
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#fff"]
        },
        formatter: function(val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        offsetX: 0,
        dropShadow: {
          enabled: true
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: [
          "Rescepcionista",
          "Clientes",
          
        ]
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      title: {
        text: "Turnos emitidos",
        align: "center",
        floating: true
      },
     
      tooltip: {
        theme: "dark",
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function() {
              return "";
            }
          }
        }
      }
    };
  }
   

  



}
