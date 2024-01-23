import { Component, OnInit, inject } from '@angular/core';

import {CommonModule} from '@angular/common';
import { Customer } from '../../entity/customer';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit{
  
  customers: Customer[];
  private customerService = inject(CustomerService);

  ngOnInit(): void {
    this.customerService.getClientes().subscribe(
      data => this.customers = data
      );
  }
}