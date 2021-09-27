import React from 'react';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

import { Providers } from './hooks';

import GlobalStyled from './styles/GlobalStyled';

const App: React.FC = () => {
  return (
    <Providers>
      <GlobalStyled />

      <div className="App">
        <Routes />
      </div>

      <ToastContainer />
    </Providers>
  );
};

export default App;
