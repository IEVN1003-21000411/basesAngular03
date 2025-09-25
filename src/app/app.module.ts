import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroFilterPipe } from './heroes/hero-filter.pipe';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { CinepolisComponent } from './formularios/cinepolis/cinepolis.component';
import { ResistenciaComponent } from './formularios/resistencia/resistencia.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroFilterPipe,
    OperasBasComponent,
    CinepolisComponent,
    ResistenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
