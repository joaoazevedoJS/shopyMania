import { FC } from 'react';

import { CartProvider } from './useCart';
import { WishlistProvider } from './useWishlist';

const Providers: FC = ({ children }) => {
  return (
    <WishlistProvider>
      <CartProvider>{children}</CartProvider>;
    </WishlistProvider>
  );
};

export { Providers };
