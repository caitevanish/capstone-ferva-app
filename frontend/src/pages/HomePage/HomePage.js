import React from 'react';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages Imports
import CoursesMainPage from '../../pages/CoursesPage/CoursesMainPage';

// Component Imports
import SideNavbar from '../../components/SideNavbar/SideNavbar';

// Util Imports
import PrivateRoute from '../../utils/PrivateRoute';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    //change the variable names from fetchCars to something else

    const fetchCourses = async () => {
      // async function fetchCourses(){
      try {
        //Check the URLs: Is it port 3000 or 8000??

        let response = await axios.get(
          'http://127.0.0.1:8000/api/courses/all/',
          {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          }
        );
        console.log(user);
        setCourses(response.data);
      } catch (error) {
        console.log(courses);
      }
    };
    fetchCourses();
  }, [token]);

  return (
    <div>
      {/* Navbar  */}
    
      <div className='container'>
        <h1>Home Page for {user.username}!</h1>
        {/* {courses &&
          courses.map((course) => (
            <p key={course.id}>
              Title:{course.title} Company:{course.company} price:{course.price}
            </p>
          ))} */}
      </div>
    </div>
  );
};

export default HomePage;
