import React, { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform signup or further actions with the entered data
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);

    // Reset form fields
    setEmail('');
    setUsername('');
    setPassword('');
  };

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h3>Sign up for an Account</h3>
      </div>
    <form className="signup-form" onSubmit={handleSubmit}>
      <label className="signup-label">
        Email:
        <input
          className="signup-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />

      <label className="signup-label">
        Username:
        <input
          className="signup-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <br />

      <label className="signup-label">
        Password:
        <input
          className="signup-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />

      <a href="/loginform" className="signup-ahref">Sign Up</a>
      {/* <button type="submit">Sign Up</button> */}

      <p>
        Already have an account? <a href="/loginform">Login</a>
      </p>
    </form>
    </div>
  );
};

export default SignupForm;
