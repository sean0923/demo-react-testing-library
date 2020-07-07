import React from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { AsyncStuff } from './async-stuff.component';

import { apiCall as mockApiCall } from './async-sutff.utils';

jest.mock('./async-sutff.utils', () => {
  return {
    apiCall: jest.fn(() => {
      return new Promise((resolve) => {
        resolve({ message: 'mock api call success' });
      });
    }),
  };
});

test('successful submit email and password', async () => {
  const comp = render(<AsyncStuff />);
  // comp.debug();
  // * check message from server to not exist at the beginning
  expect(comp.queryByTestId('message-from-server')).toBeNull();

  // * type email email@sonder.com
  const emailInput = comp.getByLabelText(/email/i);
  user.type(emailInput, 'email@sonder.com');

  // * type password asdfasdf
  const passwordInput = comp.getByLabelText(/password/i);
  user.type(passwordInput, 'asdfasdf');

  // * click submit
  user.click(comp.getByText(/submit/i));
  expect(mockApiCall).toHaveBeenCalledWith({ email: 'email@sonder.com', password: 'asdfasdf' });

  // * render success
  const msgFromServer = await comp.findByTestId('message-from-server');
  expect(msgFromServer).toHaveTextContent('mock api call success');
});
