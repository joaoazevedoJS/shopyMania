import { Products } from '../../../models/Products';

import { WishlistProducts } from './WishlistProducts';

export type WishlistContextData = {
  products: WishlistProducts[];
  addWishlist(product: Products): Promise<void>;
  deleteWishlist(wishlistId: string): Promise<void>;
};
