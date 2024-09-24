import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: "customer", component: CustomerComponent},
  {
    path:"", redirectTo : "/customer", pathMatch : "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
