import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './pag/menu/menu.component';
import { RegistrarComponent } from './pag/registrar/registrar.component';
import { LoginComponent } from './pag/login/login.component';
import { ListadoTurnosComponent } from './componentes/listado-turnos/listado-turnos.component';
import { ListadoturnosPasadosComponent } from './componentes/listadoturnos-pasados/listadoturnos-pasados.component';
import { SacarturnoComponent } from './componentes/sacarturno/sacarturno.component';
import { MenuGuard } from './guard/menu.guard';
import { ListadoturnosEspComponent } from './componentes/listadoturnos-esp/listadoturnos-esp.component';
import { IniciosComponent } from './componentes/inicios/inicios.component';
import { RegistrarEmpleadoComponent } from './pag/registrar-empleado/registrar-empleado.component';
import { EstadisticaEspecialistaComponent } from './componentes/estadistica-especialista/estadistica-especialista.component';
import { ListadoRecepComponent } from './componentes/listado-recep/listado-recep.component';
import { EstadisticaTurnosComponent } from './componentes/estadistica-turnos/estadistica-turnos.component';



const routes: Routes = [

    {
        path: 'home',
        component: MenuComponent,canActivate: [MenuGuard]
          
      }
      ,
      {
        path: 'registrar',
        component: RegistrarComponent,
      },
    {
      path:'login',
      component: LoginComponent,
     
    },
    {
      path:'turnosPendientesGeneral',
      component: ListadoRecepComponent,
     
    },
    {
      path:'estadisticaTurnos',
      component: EstadisticaTurnosComponent,
     
    },
    {
      path:'turnosPendientes',
      component: ListadoTurnosComponent,canActivate: [MenuGuard]
     
    },
    {
      path:'historialTurnos',
      component: ListadoturnosPasadosComponent,canActivate: [MenuGuard]
     
    },
    {
      path:'sacarTurnos',
      component: SacarturnoComponent,canActivate: [MenuGuard]
     
    },
    {
      path:'turnosEsp',
      component:ListadoturnosEspComponent,canActivate: [MenuGuard]
     
    },
    {
      path:'inicios',
      component:IniciosComponent,canActivate: [MenuGuard]
     
    },
    {
      path:'registro',
      component:RegistrarEmpleadoComponent,canActivate: [MenuGuard]
     
    },
    {
      path:'estadisticaEsp',
      component:EstadisticaEspecialistaComponent,canActivate: [MenuGuard]
     
    },
    
    { path: '', pathMatch: 'full', redirectTo: 'login'},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
