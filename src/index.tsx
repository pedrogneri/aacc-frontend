import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider, useStoreRehydrated } from 'easy-peasy';
import { ToastProvider } from './components/toast/toast.context';
import Routes from './routes';

import { store } from './store';
import { GlobalStyle } from './style';
import { Loading } from './components';

const WaitRehydration = (
  { children }: { children: React.ReactNode},
) => {
  const isRehydrated = useStoreRehydrated();
  return isRehydrated ? <>{children}</> : <Loading />;
};

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <StoreProvider store={store}>
      <WaitRehydration>
        <ToastProvider>
          <Routes />
        </ToastProvider>
      </WaitRehydration>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
