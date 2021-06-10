import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then( usuarios => {
      console.log( usuarios );
    })


    // const promesa = new Promise( ( resolve, reject ) => {

    //   if( false ){
    //     resolve('Hola DavidMessi');
    //   }else{
    //     reject('Algo salio Mal');
    //   }

    // });



    // promesa.then( resp => {
    //   console.log('Ya termine');
    // })
    // .catch( err => {
    //   console.log('Error en mi Promesa', err);
    // });

    // console.log('Fin del Init');

  }




  getUsuarios() {

   return new Promise( ( resolve, reject ) => {

      fetch('https://reqres.in/api/users?page=2')
        .then( resp => resp.json() )
        .then( body => resolve( body.data ) )

    });

  }




}
