import { Component, inject, input, signal } from '@angular/core';
import { Product } from '../../../entities/models/product.interface';
import { TitleCasePipe } from '@angular/common';
import { StockStatus } from "../stock-status/stock-status";
import { QtySelector } from "../../../widgets/qty-selector/qty-selector";
import { EcommerceStore } from '../../../entities/ecommerce-store/ecommerce-store';
import { MatIcon } from "@angular/material/icon";
import { ToggleWishlistButton } from "../../../shared/ui/toggle-wishlist-button/toggle-wishlist-button";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-product-info',
  imports: [TitleCasePipe, StockStatus, QtySelector, MatIcon, ToggleWishlistButton, MatButtonModule],
  templateUrl: './product-info.html',
  styleUrl: './product-info.scss',
})
export class ProductInfo {
 product = input.required<Product>()
 quantity = signal(1)
 store = inject(EcommerceStore)
}
