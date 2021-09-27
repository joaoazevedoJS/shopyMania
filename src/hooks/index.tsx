import { FC } from 'react';

import { CartProvider } from './useCart';

const Providers: FC = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

export { Providers };
