import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import WishlistHeader from '../Wishlist/WishlistHeader';

import { useCart } from '../../hooks/useCart';

import {
  HeaderContainer,
  HeaderContent,
  HeaderCart,
  HeaderNavigation,
} from './styles';

const Header: FC = () => {
  const { cart } = useCart();

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">Shopy Mania</Link>

        <HeaderNavigation>
          <HeaderCart to="/cart">
            <div>
              <strong>Meu carrinho</strong>

              <span>
                {cart.length === 1
                  ? `${cart.length} item`
                  : `${cart.length} itens`}
              </span>
            </div>

            <MdShoppingBasket size={36} />
          </HeaderCart>

          <WishlistHeader />
        </HeaderNavigation>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
