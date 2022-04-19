import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { PaisFormComponent } from './components/pais-form/pais-form.component';
import { GestoraFormComponent } from './components/gestora-form/gestora-form.component';
import { PaisesService} from './services/paises.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioFormComponent,
    PaisFormComponent,
    GestoraFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    PaisesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
