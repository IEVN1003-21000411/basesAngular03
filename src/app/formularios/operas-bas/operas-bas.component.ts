import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {
  num1:string = '';
  num2:string = '';
  resultado:number=0;

  seleccion:string = 'sumar'

  CalcularOperacion():void{
    const n1 = parseInt(this.num1);
    const n2 = parseInt(this.num2);

    if(isNaN(n1) || isNaN(n2)){
      alert('Por favor, ingrese un numero valido en ambos campos');
      this.resultado = 0;
      return
    }
    if(this.seleccion === 'sumar'){
      this.resultado = n1 + n2;
    }else if(this.seleccion === 'restar'){
      this.resultado = n1 - n2;
    }else if(this.seleccion === 'multiplicar'){
      this.resultado = n1 * n2;
    }else if(this.seleccion === 'dividir'){
      if(n2 !== 0){
          this.resultado = n1 / n2;
      }else{
        alert('No se puede dividir por 0');
        this.resultado = NaN;
      }
    }
  }
}
