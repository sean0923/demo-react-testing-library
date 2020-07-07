import React from 'react';
// import { Root as RouteRoot } from './route-stuff/route-stuff.component';
import { AsyncStuff } from './async-stuff/async-stuff.component';
// import { ApolloStuffRoot } from './apollo-stuff/apollo-stuff.component';

interface Props {
  //
}

export const App: React.FC<Props> = () => {
  return (
    <div>
      <AsyncStuff />
      {/* <RouteRoot /> */}
      {/* <ApolloStuffRoot /> */}
    </div>
  );
};
