import { useCallback, useEffect, useMemo, useState } from 'react';
import Slider from 'react-slick';

import axiosAPI from '../../services/axiosAPI';

import ShelfProduct from './ShelfProduct';

import { Products } from '../../models/Products';

import { ShelfFunctionType } from './types/ShelfFunctionType';

import { ShelfContainer } from './styles';

const Shelf: ShelfFunctionType = ({ collectionId }) => {
  const [slickSettings, setSlickSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
  });

  const [collectionName, setCollectionName] = useState('');
  const [products, setProducts] = useState<Products[]>([]);
  const [withoutNextProduct, setWithoutNextProduct] = useState(false);

  const handleResize = useCallback(() => {
    const width = document.body.offsetWidth;

    let breakpoint = {
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    if (width > 640 && width < 960) {
      breakpoint = {
        slidesToShow: 2,
        slidesToScroll: 2,
      };
    }

    if (width > 960 && width < 1150) {
      breakpoint = {
        slidesToShow: 3,
        slidesToScroll: 2,
      };
    }

    if (width > 1150) {
      breakpoint = {
        slidesToShow: 4,
        slidesToScroll: 3,
      };
    }
    setWithoutNextProduct(breakpoint.slidesToShow > products.length);

    setSlickSettings({
      dots: false,
      infinite: true,
      speed: 500,
      ...breakpoint,
    });
  }, [products.length]);

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

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    handleResize();
  }, [handleResize]);

  return (
    <ShelfContainer withoutNextProduct={withoutNextProduct}>
      <h3>{collectionName}</h3>

      <Slider {...slickSettings}>
        {products.map(product => (
          <ShelfProduct key={product.id} productProps={product} />
        ))}
      </Slider>
    </ShelfContainer>
  );
};

Shelf.ShelfProduct = ShelfProduct;

export default Shelf;
