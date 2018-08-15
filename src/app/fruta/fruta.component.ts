import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html'
})

export class FrutaComponent{
  title = 'Componente Fruta';
  public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

  public nombre:string;
  public edad:number;
  public mayorDeEdad:boolean;
  public trabajos:Array<any> = ['Carpintero', 44,'Fontanero'];
  comodin:any;

  constructor(){
    this.nombre = 'Joan Andoni';
    this.edad = 22;
    this.mayorDeEdad = true;
    this.comodin = "SI";
  }

  ngOnInit(){
    this.cambiarNombre();
    this.cambiarEdad(28);
    console.log(this.nombre + " " + this.edad);

    //Variables y alcance
    var uno = 8;
    var dos = 88;

    if(uno == 8){
      let uno = 3;
      var dos = 88;

      console.log("DENTRO DEL IF: "+uno+" "+dos);
    }
    console.log("FUERA DEL IF: "+uno+" "+dos);
  }

  cambiarNombre(){
    this.nombre = 'Juan Lopéz';
  }

  cambiarEdad(edad){
    this.edad = edad;
  }

}
