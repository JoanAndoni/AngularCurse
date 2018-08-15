import { Component } from '@angular/core';
import { Empleado } from './empleado';
@Component({
  selector: 'empleado-tag',
  templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{
  title = 'Componente Empleado';
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public trabajador_externo:boolean;
  public color:string;
  public color_seleccionado:string;

  constructor(){
    this.empleado = new Empleado('David Lopéz', 45, 'Cocinero', true);
    this.trabajadores = [
      new Empleado('Manolo Martinez', 35, 'Administrativo', false),
      new Empleado('Ana Lopéz', 21, 'Cocinero', true),
      new Empleado('Joan Andoni', 22, 'Programador', false)
    ];
    this.trabajador_externo = false;
    this.color = 'green';
    this.color_seleccionado = '#ccc';
  }

  ngOnInit(){
    console.log(this.empleado);
    console.log(this.trabajadores);
  }

  cambiarExterno(valor){
    this.trabajador_externo = valor;
  }

  logColorSeleccionado(){
    console.log(this.color_seleccionado);
  }

}
