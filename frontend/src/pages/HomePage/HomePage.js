import React from 'react';
import StudyTracker from '../../components/StudyTracker/StudyTracker';
import DeadlineTable from '../../components/DeadlineTable/DeadlineTable';
// import { useEffect, useState } from 'react';
// import { Routes, Route } from 'react-router-dom';

// import PrivateRoute from '../../utils/PrivateRoute';
// import axios from 'axios';
// import useAuth from '../../hooks/useAuth';

const HomePage = ({ user, token }) => {
  console.log(user);
  // const [user, token] = useAuth();

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h1>Welcome back, {user.first_name}!</h1>
        <div className='row'>
          <StudyTracker />
        </div>

        <div className='row'>
          <DeadlineTable />
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <div className='dash-left'>
              <h3>
                Feature here: <br></br>Top 3 courses table
              </h3>
              {/* Top 3 Courses Table */}
            </div>
          </div>
          <div className='col-md-6'>
            <div className='dash-right'>
              <h3>
                Feature here: <br></br>Top 3 courses table
              </h3>
              {/* Top 3 Projects Table */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

//Past Code saved @ _scratch-temp > scratch-HomePage.js
