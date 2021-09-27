import { useEffect, useState } from 'react';

import axiosAPI from '../../services/axiosAPI';

import ShelfProduct from './ShelfProduct';
import Layout from '../Layout';

import { Products } from '../../models/Products';

import { ShelfFunctionType } from './types/ShelfFunctionType';

const Shelf: ShelfFunctionType = ({ collectionId }) => {
  const [collectionName, setCollectionName] = useState('');
  const [products, setProducts] = useState<Products[]>([]);

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
    <Layout>
      <h3>{collectionName}</h3>

      {products.map(product => (
        <ShelfProduct key={product.id} productProps={product} />
      ))}
    </Layout>
  );
};

Shelf.ShelfProduct = ShelfProduct;

export default Shelf;
