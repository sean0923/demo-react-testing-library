import React from 'react';
import { render } from '@testing-library/react';
import { UserTypingAndClicking } from './user-typing-clicking.component';
import user from '@testing-library/user-event';

const getTestData = () => {
  return {
    email: 'sean@sonder.com',
    password: 'test1234',
  };
};

test('submit email and password', () => {
  const comp = render(<UserTypingAndClicking />);

  const testData = getTestData();

  // * check submitted data to not exist
  expect(comp.queryByTestId(/submitted/)).toBeNull();

  // * type email sean@sonder.com
  user.type(comp.getByLabelText(/email/i), testData.email);

  // * type password test1234
  user.type(comp.getByLabelText(/password/i), testData.password);

  // * click submit
  // fireEvent.click(comp.getByText(/submit/i));
  user.click(comp.getByText(/submit/i));

  // * display submitted email and password
  comp.getByText(/submitted!/i);
});
