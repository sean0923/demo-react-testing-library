import React from 'react';
import { UserTypingAndClicking } from './user-typing-clicking/user-typing-clicking.component';
import { Root as RouteRoot } from './route-stuff/route-stuff.component';
import { AsyncStuff } from './async-stuff/async-stuff.component';
import { ApolloStuffRoot } from './apollo-stuff/apollo-stuff.component';

interface Props {
  //
}

export const App: React.FC<Props> = () => {
  return (
    <div>
      {/* <UserTypingAndClicking /> */}
      {/* <AsyncStuff /> */}
      {/* <RouteRoot /> */}
      <ApolloStuffRoot />
    </div>
  );
};
