import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers: [RopaService]
})

export class HomeComponent{
  public titulo = "Página principal";
  public valorServicio:string;
  public listado_ropa:Array<string>;
  public prenda_a_guardar:string;

  public fecha;
  public nombre;

  constructor(
    private _ropaService: RopaService
  ){
    this.fecha = new Date(2018, 7, 22);
    this.nombre  = 'JOAN andoni GonZaLEz RioZ';
  }

  ngOnInit(){
    this.valorServicio = this._ropaService.prueba('Camizon');
    this.listado_ropa = this._ropaService.getRopa();
  }

  agregarPrenda(){
    this._ropaService.addRopa(this.prenda_a_guardar);
    this.prenda_a_guardar = null;
  }

  eliminarPrenda(index:number){
    this._ropaService.deleteRopa(index);
    alert(index);
  }

}
