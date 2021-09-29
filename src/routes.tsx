import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';

import { store } from './store';
import { Activities, Login } from './views';

const Routes = () => (
  <StoreProvider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Activities} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  </StoreProvider>
);

export default Routes;
