import { useCallback, useMemo, useState } from 'react';
import { FiCheck } from 'react-icons/fi';

import Price from '../../../utils/Price';

import {
  ProductButton,
  ProductButtonAdded,
  ProductContainer,
  ProductDescription,
  ProductImage,
  ProductPrice,
} from './styles';

import { ShelfProductFunctionType } from './types/ShelfProductFunctionType';

const ShelfProduct: ShelfProductFunctionType = ({ productProps }) => {
  const [productAdded, setProductAdded] = useState(false);

  const priceWithInstallment = useMemo(() => {
    return Price.addInstallmentRate({
      price: productProps.selling_price,
      installmentRate: productProps.installment_rate,
    });
  }, [productProps]);

  const handleAddToCart = useCallback(() => {
    console.log('add');
    setProductAdded(true);

    setTimeout(() => {
      setProductAdded(false);
    }, 3000);
  }, []);

  return (
    <ProductContainer>
      <ProductImage>
        <img
          src={productProps.image_url}
          alt={productProps.description}
          title={productProps.description}
        />
      </ProductImage>

      <ProductDescription>{productProps.description}</ProductDescription>

      <ProductPrice>
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

        {productProps.installment >= 2 && (
          <div>
            <span>em até </span>{' '}
            <strong>
              {productProps.installment}x de{' '}
              {Price.format({
                price: priceWithInstallment / productProps.installment,
              })}
            </strong>{' '}
            <span>{productProps.installment_rate <= 0 && 'sem juros'}</span>
          </div>
        )}
      </ProductPrice>

      {productAdded ? (
        <ProductButtonAdded>
          <FiCheck />
          adicionado
        </ProductButtonAdded>
      ) : (
        <ProductButton onClick={handleAddToCart}>Adicionar</ProductButton>
      )}
    </ProductContainer>
  );
};

export default ShelfProduct;
