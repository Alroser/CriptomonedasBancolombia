import { Monedas } from './../models/monedas';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Usuarios} from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  API_URL = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  
  getUsuarios(){
    return this.http.get(`${this.API_URL}usuarios`);
  }

  getUsuario(id: number){
    return this.http.get(`${this.API_URL}usuarios/${id}`);
  }

  getMonedasUsuario(id: number){
    return this.http.get(`${this.API_URL}usuarios/listar-monedas-usuario/${id}`);
  }

  getMonedasDisponiblesUsuario(id: number){
    return this.http.get(`${this.API_URL}usuarios/listar-monedas-disponibles-usuario/${id}`);
  }
  

  deleteUsuario (id: number , mon: number){
    return this.http.delete(`${this.API_URL}usuarios/delete-usuario-moneda/${id}/${mon}`);
  }

  insertUsuario (usuario: Usuarios){
    return this.http.post(`${this.API_URL}usuarios/create-mon-usu`,usuario);
  }

  getMonedaId (id: number){
    return this.http.get(`${this.API_URL}usuarios/monedas/${id}`);
  }

  updateMoneda (id: number , monedas: Monedas){
    return this.http.put(`${this.API_URL}usuarios/actualiza-moneda/${id}`,monedas);
  }
  
}
