export class Resistencia {
  Banda1:number = 0;
  Banda2:number = 0;
  Banda3Multiplicador:number = 0;
  Banda4Tolerancia:number = 0;


  ValorMax:number = 0;
  ValorMin:number = 0;

  tolerancia:number = 0;

  valor:number = 0;

  constructor(b1: number, b2: number, b3: number, b4: number){//va resibir los valores de las bandas y los asigna a los valor que estoy decarado en la clase
    this.Banda1 = b1
    this.Banda2 = b2
    this.Banda3Multiplicador = b3
    this.Banda4Tolerancia = b4
  }
  calular():void{
    const BandaunoAndDos = (this.Banda1 * 10 + this.Banda2);
    const BandaMultiplicadora = Math.pow(10 , this.Banda3Multiplicador);
    const Resultado = BandaunoAndDos * BandaMultiplicadora;

    this.valor = BandaunoAndDos * BandaMultiplicadora;//valor de la resistencia por posicion
    this.tolerancia = this.Banda4Tolerancia === 0 ? 0.05 : 0.10;

    this.ValorMax = Resultado * (1 + this.tolerancia);
    this.ValorMin = Resultado * (1 - this.tolerancia);
  }
}
