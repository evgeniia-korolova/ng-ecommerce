import { Component, inject } from '@angular/core';
import { BackButton } from "../../shared/ui/back-button/back-button";
import { ShippingForm } from "./shipping-form/shipping-form";
import { PaymentForm } from "./payment-form/payment-form";
import { SummarizeOrder } from "../../features/summarize-order/summarize-order";
import { EcommerceStore } from '../../entities/ecommerce-store/ecommerce-store';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-checkout',
  imports: [BackButton, ShippingForm, PaymentForm, SummarizeOrder, MatButton],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss',
})
export default class Checkout {
  protected store = inject(EcommerceStore)
}
