import { CartItem } from './cartItem.type';

export type Order = {
  id: string;
  userId: string;
  total: number;
  items: CartItem[];
  paymentStatus: 'success' | 'failure';
};
