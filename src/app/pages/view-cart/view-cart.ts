import { Component, inject } from '@angular/core';

import { BackButton } from '../../shared/ui/back-button/back-button';
import { ListCartItems } from './list-cart-items/list-cart-items';
import { TeaseWishlist } from "../../widgets/tease-wishlist/tease-wishlist";
import { SummarizeOrder } from "../../features/summarize-order/summarize-order";
import { MatAnchor, MatButton } from "@angular/material/button";
import { EcommerceStore } from '../../entities/ecommerce-store/ecommerce-store';

@Component({
  selector: 'app-view-cart',
  imports: [BackButton, ListCartItems, TeaseWishlist, SummarizeOrder, MatAnchor, MatButton],
  templateUrl: './view-cart.html',
  styleUrl: './view-cart.scss',
})
export default class ViewCart {

  protected store = inject(EcommerceStore)
}
