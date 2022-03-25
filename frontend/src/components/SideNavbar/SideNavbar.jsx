import React from 'react';
// import { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import AuthContext from '../../context/AuthContext';
import useAuth from '../../hooks/useAuth';
import './SideNavbar.css';

import { Stack, Link, makeStyles, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SideNavbar = () => {
  const [user] = useAuth();
  const navigate = useNavigate();

  // create all listed items into a sideNavbar-menu-link component and instantiate onto the page to practice DRY

  // const useStyles = makeStyles({
  //   text: {
  //     color: 'ffd6a7',
  //     // fontSize: '17px',
  //   },
  // });
  // const classes = useStyles();
  return (
    <>
      <div className='sideNavbar'>
        {user && (
          <Stack
            direction={{ xs: 'column' }}
            alignItems='flex-start'
            padding-top={10}
            justifyContent='center'
            spacing={2}
            gap={2}
            // className={classes.text}
            style={{ textDecoration: 'none', color: '#FFD6A7' }}
          >
            <Button
              onClick={() => {
                navigate('/');
              }}
            >
              Start Here
            </Button>
            <Button
              onClick={() => {
                navigate('/courses/');
              }}
            >
              Courses
            </Button>
            <Button
              onClick={() => {
                navigate('/projects/');
              }}
            >
              Projects
            </Button>
            <Button
              onClick={() => {
                navigate('/goals/');
              }}
            >
              Goals
            </Button>
          </Stack>
        )}
      </div>
    </>
  );
};

export default SideNavbar;

{
  /* {user && (
        <div className='sideNavbar'>
          <nav>
            <ul>
              <li>
                <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                  <b>Start Here</b>
                </Link>
              </li>
              <li>
                <Link
                  to='/courses/'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <b>Courses</b>
                </Link>
              </li>
              <li>
                <Link
                  to='/projects/'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <b>Projects</b>
                </Link>
              </li>
              <li>
                <Link
                  to='/goals/'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <b>Goals</b>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )} </>*/
}
