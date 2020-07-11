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

test('Successful login renders message from server', async () => {
  const testData = {
    email: 'email',
    password: 'p',
  };

  const comp = render(<Login />);
  // comp.debug();

  // Check message from server to not exist
  expect(comp.queryByTestId('message-from-server')).toBeNull();

  // Type email & passwordl
  const emailInput = comp.getByPlaceholderText(/email/i);
  user.type(emailInput, testData.email);

  const passwordInput = comp.getByLabelText(/password/i);
  user.type(passwordInput, testData.password);

  // Click submit button
  user.click(comp.getByText(/submit/i));
  expect(mockApiCall).toBeCalledWith({ email: testData.email, password: testData.password });

  await comp.findByTestId('message-from-server');

  // Check success message from server
  // comp.getByTestId('message-from-server');

  // comp.debug();
});
