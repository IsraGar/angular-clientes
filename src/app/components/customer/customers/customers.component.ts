import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {CommonModule} from '@angular/common';
import { Customer } from '../../entity/customer';
import { CustomerService } from '../../../services/customer.service';

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

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(
      data => this.customers = data
      );
  }
}