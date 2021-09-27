import { FC } from 'react';
import { FiHeart } from 'react-icons/fi';

import { useWishlist } from '../../../hooks/useWishlist';

import WishlistItem from '../WishlistItem';

import { WishlistHeaderContainer, WishlistHeaderList } from './styles';

const WishlistHeader: FC = () => {
  const { products } = useWishlist();

  return (
    <WishlistHeaderContainer>
      <FiHeart size={32} />

      <WishlistHeaderList>
        <ul>
          {products.map(product => (
            <WishlistItem key={product.wishlist_id} productProps={product} />
          ))}
        </ul>
      </WishlistHeaderList>
    </WishlistHeaderContainer>
  );
};

export default WishlistHeader;
