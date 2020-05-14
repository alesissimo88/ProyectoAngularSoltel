import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';

@Component({
  selector: 'app-alumnoreact',
  templateUrl: './alumnoreact.component.html',
  styleUrls: ['./alumnoreact.component.css']
})
export class AlumnoreactComponent implements OnInit {

  forma: FormGroup;

  constructor( private fb: FormBuilder, private validadores: ValidadoresService) { 

    this.crearFormulario();
    //this.cargarDataAlFormulario();

  }

  ngOnInit() {
  }

  // Métodos get para mostrar las validaciones de cada campo
  get nombreNoValido() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched
  }

  get apellidoNoValido() {
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched
  }

  get correoNoValido() {
    return this.forma.get('correo').invalid && this.forma.get('correo').touched
  }


  get usuarioNoValido() {
    return this.forma.get('usuario').invalid && this.forma.get('usuario').touched
  }

  get direccionNoValido() {
    return this.forma.get('direccion').invalid && this.forma.get('direccion').touched
  }

  get telefonoNoValido() {
    return this.forma.get('telefono').invalid && this.forma.get('telefono').touched
  }

  get ciudadNoValido() {
    return this.forma.get('ciudad').invalid && this.forma.get('ciudad').touched
  }

  get cursoNoValido() {
    return this.forma.get('curso').invalid && this.forma.get('curso').touched
  }

  get solicitudNoValido() {
    return this.forma.get('solicitud').invalid && this.forma.get('solicitud').touched
  }

  

  crearFormulario(){

    this.forma = this.fb.group({ 
        nombre: ['', Validators.required ],
        apellido: ['', Validators.required ],
        correo: ['', Validators.required ],
        direccion: ['', Validators.required],
        telefono: ['', Validators.required],
        ciudad: [''],
        curso: ['', Validators.required],
        solicitud: ['', Validators.required],
      },{
     });

  }


  guardar(){
    console.log(this.forma);

    if (this.forma.invalid){

      return Object.values(this.forma.controls).forEach(control => {

        if ( control instanceof FormGroup ) {
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });

    }


    // Posteo de información
    this.forma.reset();


  }

}

