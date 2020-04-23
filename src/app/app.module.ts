import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BienestarComponent } from './bienestar/bienestar.component';
import { DetallebienestarComponent } from './detallebienestar/detallebienestar.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BienestarComponent,
    DetallebienestarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
