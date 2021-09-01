import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

import { Home } from './views';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);

export default Routes;
