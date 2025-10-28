import { MOCK_PRODUCTS } from '../../shared/constants/products.mock';
import { Product } from './../../entities/models/product.interface';
import { Component, computed, input, signal } from '@angular/core';
import { ProductCard } from '../../widgets/product-card/product-card';
import { MatSidenavContainer, MatSidenavContent, MatSidenav } from '@angular/material/sidenav';
import { MatNavList, MatListItem } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-products-grid',
  imports: [
    ProductCard,
    MatSidenavContainer,
    MatSidenavContent,
    MatSidenav,
    MatNavList,
    MatListItem,
    RouterLink,
    TitleCasePipe,
  ],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {
  protected readonly category = input<string>();
  protected readonly categories = signal<string[]>([
    'all',
    'electronics',
    'home',
    'office',
    'kitchen',
  ]);
  protected readonly products = signal<Product[]>(MOCK_PRODUCTS);

  protected readonly filteredProducts = computed(() => {
    if (this.category() === 'all') return this.products();
    return this.products().filter((prod) => prod.category === this.category()?.toLowerCase());
  });
}
