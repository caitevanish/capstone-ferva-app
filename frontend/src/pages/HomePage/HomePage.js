import React, { useEffect, useState } from 'react';
import AddNewButtons from '../../components/AddNewButtons/AddNewButtons';
import { Paper, Box, Typography } from '@mui/material';
import { width } from '@mui/system';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/material';

const HomePage = ({ user, token, goals, courses, projects }) => {
  const [currentGoal, setCurrentGoal] = useState({});
  const [topCourses, setTopCourses] = useState([]);
  const [topProjects, setTopProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setHomeGoal(goals);
    setHomeCourses(courses);
    console.log(topCourses);
    setHomeProjects(projects);
  }, [goals, courses]);

  async function setHomeGoal(goals) {
    let goal = goals[0];
    // console.log('Current Goal title: ', goal.title);
    // console.log('Current Goal description: ', goal.description);
    setCurrentGoal(goal);
    return;
  }

  async function setHomeCourses(courses) {
    //create empty list to hold 3 courses
    console.log(courses);
    let threeCourses = courses.slice(0, 3);
    //iterate over the first 3 courses, add them to topCourses list
    console.log('Top three courses', threeCourses);
    setTopCourses(threeCourses);
    return;
  }

  async function setHomeProjects(projects) {
    let threeProjects = projects.slice(0, 3);
    console.log('Top 3 projects', threeProjects);
    setTopProjects(threeProjects);
    return;
  }

  // const useStyles = makeStyles({
  //   paper: {
  //     marginTop: '8',
  //     display: 'flex',
  //     flexDirection: 'column',
  //     alignItems: 'center',
  //   },
  // });

  // const classes = useStyles();

  return (
    <div className='container-fluid'>
      <h1>Welcome back, {user.first_name}!</h1>
      <div className='row'>
        <div className='feature-2'>
          <AddNewButtons />
        </div>
      </div>
      <div className='row'>
        <h3>Current Goal:</h3>
        <div style={{ marginLeft: '38%' }}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              width: 550,
            }}
          >
            <Paper sx={{ alignItems: 'center' }}>
              <Typography
                sx={{ padding: '15px' }}
                variant='h5'
                color='secondary'
                align='center'
                gutterBottom
              >
                {currentGoal.title}
              </Typography>
              <Typography
                sx={{ padding: '15px' }}
                variant='body'
                align='center'
                gutterBottom
              >
                {currentGoal.description}
              </Typography>
              <p></p>
            </Paper>
          </Box>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-5'>
          <div style={{ marginLeft: '60%', marginBottom: '20%' }}>
            <h3 style={{ paddingLeft: '40%' }}>Top 3 Courses</h3>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'left',
                width: 750,
              }}
            >
              <Paper>
                {topCourses &&
                  topCourses.length > 0 &&
                  topCourses.map((course) => {
                    return (
                      <li key={course.id}>
                        <ul>
                          {course.title}
                          <Button
                            color='tertiary'
                            onClick={() => {
                              navigate(`/course/${course.id}/`);
                            }}
                          >
                            Details
                          </Button>
                        </ul>
                      </li>
                    );
                  })}
              </Paper>
            </Box>
          </div>
        </div>
        <div className='col-md-4'>
          <div style={{ marginLeft: '30%' }}>
            <h3>
              Top 3 <br></br>Projects
            </h3>
            <Box
              fontWeight='fontWeightRegular'
              m={1}
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                width: 750,
              }}
            >
              <Paper>
                {topProjects &&
                  topProjects.length > 0 &&
                  topProjects.map((project) => {
                    return (
                      <li key={project.id}>
                        <ul>
                          {project.title}
                          <Button
                            color='tertiary'
                            onClick={() => {
                              navigate(`/project/${project.id}/`);
                            }}
                          >
                            Details
                          </Button>
                        </ul>
                      </li>
                    );
                  })}
              </Paper>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

//Past Code saved @ _scratch-temp > scratch-HomePage.js
