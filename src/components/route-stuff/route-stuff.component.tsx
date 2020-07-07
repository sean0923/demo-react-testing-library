import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';

const RouteTwo = () => (
  <Link to="/route-one" data-testid="link-to-route-one">
    move to route one
  </Link>
);

const RouteOne = () => (
  <Link to="/route-two" data-testid="link-to-route-two">
    move to route two
  </Link>
);

export const RouteStuff: React.FC = () => {
  return (
    <div>
      <h1>Header</h1>
      <Switch>
        <Route path="/route-one" component={RouteOne} />
        <Route path="/route-two" component={RouteTwo} />
        <Redirect to="/route-one" />
      </Switch>
    </div>
  );
};

export const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <RouteStuff />
    </BrowserRouter>
  );
};
