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

  constructor(
    private _ropaService: RopaService
  ){}

  ngOnInit(){
    this.valorServicio = this._ropaService.prueba('Camizon');
  }
}
