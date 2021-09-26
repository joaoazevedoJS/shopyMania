import React from 'react';
import Shelf from '../../components/Shelf';

const Home: React.FC = () => {
  return (
    <>
      <h1>Hello world</h1>

      <Shelf collectionId="1" />
    </>
  );
};

export default Home;
