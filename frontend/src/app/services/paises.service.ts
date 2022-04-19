import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


 
@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  getMonedaPais (id: number){
    return this.http.get(`${this.API_URL}/paises/list-moneda-pais/${id}`);
  }

  getMonedaPaisUser (id: number){
    return this.http.get(`${this.API_URL}/paises/list-moneda-pais-usuario/${id}`);
  }


}
