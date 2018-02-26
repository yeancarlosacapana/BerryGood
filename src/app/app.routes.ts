import {RouterModule, Routes} from '@angular/router';
import {CheckoutComponent} from './checkout/checkout.component';

const APP_ROUTES: Routes = [
  {path: 'productos', component: CheckoutComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/'}
];
export const routing = RouterModule.forRoot(APP_ROUTES);
