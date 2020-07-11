import React from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Login } from './login.component';

import { apiCall as mockApiCall } from './login.utils';

jest.mock('./login.utils', () => {
  return {
    apiCall: jest.fn(() => {
      return new Promise((resolve) => {
        resolve({ message: 'mock api call success' });
      });
    }),
  };
});

// Successful login renders message from server
test('Successful login renders message from server', async () => {
  const comp = render(<Login />);

  // Check message from server to not exist
  expect(comp.queryByTestId('message-from-server')).toBeNull();

  // Type email & password
  const emailInput = comp.getByPlaceholderText(/email/i);
  user.type(emailInput, 'hi');

  const passwordInput = comp.getByPlaceholderText(/password/i);
  user.type(passwordInput, 'ppp');

  // Click submit button
  user.click(comp.getByText(/submit/i));
  expect(mockApiCall).toBeCalledWith({ email: 'hi', password: 'ppp' });

  // Check success message from server
  await comp.findByTestId('message-from-server');
});
