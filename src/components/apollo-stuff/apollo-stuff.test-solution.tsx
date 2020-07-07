import React from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';

import { MockedProvider } from '@apollo/react-testing';
import { ApolloStuff, GET_DOG_PHOTO, GET_DOGS } from './apollo-stuff.component';

const mocks = [
  {
    request: { query: GET_DOGS },
    result: {
      data: {
        dogs: [
          { id: 'Z1fdFgU', breed: 'breed1', __typename: 'Dog' },
          { id: '6LOk1', breed: 'breed2', __typename: 'Dog' },
          { id: 'drq7', breed: 'breed3', __typename: 'Dog' },
        ],
      },
    },
  },
  //
  {
    request: {
      query: GET_DOG_PHOTO,
      variables: { breed: 'breed1' },
    },
    result: {
      data: {
        dog: { id: '1', breed: 'breed1', displayImage: 'a', __typename: 'xxx' },
      },
    },
  },
];

const renderWithMockProvider = (ui: React.ReactElement) => {
  return render(
    <MockedProvider mocks={mocks} addTypename={false}>
      {ui}
    </MockedProvider>
  );
};

test('select dog breed render dog image', async () => {
  const comp = renderWithMockProvider(<ApolloStuff />);

  const dropdown = await comp.findByTestId('select-dog');

  user.selectOptions(dropdown, ['breed1']);

  await comp.findByAltText('breed1');
});
