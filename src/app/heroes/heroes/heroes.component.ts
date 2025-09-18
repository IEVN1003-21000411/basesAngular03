import { Component } from '@angular/core';
import { race } from 'rxjs';

@Component({
  selector: 'app-heroes',
  standalone: false,
  templateUrl: './heroes.component.html',
})
export class HeroesComponent {

  imagenWidth:number = 40;
  imagenMargin:number = 2;
  muestraImage:boolean = true;
  listFilter:string = '';

  showImage():void{
    this.muestraImage =!this.muestraImage;
  }

  heroes:any[]=[
    {
      Image: "https://dragonball-api.com/characters/picolo_normal.webp",
      nombre: "Picoro",
      Descripcion:"Mankacosa po",
      race:"Namekiano",
      ki:2.000
    },
    {
      Image:"https://dragonball-api.com/characters/Freezer.webp",
      nombre:"Freezer",
      Descripcion:"Power ball",
      race:"Alien",
      ki:530.000
    },
    {
      Image:"https://dragonball-api.com/transformaciones/Gotenks_SSJ3.webp",
      nombre:"Gotenks",
      Descripcion:"Fantamas",
      race:"Human",
      ki:65.600
    },
        {
      Image:"https://dragonball-api.com/characters/Bardock_Artwork.webp",
      nombre:"Bardock",
      Descripcion:"Kame kame ha",
      race:"Sayagin",
      ki:450.000
    }
  ]
}
