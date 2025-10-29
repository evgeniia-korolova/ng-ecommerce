import { computed, inject } from '@angular/core';

import {
  patchState,
  signalMethod,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { MOCK_PRODUCTS } from '../../shared/constants/products.mock';
import { Product } from '../models/product.interface';

import { produce } from 'immer';
import { ToasterService } from '../../shared/services/toaster-service';

export type EcommerceState = {
  products: Product[];
  category: string;
  whishlistItems: Product[];
};

export const EcommerceStore = signalStore(
  {
    providedIn: 'root',
  },
  withState({
    products: MOCK_PRODUCTS,
    category: 'all',
    whishlistItems: [],
  } as EcommerceState),
  withComputed(({ category, products, whishlistItems }) => ({
    filteredProducts: computed(() => {
      if (category() === 'all') return products();
      return products().filter((prod) => prod.category === category()?.toLowerCase());
    }),
    wishlistCount: computed(() => whishlistItems().length),
  })),
  withMethods((store, toaster = inject(ToasterService)) => ({
    setCategory: signalMethod<string>((category) => {
      patchState(store, { category });
    }),
    addToWishlist: (product: Product) => {
      const updatedWishlistItems = produce(store.whishlistItems(), (draft) => {
        if (!draft.find((prod) => prod.id === product.id)) {
          draft.push(product);
        }
      });
      patchState(store, { whishlistItems: updatedWishlistItems });
      toaster.success('Product added to your wishlist');
    },

    removefromWishlist: (product: Product) => {
      patchState(store, {
        whishlistItems: store.whishlistItems().filter((prod) => prod.id !== product.id),
      });
      toaster.success('Product removed from your wishlist')
    },
  }))
);
