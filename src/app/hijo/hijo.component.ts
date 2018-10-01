import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'componente-hijo',
  templateUrl: 'hijo.component.html'
})

export class HijoComponent {
  public title: string;

  //Datos que se reciben del padre a traves del decorador input
  @Input('texto1') propiedad_uno: string;
  @Input('texto2') propiedad_dos: string;

  //Funcion que transmite datos por un evento
  @Output() desde_el_hijo = new EventEmitter();

  constructor(){
    this.title = "Transmitir datos entre componentes";
  }

  ngOnInit(){
    console.log(this.propiedad_uno);
    console.log(this.propiedad_dos);
    //this.enviar();
  }

  //Funcion para llamar el decorador output desde el html
  //Lo puedes enviar automaticamente si mandas a llamar la funcion en el
  //la funcion en el ngOnInit
  enviar(event){
    this.desde_el_hijo.emit({
                              nombre: 'Joan Andoni',
                              apellidos: 'Gonzalez Rioz',
                              edad: '22'
                            });
  }
}
