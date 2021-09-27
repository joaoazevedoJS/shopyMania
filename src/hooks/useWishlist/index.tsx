import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { toast } from 'react-toastify';

import { Products } from '../../models/Products';
import { Wishlists } from '../../models/Wishlists';

import { WishlistContextData, WishlistProducts } from './types';

import axiosAPI from '../../services/axiosAPI';

export * from './types';

const WishlistContext = createContext<WishlistContextData>(
  {} as WishlistContextData,
);

const WishlistProvider: FC = ({ children }) => {
  const [products, setProducts] = useState<WishlistProducts[]>([]);

  useEffect(() => {
    async function getWishlistProducts() {
      const { data } = await axiosAPI.get<Wishlists[]>(`/wishlist`);

      const wishProducts: WishlistProducts[] = [];

      console.log(data);
      await Promise.all(
        data.map(async product => {
          try {
            const productResponse = await axiosAPI.get<Products>(
              `/products/${product.product_id}`,
            );

            if (productResponse.data.id) {
              const productData = {
                ...productResponse.data,
                wishlist_id: productResponse.data.id,
              };

              wishProducts.push(productData);
            }
          } catch (error) {
            console.error(error);
          }
        }),
      );

      setProducts(wishProducts);
    }

    getWishlistProducts();
  }, []);

  const addWishlist = useCallback(
    async (product: Products) => {
      try {
        await axiosAPI.post('/wishlist', {
          id: product.id,
          product_id: product.id,
        });

        const wishlistProduct = {
          wishlist_id: product.id,
          ...product,
        };

        setProducts([...products, wishlistProduct]);
      } catch (error) {
        toast.error('Aconteceu um erro ao adicionar o produto na sua lista');

        throw error;
      }
    },
    [products],
  );

  const deleteWishlist = useCallback(
    async (wishlistId: string) => {
      try {
        await axiosAPI.delete(`/wishlist/${wishlistId}`);

        const productsFiltered = products.filter(
          product => product.wishlist_id !== wishlistId,
        );

        setProducts(productsFiltered);
      } catch (error) {
        toast.error('Aconteceu um erro ao remover o produto na sua lista');

        throw error;
      }
    },
    [products],
  );

  return (
    <WishlistContext.Provider value={{ products, addWishlist, deleteWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

function useWishlist(): WishlistContextData {
  const context = useContext(WishlistContext);

  return context;
}

export { WishlistProvider, useWishlist };
