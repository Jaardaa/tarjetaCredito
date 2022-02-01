import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent implements OnInit {
  forma: FormGroup;

  constructor(private fb: FormBuilder) {
    this.forma = this.fb.group({
      titular: ['', Validators.required],
      numTarjeta: [
        '',
        [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16),
        ],
      ],
      fechaExp: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(5)],
      ],
      cvv: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(3),
        ],
      ],
    });
  }

  ngOnInit(): void {
  }

  guardarTarjeta() {
    console.log(this.forma.value);
  }
}
