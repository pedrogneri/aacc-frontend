import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';

import {
  Login, ProfessorDashboard, StudentDashboard,
} from './views';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/professor-dashboard" component={ProfessorDashboard} />
      <Route exact path="/student-dashboard" component={StudentDashboard} />

      <Route path="/">
        <Redirect push to="/login" />
      </Route>
    </Switch>
  </Router>

);

export default Routes;
