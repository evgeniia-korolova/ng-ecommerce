import { Component, computed, inject } from '@angular/core';
import { ViewPanel } from '../../shared/directives/view-panel';
import { EcommerceStore } from '../../entities/ecommerce-store/ecommerce-store';

@Component({
  selector: 'app-summarize-order',
  imports: [ViewPanel],
  templateUrl: './summarize-order.html',
  styleUrl: './summarize-order.scss',
})
export class SummarizeOrder {
  protected store = inject(EcommerceStore);
  protected subtotal = computed(() =>
    Math.round(this.store.cartItems().reduce((acc, item) => acc + item.product.price * item.quantity, 0))
  );

  protected tax = computed(() => Math.round(0.05 * this.subtotal()))

  protected total = computed(() => this.subtotal() + this.tax())
}
