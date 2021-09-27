import { FC, useMemo } from 'react';

import { CartListItem } from '../../components/Cart/CartListItem';
import Header from '../../components/Header';

import { useCart } from '../../hooks/useCart';

import Price from '../../utils/Price';

import { CartResume, CartButton, Total } from './styles';

const Cart: FC = () => {
  const { cart } = useCart();

  const total = useMemo(() => {
    return cart.reduce((sumTotal, product) => {
      const value = product.selling_price * (product.amount ?? 1);

      return sumTotal + value;
    }, 0);
  }, [cart]);

  return (
    <>
      <Header />

      <CartResume>
        <CartListItem />

        <footer>
          <Total>
            <span>TOTAL</span>

            <strong>{Price.format({ price: total })}</strong>
          </Total>

          <CartButton type="button">Finalizar pedido</CartButton>
        </footer>
      </CartResume>
    </>
  );
};

export default Cart;
