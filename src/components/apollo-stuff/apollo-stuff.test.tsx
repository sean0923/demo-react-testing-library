import React from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { ApolloStuff } from './apollo-stuff.component';

import { MockedProvider } from '@apollo/react-testing';

// The component AND the query need to be exported
// import { GET_DOG_QUERY, Dog } from './dog';
import { GET_DOGS, GET_DOG_PHOTO } from './apollo-stuff.component';

// const res1:SomeTypeFormGqlCodeGen = {
//   fdkjdf
// }

const mocks = [
  {
    request: {
      query: GET_DOGS,
    },
    result: {
      data: {
        dogs: [
          { id: 'Z1fdFgU', breed: 'xxx', __typename: 'Dog' },
          { id: 'Z1gPiBt', breed: 'yyy', __typename: 'Dog' },
          { id: 'ZNDtCU', breed: 'zzz', __typename: 'Dog' },
        ],
      },
    },
  },

  {
    request: {
      query: GET_DOG_PHOTO,
      variables: {
        breed: 'yyy',
      },
    },
    result: {
      data: {
        dog: {
          id: 'ZNDtCU',
          breed: 'yyy',
          displayImage: 'https://images.dog.ceo/breeds/airedale/n02096051_5356.jpg',
          __typename: 'Dog',
        },
      },
    },
  },
];

test('Selecting dog breed from dropdown shows dog image', async () => {
  const comp = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ApolloStuff />
    </MockedProvider>
  );

  // Render loading…
  comp.getByText(/loading.../i);

  // Render dropdown with options
  const dropdown = await comp.findByTestId('select-dogs');

  // Select option from dropdown
  user.selectOptions(dropdown, ['yyy']);

  // Render dog image
  await comp.findByAltText('yyy');

  comp.debug();
});
