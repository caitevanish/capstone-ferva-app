import React from 'react';
// import { useEffect, useState } from 'react';
// import { Routes, Route } from 'react-router-dom';

// Pages Imports

// Component Imports

// Util Imports

// import PrivateRoute from '../../utils/PrivateRoute';
// import axios from 'axios';
// import useAuth from '../../hooks/useAuth';

const HomePage = ({ user, token}) => {
  console.log(user)
 // const [user, token] = useAuth(); 
  
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication

  


  return (
    <div>
      <div className='container'>
        <h1>Home Page for {user.username}!</h1>
        {/* Top 3 Courses Table */}
        {/* Top 3 Projects Table */}
      </div>
    </div>
  );
};

export default HomePage;

//Past Code saved @ _scratch-temp > scratch-HomePage.js
