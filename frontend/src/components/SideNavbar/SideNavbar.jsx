import React from 'react';
// import { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import AuthContext from '../../context/AuthContext';
import useAuth from '../../hooks/useAuth';
import './SideNavbar.css';

import { Stack, Link } from '@mui/material';

const SideNavbar = () => {
  const [user] = useAuth();

  // create all listed items into a sideNavbar-menu-link component and instantiate onto the page to practice DRY
   

  return (
    <>
      <div className='sideNavbar'>
        {user && (
          <Stack
            direction={{ xs: 'column' }}
            alignItems='flex-start'
            justifyContent='center'
            spacing={2}
            gap={2}
            className='text'
            style={{ textDecoration: 'none', color: '#FFD6A7' }}
          >
            <Link href='/' underline='none'>
              {'Start Here'}
            </Link>

            <Link href='/courses/' underline='none'>
              {'Courses'}
            </Link>

            <Link href='/projects/' underline='none'>
              {'Projects'}
            </Link>
            <Link href='/goals/' underline='none'>
              {'Goals'}
            </Link>
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
