import { computed, signal } from '@angular/core';
import { Product } from '../models/product.interface';
import { patchState, signalMethod, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { MOCK_PRODUCTS } from '../../shared/constants/products.mock';

export type EcommerceState = {
  products: Product[];
  category: string;
};

export const EcommerceStore = signalStore(
    {
        providedIn: 'root'
    },
  withState({
    products: MOCK_PRODUCTS,
    category: 'all',
  }),
  withComputed(({ category, products }) => ({
    filteredProducts: computed(() => {
      if (category() === 'all') return products();
      return products().filter((prod) => prod.category === category()?.toLowerCase());
    }),
  })),
  withMethods((store) => ({
    setCategory: signalMethod<string>((category) => {
        patchState(store, {category})
    })
  }))
);
