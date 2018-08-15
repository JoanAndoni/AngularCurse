import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
=======

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
>>>>>>> ec0a7186e163a527bd0c88a8846eba0d42be0989
  ],
  providers: [],
  bootstrap: [AppComponent]
})
<<<<<<< HEAD

=======
>>>>>>> ec0a7186e163a527bd0c88a8846eba0d42be0989
export class AppModule { }
