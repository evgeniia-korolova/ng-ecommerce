import { Component, computed, inject, input } from '@angular/core';
import { CartItem } from '../../entities/models/cartItem.type';
import { QtySelector } from '../qty-selector/qty-selector';
import { MatButtonModule } from "@angular/material/button";
import { MatIcon } from '@angular/material/icon';
import { EcommerceStore } from '../../entities/ecommerce-store/ecommerce-store';


@Component({
  selector: 'app-show-cart-item',
  imports: [QtySelector, MatButtonModule, MatIcon],
  templateUrl: './show-cart-item.html',
  styleUrl: './show-cart-item.scss',
})
export class ShowCartItem {
 readonly item = input.required<CartItem>();
 protected imageBaseUrl = 'https://images.unsplash.com';
 protected total = computed(() => (this.item().product.price * this.item().quantity).toFixed(2))
 protected store = inject(EcommerceStore)
}
