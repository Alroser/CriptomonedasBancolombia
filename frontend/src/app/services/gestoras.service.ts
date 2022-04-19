import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


 
@Injectable({
  providedIn: 'root'
})
export class GestorasService {

  API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getGestorasPaisUser (id: number){
    return this.http.get(`${this.API_URL}/gestoras/list-moneda-gestora-pais-usuario/${id}`);
  }

}