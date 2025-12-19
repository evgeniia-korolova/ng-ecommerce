import { Component, inject, output, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { EcommerceStore } from '../../entities/ecommerce-store/ecommerce-store';
import { MatButtonModule } from '@angular/material/button';
import { ResponsiveService } from '../../core/services/responsive-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [MatIconModule, MatButtonModule, FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBar {
  store = inject(EcommerceStore);
  responsive = inject(ResponsiveService);

  searchOpen = signal(false);
 

  openOverlay() {
    this.searchOpen.set(true)
  };

  closeOverlay() {
    this.searchOpen.set(false)
  };

  
clear(event: Event) {  
  this.store.setParams({ category: this.store.category(), searchTerm: '' }); 

}


  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.store.setParams({ category: this.store.category(), searchTerm: value });
  } 
  
}
