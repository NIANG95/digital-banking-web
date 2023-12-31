import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { CustomerAccountsComponent } from './customer-accounts/customer-accounts.component';
import { CustomersComponent } from './customers/customers.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';

const routes: Routes = [
  { path : "customers", component : CustomersComponent },
  { path : "", component : CustomersComponent },
  // { path: "", redirectTo: "/customers", pathMatch: "full" },
  { path : "accounts", component : AccountsComponent },
  { path : "new-customer", component : NewCustomerComponent },
  { path : "customer-accounts/:id", component : CustomerAccountsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
