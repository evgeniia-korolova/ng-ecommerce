import { Component, input } from '@angular/core';
import { UserReview } from '../../../entities/models/user-reviews.type';
import { ViewPanel } from "../../../shared/directives/view-panel";
import { StarRating } from "../../../features/star-rating/star-rating";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-review-item',
  imports: [ViewPanel, StarRating, DatePipe],
  templateUrl: './view-review-item.html',
  styleUrl: './view-review-item.scss',
})
export class ViewReviewItem {
  readonly review = input.required<UserReview>()
}
