import { useCallback, useEffect, useState } from 'react';
import { FiHeart } from 'react-icons/fi';

import axiosAPI from '../../../services/axiosAPI';

import { WishlistButtonContainer } from './styles';

import { WishlistButtonFunctionType } from './types/WishlistButtonFunctionType';

const WishlistButton: WishlistButtonFunctionType = ({ productId }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    axiosAPI.get(`/wishlist?product_id=${productId}`).then(response => {
      const { data } = response;

      setIsActive(data.length > 0);
    });
  }, [productId]);

  const handleAddToWishList = useCallback(() => {
    setIsActive(true);

    // add static id, because json-server only delete by id and don't with product_id

    axiosAPI
      .post('/wishlist', {
        id: productId,
        user_id: '1',
        product_id: productId,
      })
      .catch(() => {
        alert('Aconteceu um erro ao adicionar o produto na sua lista');

        setIsActive(false);
      });
  }, [productId]);

  const handleRemoveToWishList = useCallback(() => {
    setIsActive(false);

    axiosAPI.delete(`/wishlist/${productId}`).catch(() => {
      alert('Aconteceu um erro ao remover o produto na sua lista');

      setIsActive(true);
    });
  }, [productId]);

  const handleActiveButton = useCallback(() => {
    if (isActive) {
      handleRemoveToWishList();

      return;
    }

    handleAddToWishList();
  }, [handleAddToWishList, handleRemoveToWishList, isActive]);

  return (
    <WishlistButtonContainer isActive={isActive} onClick={handleActiveButton}>
      <FiHeart />
    </WishlistButtonContainer>
  );
};

export default WishlistButton;
