import { Routes } from '@angular/router';
import { CustomersComponent } from './components/customer/customers/customers.component';

export const routes: Routes = [
    { path: '', redirectTo: '/customers', pathMatch: 'full' },
    { path: 'customers', component: CustomersComponent },
];
