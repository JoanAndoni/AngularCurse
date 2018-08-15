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
  }

  cambiarNombre(){
    this.nombre = 'Juan Lopéz';
  }

  cambiarEdad(edad){
    this.edad = edad;
  }

}
