import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html'
})

export class ContactoComponent{
  public titulo = "Página de contacto";
  public parametro;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit(){
    this._route.params.forEach((params: Params) =>{
      this.parametro = params['variable'];
    });
  }

  redirigir(){
    this._router.navigate(['/contacto','JoanAndoni'])
  }

  redirigirTwo(){
    this._router.navigate(['/home']);
  }

}
