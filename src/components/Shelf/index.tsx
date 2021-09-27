import { useEffect, useState } from 'react';

import axiosAPI from '../../services/axiosAPI';

import ShelfProduct from './ShelfProduct';
import { IShelfProduct } from './ShelfProduct/types/ShelfProductProps';

import { ShelfFunctionType } from './types/ShelfFunctionType';

const Shelf: ShelfFunctionType = ({ collectionId }) => {
  const [collectionName, setCollectionName] = useState('');
  const [products, setProducts] = useState<IShelfProduct[]>([]);

  useEffect(() => {
    axiosAPI
      .get(`/collections/${collectionId}`)
      .then(response => {
        const { data } = response;

        setProducts(data.products);
        setCollectionName(data.name);
      })
      .catch(() => console.error(`cannot load collection ${collectionId}`));
  }, [collectionId]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
      <h3>{collectionName}</h3>

      {products.map(product => (
        <ShelfProduct key={product.id} productProps={product} />
      ))}
    </div>
  );
};

Shelf.ShelfProduct = ShelfProduct;

export default Shelf;
