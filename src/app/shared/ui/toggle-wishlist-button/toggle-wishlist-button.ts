import { Component, computed, inject, input } from '@angular/core';
import { EcommerceStore } from '../../../entities/ecommerce-store/ecommerce-store';
import { Product } from '../../../entities/models/product.interface';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-toggle-wishlist-button',
  imports: [MatIcon, MatIconButton],
  templateUrl: './toggle-wishlist-button.html',
  styleUrl: './toggle-wishlist-button.scss',
})
export class ToggleWishlistButton {
  private store = inject(EcommerceStore)
  readonly product = input.required<Product>();

  isInWishlist = computed(() => this.store.whishlistItems().find((prod) => prod.id === this.product().id))

  toggleWishlist(product: Product) {
    if(this.isInWishlist()) {
      this.store.removefromWishlist(product)
    } else {
      this.store.addToWishlist(product)
    }
  }

}
