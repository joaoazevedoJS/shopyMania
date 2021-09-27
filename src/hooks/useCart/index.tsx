import { createContext, FC, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { Products } from '../../models/Products';

import { CartContextData, CartData, UpdateProductAmount } from './types';

import axiosAPI from '../../services/axiosAPI';

export * from './types';

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: FC = ({ children }) => {
  const [cart, setCart] = useState<CartData[]>(() => {
    const storagedCart = localStorage.getItem('@ShopyMania:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@ShopyMania:cart', JSON.stringify(cart));
  }, [cart]);

  const addProduct = async (product_id: string) => {
    try {
      const product = cart.find(prod => prod.id === product_id);

      const amount = product ? product.amount : 0;

      updateProductAmount({
        product_id,
        amount: amount + 1,
      });
    } catch {
      toast.error('Erro na adição do produto');
    }
  };

  const removeProduct = (product_id: string) => {
    try {
      const products = cart.filter(product => product.id !== product_id);

      setCart(products);
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    product_id,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount <= 0) {
        return;
      }

      const isAlreadyAddProduct = cart.find(
        product => product.id === product_id,
      );

      if (!isAlreadyAddProduct) {
        const response = await axiosAPI.get<Products>(
          `/products/${product_id}`,
        );

        const item = {
          ...response.data,
          amount: 1,
        };

        setCart([...cart, item]);

        return;
      }

      const products = cart.map(prod => {
        if (prod.id === product_id) {
          prod.amount = amount;
        }

        return prod;
      });

      setCart(products);
    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}

export { CartProvider, useCart };
