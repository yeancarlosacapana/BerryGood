import {RouterModule, Routes} from '@angular/router';
import {CheckoutComponent} from './checkout/checkout.component';
import {PromocionesComponent} from './promociones/promociones.component';
import {HomeComponent} from './home/home.component';
import {NgModule} from '@angular/core';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },

  { path: '**', pathMatch: 'full', redirectTo: '/'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoute { }
