import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../entity/customer';
import { CustomerService } from '../../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  private customerService = inject(CustomerService);
  private router = inject(Router);
  customer: Customer = new Customer();
  title: string = 'Create customer';

  createCustomer(): void{
    this.customerService.createCustomer(this.customer).subscribe(response => {
      this.router.navigate(['/customers']);
    })
  }
}
