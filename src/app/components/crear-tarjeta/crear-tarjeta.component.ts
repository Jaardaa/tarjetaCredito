import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent implements OnInit {
  forma: FormGroup;

  constructor(private fb: FormBuilder) {
    this.forma = this.fb.group({
      titular: [''],
      numTarjeta: [''],
      fechaExp: [''],
      cvv:[''],
    })
  }

  ngOnInit(): void {
  }

  guardarTarjeta() {
    console.log(this.forma.value);
  }
}
