import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalSyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalSyles />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
