import { LoginService } from './../../services/login.service';
import { Login } from './../../models/login';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @HostBinding ('class') classes = 'form-login';

  login : Login = {
    
    user:'',
    password:''
   
  }

  constructor(
    private router: Router, private loginService: LoginService

  ) { }

  ngOnInit(): void {
  }

  addTask(id_usuario: HTMLInputElement) {
    let tasks = [];
    tasks.push(id_usuario);
    localStorage.setItem('id_usuario',JSON.parse(id_usuario.value));
    this.router.navigate(["/usuario-form",id_usuario.value]);
    let usuario = JSON.parse(localStorage.getItem('id_usuario')|| '{}');
    return usuario;
    
  } 

  SigIn(){
    try {
      this.loginService.logIn(this.login).subscribe(
        res=> {
          console.log(res)
        },
        err => console.log(err)
      )
    } catch (error) {
      console.log(error);
    }
    
   }

}
