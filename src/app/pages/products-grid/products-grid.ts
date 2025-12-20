import { Component, computed, inject, input, signal } from '@angular/core';
import { ProductCard } from '../../widgets/product-card/product-card';
import { MatSidenavContainer, MatSidenavContent, MatSidenav } from '@angular/material/sidenav';
import { MatNavList, MatListItem } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { EcommerceStore } from '../../entities/ecommerce-store/ecommerce-store';

import { ToggleWishlistButton } from '../../shared/ui/toggle-wishlist-button/toggle-wishlist-button';
import { SidebarService } from '../../layout/services/sidebar-service';
import { ResponsiveService } from '../../core/services/responsive-service';

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
    ToggleWishlistButton,
  ],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {
  protected store = inject(EcommerceStore);
  sidebarService = inject(SidebarService);
  responsiveService = inject(ResponsiveService)
  protected readonly category = input<string>('all');
  protected readonly search = input<string>('');
  isOpened = computed(() => this.sidebarService.opened());

  mode = computed(() => this.responsiveService.largeWidth() ? 'push' : 'over')


  protected readonly categories = signal<string[]>([
    'all',
    'electronics',
    'home',
    'office',
    'kitchen',
  ]);

  protected readonly productsQueryParams = computed(() => ({
    category: this.category() ?? 'all',
    searchTerm: this.search() ?? '',
  }));



  constructor() {
    // this.store.setCategory(this.category);
    this.store.setParams(this.productsQueryParams);
    this.store.setProductsListSeoTags(this.category)

  }
}
