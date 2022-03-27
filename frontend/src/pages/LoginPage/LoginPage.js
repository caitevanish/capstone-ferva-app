import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';
import useCustomForm from '../../hooks/useCustomForm';
// import { Link } from 'react-router-dom';
import '../../App.css';
import './LoginPage.css';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: '', password: '' };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <div className='container'>
      <h1>Welcome to Ferva!</h1>
      <form className='form' onSubmit={handleSubmit}>
        <label>
          Username:{' '}
          <input
            type='text'
            name='username'
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:{' '}
          <input
            type='text'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        {isServerError ? (
          <p className='error'>Login failed, incorrect credentials!</p>
        ) : null}

        {/* <Link to='/register'>Click to register!</Link> */}
        <Link href='/register' component='button'>
          Click to register!
        </Link>
        <Button color='tertiary' variant='contained'>
          Login!
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
