import { Routes } from '@angular/router';
import { CustomersComponent } from './components/customer/customers/customers.component';
import { FormComponent } from './components/customer/form/form.component';

export const routes: Routes = [
    { path: '', redirectTo: '/customers', pathMatch: 'full' },
    { path: 'customers', component: CustomersComponent },
    { path: 'customers/create', component: FormComponent },
];
