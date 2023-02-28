import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlocksService } from 'src/app/services/blocks.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {
  verDetalleVar : boolean = false;
  blockes : any;
  info = [{
        "cantidad": "8",
        "tipo_informacion": "mensaje",
        "algo": "gaaa",
    }
  ]
  detalleData = [
    {
        "hash": "234123rfdvsf234123",
        "prevHash": "234123rfdvsf234123",
        "nonce" : "0000bdasfasd",
        "transacciones" : [
          {"emisor": "Wanly", "receptor": "Juan" , "mensaje": "Hola escondigo" }
        ]

    },
    {

      "hash": "234123rfdvsf234123",
      "prevHash": "234123rfdvsf234123",
      "nonce" : "0000bdasfasd",
      "transacciones" : [
        {"emisor": "Juan", "receptor": "Juan" , "mensaje": "Hola escondigo" }
      ]
    },
    {

      "hash": "234123rfdvsf234123",
      "prevHash": "234123rfdvsf234123",
      "nonce" : "0000bdasfasd",
      "transacciones" : [
        {"emisor": "Juan", "receptor": "Wanly" , "mensaje": "Hola escondigo" },
        {"emisor": "Juan", "receptor": "Wanly" , "mensaje": "Hola escondigo" }
      ]
    },
    {
      "hash": "234123rfdvsf234123",
      "prevHash": "234123rfdvsf234123",
      "nonce" : "0000bdasfasd",
      "transacciones" : [
        {"emisor": "Wanly", "receptor": "Wanly" , "mensaje": "Hola escondigo" },
        {"emisor": "Wanly", "receptor": "Wanly" , "mensaje": "Hola escondigo" },
        {"emisor": "Wanly", "receptor": "Wanly" , "mensaje": "Hola escondigo" },
        {"emisor": "Wanly", "receptor": "Wanly" , "mensaje": "Hola escondigo" }
      ]
    }
  ]
  elegido =  {
    "hash": "",
    "prevHash": "",
    "nonce" : "",
    "transacciones" : [
      {"emisor": "", "receptor": "" , "mensaje": "" }
    ]
  }

  constructor(
    private router:Router,
    public block: BlocksService,
  ) { }


  ngOnInit() {
    this.getAllBlocks();
  }

   regresar(){
    this.router.navigate(['home']);
  }

  volver(){
    this.verDetalleVar = false;
  }

  verDetalle(value : any){
    this.elegido = value;
    this.verDetalleVar = true;
  }

  getAllBlocks(){
    // Obtener documtos
    this.block.getComments().subscribe(data => {
      this.blockes = data;
      console.log(this.blockes);
    });
  }
}
