import React from 'react';
import { UserTypingAndClicking } from './user-typing-clicking/user-typing-clicking.component';

interface Props {
  //
}

export const App: React.FC<Props> = () => {
  return (
    <div>
      <UserTypingAndClicking />
    </div>
  );
};
