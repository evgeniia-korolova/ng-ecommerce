import { Component, computed, inject, input, output } from '@angular/core';
import { Product } from '../../entities/models/product.interface';
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { EcommerceStore } from '../../entities/ecommerce-store/ecommerce-store';

@Component({
  selector: 'app-product-card',
  imports: [MatIcon, MatButton, MatIconButton],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
  
})
export class ProductCard {
  private store = inject(EcommerceStore)
  readonly product = input.required<Product>();
  addToCartClicked = output<Product>();

  isInWishlist = computed(() => this.store.whishlistItems().find((prod) => prod.id === this.product().id))

  toggleWishlist(product: Product) {
    if(this.isInWishlist()) {
      this.store.removefromWishlist(product)
    } else {
      this.store.addToWishlist(product)
    }
  }
}
