import { Component } from '@angular/core';

@Component({
  selector: 'plantillas',
  templateUrl: './plantillas.component.html'
})

export class PlantillasComponent{
  public titulo;
  public administrador;

  //Datos a transmitir al hijo
  public dato_externo = "Hey, que tal?";
  public identity = {
    id: 1,
    web: 'uImprove.co',
    tematica: 'Desarrollo web'
  };

  constructor(){
    this.titulo = "Plantillas ngTemplate en Angular";
    this.administrador = true;
  }

  ngOnInit(){}

  cambiar(value){
    this.administrador = value;
  }

  public datos_del_hijo;

  //Recibir datos por un evento desde el hijo por un evento
  recibirDatos(event){
    console.log(event);
    this.datos_del_hijo = event;
  }

}
