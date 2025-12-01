import { Component, computed, inject, input } from '@angular/core';
import { Product } from '../../../entities/models/product.interface';
import { ViewPanel } from "../../../shared/directives/view-panel";
import { RatingSummary } from "../rating-summary/rating-summary";
import { ViewReviewItem } from "../view-review-item/view-review-item";
import { MatAnchor } from "@angular/material/button";
import { EcommerceStore } from '../../../entities/ecommerce-store/ecommerce-store';
import { WriteReview } from "../write-review/write-review";

@Component({
  selector: 'app-view-reviews',
  imports: [ViewPanel, RatingSummary, ViewReviewItem, MatAnchor, WriteReview],
  templateUrl: './view-reviews.html',
  styleUrl: './view-reviews.scss',
})
export class ViewReviews {
 readonly product = input.required<Product>();
 store = inject(EcommerceStore)

sortedReviews = computed(() => {
  return [...this.product().reviews].sort((a, b) => b.reviewDate.getTime() - a.reviewDate.getTime())
})
}
