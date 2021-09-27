import { FC, useCallback, useMemo } from 'react';

import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from 'react-icons/md';

import { CartData, useCart } from '../../../hooks/useCart';

import Price from '../../../utils/Price';

import { Container } from './styles';

const CartListItem: FC = () => {
  const { cart, addProduct, updateProductAmount, removeProduct } = useCart();

  const cartFormatted = useMemo(() => {
    return cart.map(product => ({
      ...product,
      sellingPriceFormatted: Price.format({
        price: product.selling_price,
      }),
      total: product.selling_price * product.amount,
      totalFormatted: Price.format({
        price: product.selling_price * (product.amount ?? 1),
      }),
    }));
  }, [cart]);

  const handleProductIncrement = useCallback(
    (product_id: string) => {
      addProduct(product_id);
    },
    [addProduct],
  );

  const handleProductDecrement = useCallback(
    (product: CartData) => {
      updateProductAmount({
        product_id: product.id,
        amount: product.amount - 1,
      });
    },
    [updateProductAmount],
  );

  const handleRemoveProduct = useCallback(
    (product_id: string) => {
      removeProduct(product_id);
    },
    [removeProduct],
  );

  return (
    <Container>
      <thead>
        <tr>
          <th aria-label="product image" />
          <th>PRODUTO</th>
          <th>QTD</th>
          <th>SUBTOTAL</th>
          <th aria-label="delete icon" />
        </tr>
      </thead>

      <tbody>
        {cartFormatted.map(product => (
          <tr key={product.id}>
            <td>
              <img
                src={product.image_url}
                alt={product.description}
                title={product.description}
              />
            </td>

            <td>
              <strong>{product.description}</strong>
              <span>{product.sellingPriceFormatted}</span>
            </td>

            <td>
              <div>
                <button
                  type="button"
                  disabled={product.amount <= 1}
                  onClick={() => handleProductDecrement(product)}
                >
                  <MdRemoveCircleOutline size={20} />
                </button>

                <input type="text" readOnly value={product.amount} />

                <button
                  type="button"
                  onClick={() => handleProductIncrement(product.id)}
                >
                  <MdAddCircleOutline size={20} />
                </button>
              </div>
            </td>

            <td>
              <strong>{product.totalFormatted}</strong>
            </td>

            <td>
              <button
                type="button"
                onClick={() => handleRemoveProduct(product.id)}
              >
                <MdDelete size={20} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
};

export { CartListItem };
