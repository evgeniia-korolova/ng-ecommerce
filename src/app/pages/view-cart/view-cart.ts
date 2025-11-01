import { Component } from '@angular/core';

import { BackButton } from '../../shared/ui/back-button/back-button';
import { ListCartItems } from './list-cart-items/list-cart-items';
import { TeaseWishlist } from "../../widgets/tease-wishlist/tease-wishlist";
import { SummarizeOrder } from "../../features/summarize-order/summarize-order";

@Component({
  selector: 'app-view-cart',
  imports: [BackButton, ListCartItems, TeaseWishlist, SummarizeOrder],
  templateUrl: './view-cart.html',
  styleUrl: './view-cart.scss',
})
export default class ViewCart {}
