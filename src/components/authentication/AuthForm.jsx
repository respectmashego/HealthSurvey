import React, { useState } from 'react';
import { RiUserAddLine, RiLoginCircleLine } from 'react-icons/ri';
import './AuthForm.css';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform authentication logic here
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear form inputs
    setEmail('');
    setPassword('');
  };

  const handleToggle = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  return (
    <div className='authContainer'>
  <form className="auth-form" onSubmit={handleSubmit}>
      <h2 className="auth-form__title">{isSignUp ? 'Sign Up' : 'Log In'}</h2>
      <div className="auth-form__group">
        <label className="auth-form__label">Email</label>
        <input
          className="auth-form__input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="auth-form__group">
        <label className="auth-form__label">Password</label>
        <input
          className="auth-form__input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="auth-form__button" type="submit">
        {isSignUp ? 'Sign Up' : 'Log In'}
      </button>
      <div className="auth-form__toggle">
        <button
          className="auth-form__toggle-button"
          type="button"
          onClick={handleToggle}
        >  
          {isSignUp ? <RiLoginCircleLine /> : <RiUserAddLine />}
          {isSignUp ? 'Do you have account Log In' : 'No account yet Sign Up'}
        </button>
      </div>
    </form>
    </div>
  
  );
};

export default AuthForm;
