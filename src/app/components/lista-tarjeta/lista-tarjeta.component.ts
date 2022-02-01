import { Component, OnInit } from '@angular/core';
import { TarjetaCredito } from 'src/app/models/TarjetaCredito';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-lista-tarjeta',
  templateUrl: './lista-tarjeta.component.html',
  styleUrls: ['./lista-tarjeta.component.css']
})
export class ListaTarjetaComponent implements OnInit {

  listarTarjetas: TarjetaCredito[]=[];
  constructor(private tarjetaSvc:TarjetaService) { }

  ngOnInit(): void {
    this.obtenerTarjeta();
  }

  obtenerTarjeta() {
    this.tarjetaSvc.obtenerTarjeta().subscribe(res => {
      this.listarTarjetas = [];
      res.forEach((element: any) => {
        this.listarTarjetas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
    })
  }
}
