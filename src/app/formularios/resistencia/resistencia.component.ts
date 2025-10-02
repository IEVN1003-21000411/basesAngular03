import { Component } from '@angular/core';
import { Resistencia } from './resistencia';

@Component({
  selector: 'app-resistencia',
  standalone: false,
  templateUrl: './resistencia.component.html',
  styleUrl: './resistencia.component.css'
})
export class ResistenciaComponent {
  colores: { nombre: string, hex: string }[] = [
  { nombre: 'Negro', hex: '#000000' },
  { nombre: 'Café', hex: '#8B4513' },
  { nombre: 'Rojo', hex: '#FF0000' },
  { nombre: 'Naranja', hex: '#FF8C00' },
  { nombre: 'Amarillo', hex: '#FFFF00' },
  { nombre: 'Verde', hex: '#008000' },
  { nombre: 'Azul', hex: '#0000FF' },
  { nombre: 'Violeta', hex: '#800080' },
  { nombre: 'Gris', hex: '#808080' },
  { nombre: 'Blanco', hex: '#FFFFFF' }
];
  coloresTolerancia: { nombre: string, hex: string }[] = [
  { nombre: 'Dorado 5%', hex: '#FFD700' },
  { nombre: 'Plata 10%', hex: '#C0C0C0' }
];
  resintencia: Resistencia = new Resistencia(0,0,0,0);//Inicializamos en 0 para que no se rompa el programa

  calculosDeResistencia(b1: number, b2: number, b3: number, b4: number):void {
    this.resintencia = new Resistencia(b1,b2,b3,b4);//Funcion que manda los valores que selecciona el usuario en el html a la calse
    this.resintencia.calular();//Se hace toda la matematica que contiene la clase
  }
  getMultiplier(i: number): number {
    return Math.pow(10, i);
  }
}
