import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../components/entity/customer';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private urlEndPoint: string = 'http://localhost:8080/api/';
  private http = inject(HttpClient);
  private headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type' : 'application/json'
  });

  constructor() { }

  getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.urlEndPoint + 'customers');
  }

  createCustomer(customer: Customer): Observable<Customer>{    
    return this.http.post<Customer>(this.urlEndPoint + 'save', customer, {headers: this.headers});
  }
}
