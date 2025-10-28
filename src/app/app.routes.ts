import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products/all'
    },
    { 
        path: 'products/:category', 
        loadComponent: () => import('./pages/products-grid/products-grid').then(c => c.ProductsGrid) 
    },
    { 
        path: 'wishlist', 
        loadComponent: () => import('./pages/my-wishlist/my-wishlist').then(c => c.MyWishlist) 
    },
];
