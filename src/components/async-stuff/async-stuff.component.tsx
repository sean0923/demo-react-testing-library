import React from 'react';
import { apiCall } from './async-sutff.utils';

interface Props {
  //
}

export const AsyncStuff: React.FC<Props> = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [messageFromServer, setMessageFromServer] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    apiCall({ email, password })
      .then((resp: any) => {
        setMessageFromServer(resp.message);
      })
      .catch((err) => {
        setMessageFromServer(err.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="text"
            value={email}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            value={password}
          />
        </div>

        <button>Submit</button>
      </form>

      {messageFromServer && <div>{messageFromServer}</div>}
    </div>
  );
};
