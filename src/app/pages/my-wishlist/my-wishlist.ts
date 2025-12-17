import { Component, inject } from '@angular/core';
import { BackButton } from '../../shared/ui/back-button/back-button';
import { EcommerceStore } from '../../entities/ecommerce-store/ecommerce-store';
import { ProductCard } from "../../widgets/product-card/product-card";
import { MatIcon } from "@angular/material/icon";
import { MatIconButton, MatAnchor } from '@angular/material/button';
import { EmptyWishlist } from "./empty-wishlist/empty-wishlist";
import { SeoManagerService } from '../../core/services/seo-manager-service';

@Component({
  selector: 'app-my-wishlist',
  imports: [BackButton, ProductCard, MatIcon, MatIconButton, MatAnchor, EmptyWishlist],
  templateUrl: './my-wishlist.html',
  styleUrl: './my-wishlist.scss',
})
export class MyWishlist {
protected store = inject(EcommerceStore);
seoManager = inject(SeoManagerService);

constructor() {
  this.seoManager.updateSeoTags({
    title: 'My wishlist',
    description: 'View your wishlist items',
  })
}


}
