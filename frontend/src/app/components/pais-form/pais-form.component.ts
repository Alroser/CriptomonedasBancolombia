import { Component, OnInit } from '@angular/core';
import { PaisesService} from '../../services/paises.service';

@Component({
  selector: 'app-pais-form',
  templateUrl: './pais-form.component.html',
  styleUrls: ['./pais-form.component.css']
})
export class PaisFormComponent implements OnInit {

  paises: any = [];

  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {
   
    
    this.paisesService.getMonedaPaisUser(this.getUser()).subscribe(
      res => {
            this.paises = res;  
             console.log(res) ;
             this.getUser();
      },
      err => console.log(err)
    );
  }

  getUser() {
    
    let usuarios = parseInt(localStorage.getItem('id_usuario')|| '{}');
    return usuarios;

  }

}
