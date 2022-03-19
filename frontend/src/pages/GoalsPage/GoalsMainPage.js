import React from 'react';
import { useEffect, useState } from 'react';

import useAuth from '../../hooks/useAuth';

const GoalsMainPage = () => {
  //Use const or function?
  const [user, token] = useAuth();

  useEffect(() => {}, [token]);

  return (
    <div className='container'>
      <h1>Goals Main Page for {user.username}</h1>
    </div>
  );
};

export default GoalsMainPage;
