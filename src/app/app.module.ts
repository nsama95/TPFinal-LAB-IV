import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//formulario
import { FormsModule } from '@angular/forms';


//firebase
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

//variable de Environment
import { environment } from '../environments/environment';


//recapcha
import {RecaptchaModule} from 'ng-recaptcha';


import { ChartsModule } from 'ng2-charts';

//componentes
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pag/login/login.component';
import { MenuComponent } from './pag/menu/menu.component';
import { LogoutComponent } from './pag/logout/logout.component';
import { IniciosComponent } from './componentes/inicios/inicios.component';
import { ListadoTurnosComponent } from './componentes/listado-turnos/listado-turnos.component';
import { EstadisticaEspecialistaComponent } from './componentes/estadistica-especialista/estadistica-especialista.component';
import { RegistrarComponent } from './pag/registrar/registrar.component';
import { SacarturnoComponent } from './componentes/sacarturno/sacarturno.component';
import { ListadoturnosPasadosComponent } from './componentes/listadoturnos-pasados/listadoturnos-pasados.component';
import { ListadoturnosEspComponent } from './componentes/listadoturnos-esp/listadoturnos-esp.component';
import { RegistrarEmpleadoComponent } from './pag/registrar-empleado/registrar-empleado.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ListoPipe } from './pipes/listo.pipe';
import { EntrevistaPipe } from './pipes/entrevista.pipe';
import { ListadoRecepComponent } from './componentes/listado-recep/listado-recep.component';
import { EstadisticaTurnosComponent } from './componentes/estadistica-turnos/estadistica-turnos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    LogoutComponent,
    IniciosComponent,
    ListadoTurnosComponent,
    EstadisticaEspecialistaComponent,
    RegistrarComponent,
    SacarturnoComponent,
    ListadoturnosPasadosComponent,
    ListadoturnosEspComponent,
    RegistrarEmpleadoComponent,
    ListoPipe,
    EntrevistaPipe,
    ListadoRecepComponent,
    EstadisticaTurnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    RecaptchaModule,
    ChartsModule,
    NgApexchartsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
