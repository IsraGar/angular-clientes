import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../entity/customer';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  customer: Customer = new Customer();
  title: string = 'Create customer';
  create(): void{
    console.log('Click this button');
    console.log(this.customer);    
  }
}
