import React from 'react';
import StudyTracker from '../../components/StudyTracker/StudyTracker';
import DeadlineTable from '../../components/DeadlineTable/DeadlineTable';
import AddNewButtons from '../../components/AddNewButtons/AddNewButtons';
// import { useEffect, useState } from 'react';
// import { Routes, Route } from 'react-router-dom';

// import PrivateRoute from '../../utils/PrivateRoute';
// import axios from 'axios';
// import useAuth from '../../hooks/useAuth';

const HomePage = ({ user, token, goals }) => {
  console.log(user);
  // const [user, token] = useAuth();

  return (
    <div className='container-fluid'>
      <h1>Welcome back, {user.first_name}!</h1>
      <div className='row'>
        <div className='feature-2'>
          <AddNewButtons />
        </div>
        {/* <div className='col-md-6'>
          <StudyTracker />
        </div> */}
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div className='feature-1'>
            <h3>Current Goal:</h3>
            
            {/* Add Current Goal from app.js here  */}
          </div>
        </div>

        <div className='col-md-3'>
          <h3>Top 3 Courses</h3>
          {/* Add 3 courses from app.js here  */}
        </div>
        <div className='col-md-3'>
          <h3>Top 3 Projects</h3>
          {/* Add 3 projects from app.js here  */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

//Past Code saved @ _scratch-temp > scratch-HomePage.js
