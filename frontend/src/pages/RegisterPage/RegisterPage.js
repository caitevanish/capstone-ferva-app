import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import useCustomForm from '../../hooks/useCustomForm';
import Button from '@mui/material/Button';
import './RegisterPage.css';

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );

  console.log(formData);

  return (
    <div classname='form-top'>
      <div className='container'>
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
            First Name:{' '}
            <input
              type='text'
              name='firstName'
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Last Name:{' '}
            <input
              type='text'
              name='lastName'
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:{' '}
            <input
              type='text'
              name='email'
              value={formData.email}
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
          <p style={{ fontSize: '12px' }}>
            NOTE: Make this an uncommon password with characters, numbers, and
            special characters!
          </p>
          <Button type='submit' color='tertiary' variant='contained'>
            Register!
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
