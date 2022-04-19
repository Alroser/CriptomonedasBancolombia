import { Monedas } from './../../models/monedas';
import { Usuarios } from './../../models/usuarios';
import { UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import {FormGroup , FormControl , Validators} from '@angular/forms';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';




declare var window: any;

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})


export class UsuarioFormComponent implements OnInit {

  @HostBinding ('class') classes = 'modal-body';

  usuario : Usuarios = {
    
    id_usuario: parseInt(localStorage.getItem('id_usuario')|| '{}'),
    id_moneda: 0
   
  }

  monedas: Monedas = {
    valor_moneda:''
  }


  faTrashCan = faTrashCan;
  faPenToSquare = faPenToSquare;
  usuarios: any = [];
  formmodal: any;
  formmodal2: any;
  mondispo: any = [];
  usuSelected: any = {};
  modifedtext: any;
  
  

  constructor(private usuariosService: UsuariosService, private router: Router, private activerouter : ActivatedRoute) { }

  datoValorMoneda!: Monedas;
  editarMoneda = new FormGroup({valor_moneda: new FormControl('')});
  

  ngOnInit(): void {

   

    this.usuariosService.getMonedasUsuario(this.getUser()).subscribe(
      res => {
            this.usuarios = res;
            console.log(res);            
      },
      err => console.log(err)
    );

    this.formmodal = new window.bootstrap.Modal(
      document.getElementById("exampleModalCenter")
    );

    this.formmodal2 = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
    
  }

  listMonedas () {
    
    this.usuariosService.getMonedasUsuario(this.getUser()).subscribe(
      res => {
            this.usuarios = res;
            console.log(res);            
      },
      err => console.log(err)
    );
  }

  getUser() {
    
    let usuarios = parseInt(localStorage.getItem('id_usuario')|| '{}');
    return usuarios;

  }
  
  openModal(){
     this.usuariosService.getMonedasDisponiblesUsuario(this.getUser()).subscribe(
    res => {
          this.mondispo = res;
          console.log(res);            
    },
    err => console.log(err)
     );

    this.formmodal.show();
  }

  openModalUpd(){
    this.formmodal2.show();
   
    let idMon: any = this.activerouter.snapshot.paramMap.get('id')|| '{}';
    this.usuariosService.getMonedaId(idMon).subscribe(
      res => {
            this.mondispo = res;
            console.log(res);            
      },
      err => console.log(err)
       );
    
  }

  doSomething(){
    this.formmodal.hide();
    this.formmodal2.hide();
  }
  
  editarUsuario(id: any){
    this.router.navigate(['usuario-form',id]);
  }
  
  deleteUsuario(id: any) {
   
    this.usuariosService.deleteUsuario(this.getUser(),id).subscribe(
      res => {
        this.usuariosService.getMonedasUsuario(this.getUser()).subscribe(
          res => {
                this.usuarios = res;
                console.log(res);            
          },
          err => console.log(err)
        );                      
      },
      err => console.log(err)
    );
  }



onMonedaSelected(val: number){
    return val;
  
}
 
insertusuario(val : number){
  
 this.usuario.id_moneda = this.onMonedaSelected(val);

 this.usuariosService.insertUsuario(this.usuario).subscribe(
   res=> {
     console.log(res)
     this.formmodal.hide();
     this.listMonedas();
   },
   err => console.log(err)
 )
}

updateMoneda(){
  let idMon: any = this.activerouter.snapshot.paramMap.get('id')|| '{}';
  this.usuariosService.updateMoneda(idMon,this.monedas).subscribe(
    res=> {
      console.log(res)
      this.formmodal2.hide();
      this.listMonedas();
    },
    err => console.log(err)
  )

}

}





