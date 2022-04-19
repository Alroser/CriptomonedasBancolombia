import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../models/login'


 
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  logIn (login: Login){
    return this.http.post(`${this.API_URL}/login/sigin`,login);
  }

}