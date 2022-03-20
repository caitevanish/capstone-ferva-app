import React from 'react';
import { useEffect, useState } from 'react';
import CoursesTable from '../../components/CoursesTable/CoursesTable';

import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const CoursesMainPage = ({ courses, setCourses }) => {
  const [user, token] = useAuth();
  // const [courses, setCourses] = useState([]);

  //-----------To-Do:
  //BUG FIX: As of now, when I switch to the course amin page i need to reload the screen to see the table filled with details. No good! Tried using the useEffect which calls setCourses, didn't work.

  // useEffect(() => {
  //   setCourses();
  // }, []);

  //-----------To-Do:

  // function handleClick() {
  //   //this will open the modal for a user to add a new course
  // }

  return (
    <div className='container'>
      <h1>Courses Main Page for {user.username}</h1>
      <button>Add a Course</button>
      <CoursesTable courses={courses} />
    </div>
  );
};

export default CoursesMainPage;

//Past Code saved @ _scratch-temp > scratch-CoursesMain.js
