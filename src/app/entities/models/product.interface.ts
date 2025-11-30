import { UserReview } from "./user-reviews.type";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  category: string;
  reviews: UserReview[]
}
