import { Component, computed, inject, input } from '@angular/core';
import { EcommerceStore } from '../../entities/ecommerce-store/ecommerce-store';
import { BackButton } from "../../shared/ui/back-button/back-button";
import { ProductInfo } from "./product-info/product-info";

@Component({
  selector: 'app-view-product-details',
  imports: [BackButton, ProductInfo],
  templateUrl: './view-product-details.html',
  styleUrl: './view-product-details.scss',
})
export default class ViewProductDetails {
  productId = input.required<string>()
  store = inject(EcommerceStore)

  constructor() {
    this.store.setProductId(this.productId)
  }

  backRoute = computed(() => `/products/${this.store.category()}`)

  readonly imageBaseUrl = 'https://images.unsplash.com';
}
