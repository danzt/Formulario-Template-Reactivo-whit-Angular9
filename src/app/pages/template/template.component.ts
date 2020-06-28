import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService} from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    pais: '',
    genero: 'M'
  };

  paises: any [] = [];

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {

    this.paises = this.paisService.getPaises();

    this.paises.unshift({
      nombre: 'Seleccione un Pais',
      codigo: ''
    });
  }

  save( Ftemplate: NgForm ){
    console.log( Ftemplate );

    if (Ftemplate.invalid) {

      Object.values( Ftemplate.controls ).forEach( control => {
        control.markAsTouched();
      });
      return;
    }
    console.log(Ftemplate.value);
  }
}
