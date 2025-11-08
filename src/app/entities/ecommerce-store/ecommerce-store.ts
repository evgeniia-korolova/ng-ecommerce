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
import { CartItem } from '../models/cartItem.type';
import { filter } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SignInDialog } from '../../features/sign-in-dialog/sign-in-dialog';
import { SignInParams, User } from '../models/user';
import { Router } from '@angular/router';

export type EcommerceState = {
  products: Product[];
  category: string;
  whishlistItems: Product[];
  cartItems: CartItem[];
  user: User | undefined;
};

export const EcommerceStore = signalStore(
  {
    providedIn: 'root',
  },
  withState({
    products: MOCK_PRODUCTS,
    category: 'all',
    whishlistItems: [],
    cartItems: [],
    user: undefined,
  } as EcommerceState),
  withComputed(({ category, products, whishlistItems, cartItems }) => ({
    filteredProducts: computed(() => {
      if (category() === 'all') return products();
      return products().filter((prod) => prod.category === category()?.toLowerCase());
    }),
    wishlistCount: computed(() => whishlistItems().length),
    cartCount: computed(() => cartItems().reduce((acc, item) => acc + item.quantity, 0)),
  })),
  withMethods(
    (
      store,
      toaster = inject(ToasterService),
      matDialog = inject(MatDialog),
      router = inject(Router)
    ) => ({
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
        toaster.success('Product removed from your wishlist');
      },

      clearWishlist: () => {
        patchState(store, { whishlistItems: [] });
      },

      addToCart: (product: Product, quantity = 1) => {
        const existingItemIndex = store.cartItems().findIndex((i) => i.product.id === product.id);
        const updatedCartItems = produce(store.cartItems(), (draft) => {
          if (existingItemIndex !== -1) {
            draft[existingItemIndex].quantity += quantity;
            return;
          }
          draft.push({
            product,
            quantity,
          });
        });

        patchState(store, { cartItems: updatedCartItems });
        toaster.success(
          existingItemIndex !== -1 ? 'Product added again' : 'Product added to the cart'
        );
      },

      setItemQuantity: (params: { productId: string; quantity: number }) => {
        const index = store.cartItems().findIndex((item) => item.product.id === params.productId);

        const updated = produce(store.cartItems(), (draft) => {
          draft[index].quantity = params.quantity;
        });
        patchState(store, { cartItems: updated });
      },

      addAllWishlistToCart: () => {
        const updatedCartItems = produce(store.cartItems(), (draft) => {
          store.whishlistItems().forEach((prod) => {
            if (!draft.find((c) => c.product.id === prod.id)) {
              draft.push({ product: prod, quantity: 1 });
            }
          });
        });
        patchState(store, { cartItems: updatedCartItems, whishlistItems: [] });
      },

      moveToWishlist: (product: Product) => {
        const updatedCartItems = store.cartItems().filter((prod) => prod.product.id !== product.id);
        const uptadatedWishlistItems = produce(store.whishlistItems(), (draft) => {
          if (!draft.find((prod) => prod.id === product.id)) {
            draft.push(product);
          }
        });
        patchState(store, { cartItems: updatedCartItems, whishlistItems: uptadatedWishlistItems });
      },

      removeFromCart: (product: Product) => {
        patchState(store, {
          cartItems: store.cartItems().filter((c) => c.product.id !== product.id),
        });
      },

      proceedToCheckout: () => {
        matDialog.open(SignInDialog, {
          disableClose: true,
          data: { checkout: true },
        });
                
      },

      signIn: ({ email, password, checkout, dialogId }: SignInParams) => {
        patchState(store, {
          user: {
            id: '1',
            name: 'John',
            email: 'john@test.com',
            imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
          },
        });

        matDialog.getDialogById(dialogId)?.close();

        if (checkout) {
          router.navigate(['/checkout']);
        }
      },

      signOut: () => {
        patchState(store, {user: undefined})
      }
    })
  )
);
