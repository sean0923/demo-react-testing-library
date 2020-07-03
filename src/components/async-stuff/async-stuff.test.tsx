import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import user from '@testing-library/user-event';
import { AsyncStuff } from './async-stuff.component';
import { apiCall } from './async-sutff.utils';

jest.mock('./async-sutff.utils');

afterEach(() => {
  jest.clearAllMocks();
});

const mockApiCall = apiCall as jest.Mock;

const getTestData = () => {
  return {
    email: 'sean@sonder.com',
    password: 'test1234',
  };
};

test('success submit email and password', async () => {
  mockApiCall.mockResolvedValueOnce({ message: 'success' });

  const comp = render(<AsyncStuff />);

  const testData = getTestData();

  // * check submitted data to not exist
  expect(comp.queryByTestId(/submitted/)).toBeNull();

  // * type email sean@sonder.com
  user.type(comp.getByLabelText(/email/i), testData.email);

  // * type password test1234
  user.type(comp.getByLabelText(/password/i), testData.password);

  // * click submit
  user.click(comp.getByText(/submit/i));
  expect(mockApiCall).toHaveBeenCalledWith({ email: testData.email, password: testData.password });

  // * render success
  await comp.findByText(/success/i);
});

test('render fail after submit fails', async () => {
  mockApiCall.mockRejectedValue({ message: 'fail' });

  const comp = render(<AsyncStuff />);

  const testData = getTestData();

  // * check submitted data to not exist
  expect(comp.queryByTestId(/submitted/)).toBeNull();

  // * type email sean@sonder.com
  user.type(comp.getByLabelText(/email/i), testData.email);

  // * type password test1234
  user.type(comp.getByLabelText(/password/i), testData.password);

  // * click submit
  user.click(comp.getByText(/submit/i));
  expect(mockApiCall).toHaveBeenCalledWith({
    email: testData.email,
    password: testData.password,
  });

  // * render fail
  await comp.findByText(/fail/i);
});
