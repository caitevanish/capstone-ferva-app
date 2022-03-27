import React from 'react';
import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import './TopNavbar.css';

const TopNavbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className='site-container'>
      <div className='topNavbar'>
        <ul>
          <li className='brand'>
            <Link to='/' style={{ textDecoration: 'none', color: '#FFD6A7' }}>
              <b>FERVA</b>
            </Link>
          </li>
          <li>
            {user ? (
              <button onClick={logoutUser}>Logout</button>
            ) : (
              <button onClick={() => navigate('/login')}>Login</button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavbar;
