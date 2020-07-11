import React from 'react';
import { Root as RouteRoot } from './route-stuff/route-stuff.component';
import { Login } from './login-stuff/login.component';
import { ApolloStuffRoot } from './apollo-stuff/apollo-stuff.component';

interface Props {
  //
}

export const App: React.FC<Props> = () => {
  return (
    <div>
      {/* <Login /> */}
      {/* <RouteRoot /> */}
      <ApolloStuffRoot />
    </div>
  );
};
