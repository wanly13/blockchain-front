import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  emisor : any = '';
  receptor : any = '';
  text : any = '';
  searchEspecialidad : any;
  boolEncontrado : boolean = false;
  boolModificar: boolean = false;
  Encontrado = [{
        "hash": "234123rfdvsf234123",
        "prevHash": "234123rfdvsf234123",
        "nonce" : "0000bdasfasd",
        "transacciones" : [
          {"emisor": "Wanly", "receptor": "Juan" , "mensaje": "Hola escondigo" }
        ]

    }]
  constructor(
    private router:Router,
  ) { }

  ngOnInit() {}
  regresar(){
    this.router.navigate(['home']);
  }

  buscar(){
    console.log("Vamos a buscar" ,this.searchEspecialidad );
    this.boolEncontrado = true;
  }

  modificar(){
    this.boolModificar = true;
  }
  cancelModificar(){
    this.boolModificar = false;
  }



  modified(){
    console.log("Modificar");
    const aModificar = [{
        "hash": "234123rfdvsf234123",
        "prevHash": "234123rfdvsf234123",
        "transacciones" : [
          {"emisor": this.emisor, "receptor": this.receptor , "mensaje": this.text }
        ]
    }]
    console.log("A Modificar: ", aModificar);

  }
}
