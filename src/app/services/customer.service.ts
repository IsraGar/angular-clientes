import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../components/entity/customer';
import { Observable, map, catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private urlEndPoint: string = 'http://localhost:8080/api/customers/';
  private http = inject(HttpClient);
  private router = inject(Router);
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor() { }

  getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.urlEndPoint}list`);
  }  

  getCustomer(id: number): Observable<Customer>{
    return this.http.get<Customer>(`${this.urlEndPoint}list/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/customers']);
        console.log(e.error.message);        
        Swal.fire({
          title: 'Invalid Id Customer',
          text: e.error.message,
          icon: 'error',
          confirmButtonText: 'OK'
        });
        return throwError(e);
      })
    );
  }

  createCustomer(customer: Customer): Observable<Customer>{    
    return this.http.post<Customer>(`${this.urlEndPoint}create`, customer, {headers: this.httpHeaders}).pipe(
      catchError(e => {

        if(e.status == 400){
          return throwError(e);
        }

        console.log(e.error.message);        
        Swal.fire({
          title: e.error.message,
          text: e.error.error,
          icon: 'error',
          confirmButtonText: 'OK'
        });
        return throwError(e);
      })
    );
  }

  updateCustomer(customer: Customer): Observable<Customer>{
    return this.http.put<Customer>(`${this.urlEndPoint}update/${customer.id}`, customer, {headers: this.httpHeaders}).pipe(
      catchError(e => {

        if(e.status == 400){
          return throwError(e);
        }

        console.log(e.error.message);        
        Swal.fire({
          title: e.error.message,
          text: e.error.error,
          icon: 'error',
          confirmButtonText: 'OK'
        });
        return throwError(e);
      })
    );
  }

  deleteCustomer(id: number): Observable<Customer>{
    return this.http.delete<Customer>(`${this.urlEndPoint}delete/${id}`, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.log(e.error.message);        
        Swal.fire({
          title: e.error.message,
          text: e.error.error,
          icon: 'error',
          confirmButtonText: 'OK'
        });
        return throwError(e);
      })
    );
  }
}
