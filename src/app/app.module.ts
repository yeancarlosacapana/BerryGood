import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { CheckoutComponent } from './checkout/checkout.component';

import {ScrollToModule} from 'ng2-scroll-to-el';
import {routing} from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PromocionesComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
