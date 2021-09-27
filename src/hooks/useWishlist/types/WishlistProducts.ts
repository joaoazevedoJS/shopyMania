import { Products } from '../../../models/Products';

export interface WishlistProducts extends Products {
  wishlist_id: string;
}
