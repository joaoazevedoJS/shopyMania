import { FC, useMemo } from 'react';

import { CartListItem } from '../../components/Cart/CartListItem';

import { useCart } from '../../hooks/useCart';

import Price from '../../utils/Price';

import { Container, Total } from './styles';

const Cart: FC = () => {
  const { cart } = useCart();

  const total = useMemo(() => {
    return cart.reduce((sumTotal, product) => {
      const value = product.selling_price * (product.amount ?? 1);

      return sumTotal + value;
    }, 0);
  }, [cart]);

  return (
    <Container>
      <h1>Resumo do carrinho</h1>

      <CartListItem />

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>

          <strong>{Price.format({ price: total })}</strong>
        </Total>
      </footer>
    </Container>
  );
};

export default Cart;
