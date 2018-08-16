import { Injectable } from '@angular/core';

@Injectable()
export class RopaService{
  public nombre_prenda = 'Pantalones';

  prueba(nombre_prenda){
    return nombre_prenda;
  }
}
