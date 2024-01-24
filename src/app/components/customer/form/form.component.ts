import { Component, OnInit, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../entity/customer';
import { CustomerService } from '../../../services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  private customerService = inject(CustomerService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  customer: Customer = new Customer();
  title: string = 'Create customer';
  id: number;

  ngOnInit(): void {
    this.getCustomer();     
  }

  createCustomer(): void{    
    this.customerService.createCustomer(this.customer).subscribe(response => {
      if (response) {
        Swal.fire({
          title: 'Success!',
          text: `Customer ${this.customer.name} created`,
          icon: 'success',
          confirmButtonText: 'OK'
        });
        this.router.navigate(['/customers']);
      }      
    })
  }

  getCustomer(): void{
    this.activatedRoute.params.subscribe(params => {
      this.id = params["id"];
      if(this.id){
        this.customerService.getCustomer(this.id).subscribe(customer => this.customer = customer);
      }
    });
  }

  updateCustomer(): void{
    this.customerService.updateCustomer(this.customer).subscribe(customer => {
      Swal.fire({
        title: 'Success!',
        text: `Customer ${this.customer.name} edited`,
        icon: 'success',
        confirmButtonText: 'OK'
      });
      this.router.navigate(['/customers']);
    });
  }

}
