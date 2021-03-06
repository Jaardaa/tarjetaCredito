import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import { TarjetaCredito } from 'src/app/models/TarjetaCredito';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css'],
})
export class CrearTarjetaComponent implements OnInit {
  forma: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private tarjetaSvc: TarjetaService, private toastr: ToastrService) {
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
        [Validators.required, Validators.minLength(3), Validators.maxLength(3)],
      ],
    });
  }

  ngOnInit(): void {}

  guardarTarjeta() {

    const tarjeta: TarjetaCredito = {
      titular: this.forma.value.titular,
      numTarjeta: this.forma.value.numTarjeta,
      fechaExp: this.forma.value.fechaExp,
      cvv: this.forma.value.cvv,
      fechaCreacion: new Date(),
      FechaActualizacion: new Date(),
    }
    this.loading = true;

    this.tarjetaSvc.guardarTarjeta(tarjeta).then(() => {

      this.loading = false;

      this.toastr.success('La tarjeta fue registrada!!', 'Tarjeta Registrada');

      console.log(tarjeta);
      this.forma.reset();
    }, err => {
      this.loading = false;
      this.toastr.error('Opss ocurrió un error', 'Error');
    })


  }

  get titular() {
    return (
      this.forma.get('titular')?.dirty &&
      this.forma.get('titular')?.touched &&
      this.forma.get('titular')?.valid
    );
  }

  get titularNoValido() {
    return (
      this.forma.get('titular')?.invalid && this.forma.get('titular')?.touched
    );
  }

  get numTarjeta() {
    return (
      this.forma.get('numTarjeta')?.dirty &&
      this.forma.get('numTarjeta')?.touched &&
      this.forma.get('numTarjeta')?.valid
    );
  }

  get numTarjetaNoValido() {
    return (
      this.forma.get('numTarjeta')?.invalid &&
      this.forma.get('numTarjeta')?.touched
    );
  }

  get fechaExp() {
    return (
      this.forma.get('fechaExp')?.dirty &&
      this.forma.get('fechaExp')?.touched &&
      this.forma.get('fechaExp')?.valid
    );
  }

  get fechaExpNoValido() {
    return (
      this.forma.get('fechaExp')?.invalid && this.forma.get('fechaExp')?.touched
    );
  }

  get cvv() {
    return (
      this.forma.get('cvv')?.dirty &&
      this.forma.get('cvv')?.touched &&
      this.forma.get('cvv')?.valid
    );
  }

  get cvvNoValido() {
    return (
      this.forma.get('cvv')?.invalid && this.forma.get('cvv')?.touched
    );
  }
}
