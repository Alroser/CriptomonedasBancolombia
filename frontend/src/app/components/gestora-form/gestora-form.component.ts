import { Component, OnInit } from '@angular/core';
import { GestorasService} from '../../services/gestoras.service';

@Component({
  selector: 'app-gestora-form',
  templateUrl: './gestora-form.component.html',
  styleUrls: ['./gestora-form.component.css']
})
export class GestoraFormComponent implements OnInit {

  gestoras: any = [];

  constructor(private gestorasService: GestorasService) { }

  ngOnInit(): void {
    this.gestorasService.getGestorasPaisUser(this.getUser()).subscribe(
      res => {
            this.gestoras = res;  
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
