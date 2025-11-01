import { Component, inject } from '@angular/core';
import { ViewPanel } from '../../../shared/directives/view-panel';
import { EcommerceStore } from '../../../entities/ecommerce-store/ecommerce-store';
import { ShowCartItem } from "../../../widgets/show-cart-item/show-cart-item";

@Component({
  selector: 'app-list-cart-items',
  imports: [ViewPanel, ShowCartItem],
  templateUrl: './list-cart-items.html',
  styleUrl: './list-cart-items.scss',
})
export class ListCartItems {
  protected store = inject(EcommerceStore);
}
