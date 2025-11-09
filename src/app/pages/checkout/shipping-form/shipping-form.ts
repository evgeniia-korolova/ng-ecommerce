import { Component, inject } from '@angular/core';
import { ViewPanel } from "../../../shared/directives/view-panel";
import { MatIcon } from "@angular/material/icon";
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-shipping-form',
  imports: [ViewPanel, MatIcon, ReactiveFormsModule,
    MatFormFieldModule,    
    MatInputModule,
    MatButtonModule,],
  templateUrl: './shipping-form.html',
  styleUrl: './shipping-form.scss',
})
export class ShippingForm {
protected fb = inject(NonNullableFormBuilder)

protected shippingForm = this.fb.group({
  firstName: ['', Validators.required],
  lastName: ['', Validators.required],
  address: ['', Validators.required],
  city: ['', Validators.required],
  state: ['', Validators.required],
  zip: ['', Validators.required],

})
}
