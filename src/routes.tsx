import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { useStoreState } from './hooks';

import {
  ActivityForm,
  Login,
  ProfessorDashboard,
  StudentDashboard,
} from './views';

type PrivateRouteProps = {
  children: React.ReactElement;
  path: string;
  isAuthorized: boolean;
}

const PrivateRoute = ({
  children, path, isAuthorized,
}: PrivateRouteProps) => (
  <Switch>
    <Route
      exact
      path={path}
      render={() => (
        isAuthorized ? children : <Redirect push to="/login" />
      )}
    />
  </Switch>
);

const Routes = () => {
  const isLoggedIn = useStoreState((state) => state.isLoggedIn);
  const loggedUser = useStoreState((state) => state.loggedUser);

  return (
    <Router>
      <Switch>
        <PrivateRoute path="/activities" isAuthorized={isLoggedIn}>
          {loggedUser?.accessLevel === 'user'
            ? <StudentDashboard /> : <ProfessorDashboard />}
        </PrivateRoute>
        <PrivateRoute path="/create-activity" isAuthorized={isLoggedIn}>
          <ActivityForm />
        </PrivateRoute>
        <Route exact path="/login">
          {isLoggedIn ? <Redirect push to="/activities" /> : <Login />}
        </Route>

        <Route path="/">
          <Redirect push to="/login" />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
