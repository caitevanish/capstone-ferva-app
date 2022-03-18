import React from 'react';
import { useEffect, useState } from 'react';

import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const CoursesMainPage = () => {
  const [user, token] = useAuth();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        let response = await axios.get(
          'http://127.0.0.1:8000/api/courses/all/',
          {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          }
        );
        setCourses(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCourses();
  }, [token]);
  return (
    <div className=''>
      <h1>Courses Main Page for {user.username}</h1>
      <h2>THIS WILL BECOME A TABLE:</h2>
      {courses &&
        courses.map((course) => (
          <p key={course.id}>
            {course.title} {course.company} {course.price}{' '}
            {course.purchase_date}
          </p>
        ))}
    </div>
  );
};

export default CoursesMainPage;
