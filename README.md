# Store NG-20 (Main Branch)

This project was generated using **Angular CLI version 20.3.0**.  
It represents the primary branch of the Store NG-20 e‑commerce application.

## ✨ Features
- Authorization functionality
- Favorites (Wishlist) functionality
- Shopping Cart with persistent state
- Product Reviews integration
- Responsive design down to a minimum width of **380px**
- **Local persistence:** Favorites list and Shopping Cart are stored in **localStorage** for client-side rendering

## 🛠 Tech Stack
- Angular 20.3.0 (main branch)
- Angular Material & TailwindCSS for UI
- NgRx Signal Store for state management
- Signals for reactive UI updates

---

## 📂 Branches Overview

### `main`
- Standard client‑side rendering (CSR)
- Stable build with Angular **20.3.0**
- Favorites and Cart state stored in **localStorage**
- Recommended for production use

Run the dev server (CSR): ng serve


### `experimental/ssr`
- Server‑Side Rendering (SSR) with Angular Universal  
- Angular **21** base version
- Same functionality as `main` (auth, favorites, cart, reviews, responsive design)
- ⚠️ **Note:** Package mismatch currently exists:
  ```json
  "@angular-architects/ngrx-toolkit": "^20.4.2",
  "@ngrx/signals": "^20.1.0"

  Run the SSR dev server: ng dev / ng dev --poll=1000
