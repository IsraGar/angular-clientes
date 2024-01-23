import { Injectable } from '@angular/core';
import { CUSTOMERS } from '../components/customer/customers.json';
import { Customer } from '../components/entity/customer';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getClientes(): Observable<Customer[]>{
    return of(CUSTOMERS);
  }
}
