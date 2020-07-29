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
  selector: 'app-estadistica-especialista',
  templateUrl: './estadistica-especialista.component.html',
  styleUrls: ['./estadistica-especialista.component.css']
})
export class EstadisticaEspecialistaComponent implements OnInit {

  turnos = [];
  esp1 = 0;
  esp2 = 0;
  mostrar=true;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  ngOnInit(): void {
    this.turnos = [];
    this.serv.obtenerBD("turnos").subscribe((aux) => {
      aux.forEach((response: any) => {
        let turInfo = response.payload.doc.data();
       
        if(turInfo.especialista == "esp1@gmail.com"){
          this.esp1++;
       
          console.log(this.esp1);
        }else if(turInfo.especialista == "esp2@gmail.com"){
          this.esp2++;
        }
        this.turnos.push(turInfo);
      
       
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
          "Especialista 1",
          "Especialista 2",
          
        ]
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      title: {
        text: "Tipo de especialistas",
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


