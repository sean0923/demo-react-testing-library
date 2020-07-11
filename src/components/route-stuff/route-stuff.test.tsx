import React from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { RouteStuff } from './route-stuff.component';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

test('Start from route-one -> route-two', () => {
  const history = createMemoryHistory({ initialEntries: ['/'] });

  const comp = render(
    <Router history={history}>
      <RouteStuff />
    </Router>
  );

  //   Click link to route two
  user.click(comp.getByTestId('link-to-route-two'));

  // Render route two
  comp.getByTestId('link-to-route-one');
});

test('Start from route-two -> route-one', () => {
  const history = createMemoryHistory({ initialEntries: ['/route-two'] });

  const comp = render(
    <Router history={history}>
      <RouteStuff />
    </Router>
  );
  //   Click link to route one
  user.click(comp.getByTestId('link-to-route-one'));

  // Render route one
  comp.getByTestId('link-to-route-two');
});
