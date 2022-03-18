import React from 'react';
// import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import AuthContext from '../../context/AuthContext';
import useAuth from '../../hooks/useAuth';
// import "./NavBar.css";

const SideNavbar = () => {
  const [user, token] = useAuth();

  // create all listed items into a sideNavbar-menu-link component and instantiate onto the page to practice DRY

  return (
    <>
      {user && (
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
                  to='/courses/all/'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <b>Courses</b>
                </Link>
              </li>
              <li>
                <Link
                  to='/projects/all/'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <b>Projects</b>
                </Link>
              </li>
              <li>
                <Link
                  to='/goals/all/'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <b>Goals</b>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default SideNavbar;