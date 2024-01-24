import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../components/entity/customer';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private urlEndPoint: string = 'http://localhost:8080/api/customers/';
  private http = inject(HttpClient);
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor() { }

  getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.urlEndPoint}list`);
  }

  createCustomer(customer: Customer): Observable<Customer>{    
    return this.http.post<Customer>(`${this.urlEndPoint}create`, customer, {headers: this.httpHeaders});
  }

  getCustomer(id: number): Observable<Customer>{
    return this.http.get<Customer>(`${this.urlEndPoint}list/${id}`);
  }

  updateCustomer(customer: Customer): Observable<Customer>{
    return this.http.put<Customer>(`${this.urlEndPoint}update/${customer.id}`, customer, {headers: this.httpHeaders});
  }

  deleteCustomer(id: number): Observable<Customer>{
    return this.http.delete<Customer>(`${this.urlEndPoint}delete/${id}`, {headers: this.httpHeaders})
  }
}
