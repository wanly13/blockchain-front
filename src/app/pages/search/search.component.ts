import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchEspecialidad : any;
  boolEncontrado : boolean = false;
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

}
