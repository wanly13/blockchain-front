import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
class InputItem {
  text: string;
  emisor: string;
  receptor: string;
  constructor(emisor: string,receptor: string,text: string) {
    this.text = text;
    this.emisor = emisor;
    this.receptor = receptor;
  }
}
@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss'],
})
export class GenerateComponent implements OnInit {
  items: InputItem[] = [];

  save() {
    let inputItem = new InputItem("","","");
    inputItem.text = this.items.map(item => item.text).join(", ");
    inputItem.emisor = this.items.map(item =>  item.emisor).join(", ");
    inputItem.receptor = this.items.map(item => item.receptor).join(", ");
    this.items.push(inputItem);
    inputItem.text = "";
    inputItem.emisor = "";
    inputItem.receptor = "";
    console.log(this.items);

  }

  constructor(
    public router: Router,
    ) { }

  ngOnInit(

  ) {}

  regresar(){
    this.router.navigate(['/home']);
  }



  crearBloque(){
    console.log("Creando Bloque" , this.items);

  }
}
