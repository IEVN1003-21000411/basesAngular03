import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  //styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  Nombre:string = '';
  CantidadCompradores:number = 1;
  Tarjeta:string = '';
  CantidadBoletos:number = 1;
  valorPagado:string = '';
  total:number = 0;
  costoBoletos:number = 12.000;

  mensaje:string = '';

  Procesar():void{
    if (this.CantidadCompradores <= 0 || this.CantidadBoletos <= 0) {
      alert('Las personas y los boletos deben ser mayor a 0');
      this.total = 0;
      return;
    }

    const limiteTotalBoletos = 7 * this.CantidadCompradores;

    if (this.CantidadBoletos > limiteTotalBoletos) {
      alert(`Por persona solo puede adquirir 7 boletos`);
      this.total = 0;
      return;
    }

    let totalBase = this.costoBoletos * this.CantidadBoletos;
    let descuento = 0;

    // Descuento por boletos
    if (this.CantidadBoletos > 5) {
      descuento += totalBase * 0.15;
    } else if (this.CantidadBoletos >= 3 && this.CantidadBoletos <= 5) {
      descuento += totalBase * 0.10;
    }

    // Subtotal después del descuento por boletos
    let subtotal = totalBase - descuento;

    // Descuento adicional por tarjeta (sobre el subtotal)
    if (this.Tarjeta === 'SI') {
      descuento += subtotal * 0.10;
    }

    this.total = totalBase - descuento;

    console.log("Total base:", totalBase);
    console.log("Descuento total:", descuento);
    console.log("Total a pagar:", this.total);
  }
}
