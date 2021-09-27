import React from 'react';

import Header from '../../components/Header';
import Banners from '../../components/Banners';
import Shelf from '../../components/Shelf';

const Home: React.FC = () => {
  return (
    <>
      <Header />

      <Banners
        slickSettings={{
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        }}
        bannersDesktopCollectionId="1"
        bannersMobileCollectionId="2"
      />

      <Shelf collectionId="1" />
    </>
  );
};

export default Home;
