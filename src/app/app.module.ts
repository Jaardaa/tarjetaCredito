import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrearTarjetaComponent } from './components/crear-tarjeta/crear-tarjeta.component';
import { ListaTarjetaComponent } from './components/lista-tarjeta/lista-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearTarjetaComponent,
    ListaTarjetaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
