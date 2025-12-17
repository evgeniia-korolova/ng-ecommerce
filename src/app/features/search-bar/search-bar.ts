import { Component, inject, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { EcommerceStore } from '../../entities/ecommerce-store/ecommerce-store';

@Component({
  selector: 'app-search-bar',
  imports: [MatIconModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBar {
  store = inject(EcommerceStore);

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log('SearchBar input:', value);

    this.store.setParams({ category: this.store.category(), searchTerm: value });
  }
}
