import React, { useEffect, useState } from 'react';
import AddNewButtons from '../../components/AddNewButtons/AddNewButtons';
import { Paper } from '@mui/material';
import { width } from '@mui/system';

const HomePage = ({ user, token, goals }) => {
  const [currentGoal, setCurrentGoal] = useState({});
  // const [topCourses, setTopCourses] = useState([]);

  useEffect(() => {
    setHomeGoal(goals);
    console.log('current goal:', currentGoal);
  }, [goals]);

  async function setHomeGoal(goals) {
    let goal = goals[0];
    // let goalTitle = goal.title;
    // let goalDescription = goal.description;
    console.log('Current Goal title: ', goal.title);
    console.log('Current Goal description: ', goal.description);

    setCurrentGoal(goal);
    return;
  }

  return (
    <div className='container-fluid'>
      <h1>Welcome back, {user.first_name}!</h1>
      <div className='row'>
        <div className='feature-2'>
          <AddNewButtons />
        </div>
      </div>
      <div className='row'>
        <div className='row'>
          <div className=''>
            <h3>Current Goal:</h3>
            <Paper>
              <h3>{currentGoal.title}</h3>
              <p>{currentGoal.description}</p>
            </Paper>
          </div>
        </div>
        <div className='col-md-4'></div>

        <div className='col-md-3'>
          <h3>Top 3 Courses</h3>
          <Paper>
            <p>Courses</p>
          </Paper>
        </div>
        <div className='col-md-3'>
          <h3>Top 3 Projects</h3>
          <Paper>
            <p>Projects</p>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

//Past Code saved @ _scratch-temp > scratch-HomePage.js
