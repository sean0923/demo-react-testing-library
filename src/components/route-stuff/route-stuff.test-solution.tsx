import React from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { RouteStuff } from './route-stuff.component';

import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

const renderWithRouter = (ui: React.ReactNode, initialPath: string = '/') => {
  const history = createMemoryHistory({ initialEntries: [initialPath] });
  return render(<Router history={history}>{ui}</Router>);
};

test('start from route-one -> route-two', () => {
  const comp = renderWithRouter(<RouteStuff />);

  // * click move to route two
  user.click(comp.getByTestId('link-to-route-two'));
  comp.getByTestId('link-to-route-one');
});

test('start from route-two -> route-one', () => {
  const comp = renderWithRouter(<RouteStuff />, '/route-two');

  // * click move to route two
  user.click(comp.getByTestId('link-to-route-one'));
  comp.getByTestId('link-to-route-two');
});
