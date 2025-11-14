import { Component,  inject,  input, output } from '@angular/core';
import { Product } from '../../entities/models/product.interface';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';


import { NgOptimizedImage } from '@angular/common'
import { EcommerceStore } from '../../entities/ecommerce-store/ecommerce-store';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [MatIcon, MatButton, NgOptimizedImage, RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  readonly product = input.required<Product>();
  readonly isFirst = input<boolean>(false);
  protected store = inject(EcommerceStore);  
}
