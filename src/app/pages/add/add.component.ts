import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  bloquesParaAgregar : boolean = false;
  items: InputItem[] = [];
  cantidad: number = 0;
  cards2 = [];
  cards : any = [{
    titulo: '', descripcion: ''
  }];
  /* cards = [
    {titulo: 'Transaccion 1', descripcion: 'Esta es la descripción de la Transaccion 1'},
    {titulo: 'Transaccion 2', descripcion: 'Esta es la descripción de la Transaccion 2'},
    {titulo: 'Transaccion 3', descripcion: 'Esta es la descripción de la Transaccion 3'},
    {titulo: 'Transaccion 4', descripcion: 'Esta es la descripción de la Transaccion 4'},
    {titulo: 'Transaccion 5', descripcion: 'Esta es la descripción de la Transaccion 5'},
    {titulo: 'Transaccion 6', descripcion: 'Esta es la descripción de la Transaccion 6'},
    {titulo: 'Transaccion 7', descripcion: 'Esta es la descripción de la Transaccion 7'},
    {titulo: 'Transaccion 8', descripcion: 'Esta es la descripción de la Transaccion 8'},
    {titulo: 'Transaccion 9', descripcion: 'Esta es la descripción de la Transaccion 9'},
    {titulo: 'Transaccion 10', descripcion: 'Esta es la descripción de la Transaccion 10'}]; */

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {}


  regresar(){
    this.router.navigate(['home']);
  }
  crearBloques(){
    console.log("Creando Bloque" , this.items);
    this.bloquesParaAgregar = true;
  }
  volver(){
    this.bloquesParaAgregar = false;
  }

  save() {
    let inputItem = new InputItem("","","");
    this.cantidad ++;
    inputItem.text = this.items.map(item => item.text).join(", ");
    inputItem.emisor = this.items.map(item =>  item.emisor).join(", ");
    inputItem.receptor = this.items.map(item => item.receptor).join(", ");
    this.items.push(inputItem);
    inputItem.text = "";
    inputItem.emisor = "";
    inputItem.receptor = "";
    console.log(this.items);

  }





}
