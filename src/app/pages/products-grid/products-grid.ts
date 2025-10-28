import { MOCK_PRODUCTS } from '../../shared/constants/products.mock';
import { Product } from './../../entities/models/product.interface';
import { Component, computed, input, signal } from '@angular/core';
import { ProductCard } from '../../widgets/product-card/product-card';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {
  protected category = input<string>();
  products = signal<Product[]>(MOCK_PRODUCTS);

  filteredProducts = computed(() => {
    if (this.category() === 'all') return this.products();
    return this.products().filter((prod) => prod.category === this.category()?.toLowerCase());
  });
}
