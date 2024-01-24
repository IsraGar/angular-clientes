import { Routes } from '@angular/router';
import { CustomersComponent } from './components/customer/customers/customers.component';
import { FormComponent } from './components/customer/form/form.component';
import { HomeComponent } from './components/shared/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/customers', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'customers/create', component: FormComponent },
    { path: 'customers/create/:id', component: FormComponent },
];