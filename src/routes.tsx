import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { useStoreState } from './hooks';

import {
  Login, ProfessorDashboard, StudentDashboard,
} from './views';

type PrivateRouteProps = {
  children: React.ReactElement;
  isAuthorized: boolean;
  path: string;
}

const PrivateRoute = ({
  children, isAuthorized, path,
}: PrivateRouteProps) => (
  <Route exact path={path}>
    {isAuthorized ? children : <Redirect push to="/login" />}
  </Route>
);

const Routes = () => {
  const loggedUser = useStoreState((state) => state.loggedUser);

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          {loggedUser?.token ? <Redirect push to="/activities" /> : <Login />}
        </Route>
        <PrivateRoute path="/activities" isAuthorized={!!loggedUser?.token}>
          {loggedUser?.accessLevel === 'user' ? <StudentDashboard /> : <ProfessorDashboard />}
        </PrivateRoute>

        <Route path="/">
          <Redirect push to="/login" />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
