import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export const GET_DOGS = gql`
  {
    dogs {
      id
      breed
      __typename
    }
  }
`;

export const GET_DOG_PHOTO = gql`
  query dog($breed: String!) {
    dog(breed: $breed) {
      id
      breed
      displayImage
      __typename
    }
  }
`;

const client = new ApolloClient({
  uri: 'https://32ypr38l61.sse.codesandbox.io/',
});

const Dogs: any = ({ onDogSelected }: { onDogSelected: any }) => {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <select name="dog" onChange={onDogSelected} data-testid="select-dog">
      {data.dogs.map((dog: any) => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  );
};

const DogPhoto: any = ({ breed }: { breed: any }) => {
  const { loading, error, data, refetch, networkStatus } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
    notifyOnNetworkStatusChange: true,
  });

  if (networkStatus === 4) return 'Refetching!';
  if (loading) return null;
  if (error) return `Error!: ${error}`;

  return (
    <div>
      <div>
        <img src={data.dog.displayImage} style={{ width: 100 }} alt={data.dog.breed || 'dog'} />
      </div>
      <button onClick={() => refetch()}>Refetch!</button>
    </div>
  );
};

export const ApolloStuff = () => {
  const [selectedDog, setSelectedDog] = React.useState<any>(null);

  const onDogSelected = (e: any) => {
    setSelectedDog(e.target.value);
  };

  return (
    <div>
      <h2>Building Query components 🚀</h2>
      {selectedDog && <DogPhoto breed={selectedDog} />}
      <Dogs onDogSelected={onDogSelected} />
    </div>
  );
};

export const ApolloStuffRoot = () => {
  return (
    <ApolloProvider client={client}>
      <ApolloStuff />
    </ApolloProvider>
  );
};
