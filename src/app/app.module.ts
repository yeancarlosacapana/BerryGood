import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { CheckoutComponent } from './checkout/checkout.component';

import {ScrollToModule} from 'ng2-scroll-to-el';
import {AppRoute} from './app.routes';
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
    AppRoute,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
