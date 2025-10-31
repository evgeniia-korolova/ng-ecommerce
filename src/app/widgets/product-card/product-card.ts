import { Component,  input, output } from '@angular/core';
import { Product } from '../../entities/models/product.interface';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';


import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-product-card',
  imports: [MatIcon, MatButton, NgOptimizedImage,],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  readonly product = input.required<Product>();
  readonly isFirst = input<boolean>(false);
  addToCartClicked = output<Product>();
}
