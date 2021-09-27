import { useCallback, useEffect, useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useWishlist } from '../../../hooks/useWishlist';

import axiosAPI from '../../../services/axiosAPI';

import { WishlistButtonContainer } from './styles';

import { WishlistButtonFunctionType } from './types/WishlistButtonFunctionType';

const WishlistButton: WishlistButtonFunctionType = ({ productId }) => {
  const [isActive, setIsActive] = useState(false);

  const { addWishlist, deleteWishlist } = useWishlist();

  useEffect(() => {
    axiosAPI.get(`/wishlist?product_id=${productId}`).then(response => {
      const { data } = response;

      setIsActive(data.length > 0);
    });
  }, [productId]);

  const handleAddToWishList = useCallback(() => {
    setIsActive(true);

    axiosAPI
      .get(`/products?id=${productId}`)
      .then(response => {
        const { data } = response;

        addWishlist(data[0]).catch(() => {
          setIsActive(false);
        });
      })
      .catch(() => {
        setIsActive(false);
      });
  }, [addWishlist, productId]);

  const handleRemoveToWishList = useCallback(() => {
    setIsActive(false);

    deleteWishlist(productId).catch(() => {
      setIsActive(true);
    });
  }, [deleteWishlist, productId]);

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
