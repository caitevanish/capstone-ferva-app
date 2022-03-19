import React from 'react';
import { useEffect, useState } from 'react';

import useAuth from '../../hooks/useAuth';

const ProjectsMainPage = () => {
  //Use const or function?
  const [user, token] = useAuth();

  useEffect(() => {}, [token]);

  return (
    <div className='container'>
      <h1>Projects Main Page for {user.username}</h1>
    </div>
  );
};

export default ProjectsMainPage;
