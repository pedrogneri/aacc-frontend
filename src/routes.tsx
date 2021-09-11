import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

import { Home, Login } from './views';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </Router>
);

export default Routes;
