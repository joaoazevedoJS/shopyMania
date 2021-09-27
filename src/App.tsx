import React from 'react';

import Routes from './routes';
import GlobalStyled from './styles/GlobalStyled';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyled />

      <Routes />
    </div>
  );
};

export default App;
