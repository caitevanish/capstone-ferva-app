import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';
import useCustomForm from '../../hooks/useCustomForm';
// import { Link } from 'react-router-dom';
import '../../App.css';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';

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
        <TextField
          label='Username'
          type='text'
          name='username'
          value={formData.username}
          onChange={handleInputChange}
        />

        <TextField
          label='Password'
          type='password'
          name='password'
          value={formData.password}
          onChange={handleInputChange}
        />

        {isServerError ? (
          <p className='error'>Login failed, incorrect credentials!</p>
        ) : null}

        {/* <Link to='/register'>Click to register!</Link> */}
        <Link href='/register' component='button'>
          Click to register!
        </Link>
        <Button type='submit' color='tertiary' variant='contained'>
          Login!
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
