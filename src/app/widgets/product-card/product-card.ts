import { Component, input, output } from '@angular/core';
import { Product } from '../../entities/models/product.interface';
import { MatButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-product-card',
  imports: [ MatIcon, MatButton],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  readonly product = input.required<Product>();

  addToCartClicked = output<Product>()
}
