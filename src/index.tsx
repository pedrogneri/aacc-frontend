import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';
import Routes from './routes';

import { store } from './store';
import { GlobalStyle } from './style';

ReactDOM.render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <StoreProvider store={store}>
        <Routes />
      </StoreProvider>
    </>
  </React.StrictMode>,
  document.getElementById('root'),
);
