import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../components/entity/customer';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private urlEndPoint: string = 'http://localhost:8080/api/customers';
  private http = inject(HttpClient);

  constructor() { }

  getClientes(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.urlEndPoint);
  }
}
