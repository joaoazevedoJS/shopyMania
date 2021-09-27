import { useCallback, useState } from 'react';
import { FiCheck } from 'react-icons/fi';

import { useCart } from '../../../hooks/useCart';

import Price from '../../../utils/Price';

import {
  WishlistItemContainer,
  WishlistItemButton,
  WishlistItemButtonAdded,
  WishlistItemInfo,
  WishlistItemPrice,
} from './styles';

import { WishlistItemFunctionType } from './types/WishlistItemFunctionType';

const WishlistItem: WishlistItemFunctionType = ({ productProps }) => {
  const [productAdded, setProductAdded] = useState(false);

  const { addProduct } = useCart();

  const handleAddToCart = useCallback(() => {
    setProductAdded(true);

    addProduct(productProps.id);

    setTimeout(() => {
      setProductAdded(false);
    }, 3000);
  }, [addProduct, productProps.id]);

  return (
    <WishlistItemContainer>
      <div>
        <img
          src={productProps.image_url}
          alt={productProps.description}
          title={productProps.description}
        />

        <WishlistItemInfo>
          <p>{`${productProps.description.substring(0, 40)}...`}</p>

          <WishlistItemPrice>
            {productProps.selling_price < productProps.price && (
              <s>
                {Price.format({
                  price: productProps.price,
                })}
              </s>
            )}

            <strong>
              {Price.format({
                price: productProps.selling_price,
              })}
            </strong>
          </WishlistItemPrice>
        </WishlistItemInfo>
      </div>

      {productAdded ? (
        <WishlistItemButtonAdded>
          <FiCheck />
          adicionado
        </WishlistItemButtonAdded>
      ) : (
        <WishlistItemButton onClick={handleAddToCart}>
          Adicionar
        </WishlistItemButton>
      )}
    </WishlistItemContainer>
  );
};

export default WishlistItem;
