import { Injectable } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';


interface ErrorValidate {
  // Regresa cualquier cantidad de llaves, siendo su valor boolean.
  [s:string]: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  existeUsuario( control: FormControl ): Promise <ErrorValidate> | Observable <ErrorValidate> {

    if ( !control.value ){
      return Promise.resolve(null);
    }


   //Defino promesa
   return new Promise( (resolve, reject) =>{

    setTimeout(() => {

      if ( control.value === 'strider' ){
        resolve({ existe: true }); 
      } else {
        resolve( null );
      }

    }, 3500);

   });

  }

  passwordsIguales( pass1Name: string, pass2Name: string ){

    return ( formGroup: FormGroup ) => {

      const pass1Control = formGroup.controls[pass1Name];
      const pass2Control = formGroup.controls[pass2Name];

      if ( pass1Control.value === pass2Control.value){
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noEsIgual: true });
      }


    }

  }

}
