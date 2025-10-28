import { Component, input } from '@angular/core';
import { Product } from '../../entities/models/product.interface';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  product = input.required<Product>()
}
