import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from 'Components/App';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
