import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {CommonModule} from '@angular/common';
import { Customer } from '../../entity/customer';
import { CustomerService } from '../../../services/customer.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit{
  
  customers: Customer[];
  private customerService = inject(CustomerService);
  private router = inject(Router);

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe(
      data => this.customers = data
    );
  }

  deleteCustomer(customer: Customer): void {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm"
    }).then((result) => {
      if (result.isConfirmed) {
        this.customerService.deleteCustomer(customer.id).subscribe(
          response => {
            Swal.fire({
              title: "Deleted!",
              text: `Customer: ${customer.name} ${customer.lastname} has been deleted.`,
              icon: "success"
            });
            this.getCustomers();
          }
        )

      }
    })
  }

}