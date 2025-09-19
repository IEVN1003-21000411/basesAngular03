import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroFilterPipe } from './heroes/hero-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroFilterPipe
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
