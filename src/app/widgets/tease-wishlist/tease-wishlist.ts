import { Component, inject } from '@angular/core';
import { ViewPanel } from '../../shared/directives/view-panel';
import { MatIcon } from '@angular/material/icon';
import { EcommerceStore } from '../../entities/ecommerce-store/ecommerce-store';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-tease-wishlist',
  imports: [ViewPanel, MatIcon, RouterLink, MatButton],
  templateUrl: './tease-wishlist.html',
  styleUrl: './tease-wishlist.scss',
})
export class TeaseWishlist {
  protected store = inject(EcommerceStore);
}
