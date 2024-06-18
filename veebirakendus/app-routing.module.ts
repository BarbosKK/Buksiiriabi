import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from 'C:\DEV\Buksiiriabi\veebirakendus\src\app\create-account\create-account.component.ts';
import { CreditCardPaymentComponent } from './credit-card-payment/credit-card-payment.component';

const routes: Routes = [
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'credit-card-payment', component: CreditCardPaymentComponent },
  { path: '', redirectTo: '/create-account', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }