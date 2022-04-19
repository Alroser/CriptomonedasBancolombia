
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './components/login/login.component';
import { PaisFormComponent } from './components/pais-form/pais-form.component';
import { GestoraFormComponent } from './components/gestora-form/gestora-form.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';

const routes: Routes = [
  
  {
    path:'',
    redirectTo: '/login',
    pathMatch : 'full'
  },
  
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'pais-form/:id',
    component: PaisFormComponent
  },

  {
    path: 'usuario-form/:id',
    component: UsuarioFormComponent
  },

  {
    path: 'gestora-form/:id',
    component: GestoraFormComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
