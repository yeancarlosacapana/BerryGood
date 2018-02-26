import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { CheckoutComponent } from './checkout/checkout.component';

import {ScrollToModule} from 'ng2-scroll-to-el';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PromocionesComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
