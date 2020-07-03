import React from 'react';

interface Props {
  //
}

export const UserTypingAndClicking: React.FC<Props> = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
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

      {isSubmitted && <div>Submitted!</div>}
    </div>
  );
};
