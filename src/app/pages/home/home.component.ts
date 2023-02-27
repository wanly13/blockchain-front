import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {


  // Para el Menu
  show : boolean = false;
  // Informacion del Usuario
  dataPacientes : any = [];
  idUser : any ;


  constructor(
    public router: Router,
    //private UserService : UserService,
    //private modalCtrl: ModalController
    ) {
      this.show = false;
     }

  ngOnInit() {
  }


  goToSearch(){
    console.log('ir a resultados de laboratorio');
    this.show = false;
    this.router.navigate(['/search'])
  }



  goToAdd(){
    console.log('ir a recetas');
    this.show = false;
    this.router.navigate(['/add']);
  }

  goToShow(){

    this.show = false;
    this.router.navigate(['/show']);
  }

  goToContact(){
    console.log('ir a contacto');
    this.show = false;
    this.router.navigate(['/generate']);
  }
  goToEdit(){
    console.log('ir a contacto');
    this.show = false;
    this.router.navigate(['/edit']);
  }
  modificarDatos(){
    this.show = false;
    //this.router.navigate(['modified']);
  }
  showMenu(){
    this.show = true;
  }
  QuitMenu(){
    this.show = false;
  }




}
