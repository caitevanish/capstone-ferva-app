import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CourseDetailPage = () => {
  const [, token] = useAuth();
  const [courseDetails, setCourseDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        let response = await axios.get(
          `http://127.0.0.1:8000/api/courses/course/${id}/`,
          {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          }
        );
        setCourseDetails(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCourseDetails();
  }, [id]); //useEffect gets triggered once [], or if the values change [token], [id]

  // console.log('Testing', courses[1]);
  // console.log('Testing', id);

  return (
    <div>
      <h1>Details for {courseDetails.title} Course</h1>
      <h3>Company:</h3>
      <p>{courseDetails.company}</p>
      <h3>Price:</h3>
      <p>{courseDetails.price}</p>
      <h3>Payment Type:</h3>
      <p>{courseDetails.purchase_type}</p>
      <h3>Purchase Date:</h3>
      <p>{courseDetails.purchase_date}</p>
    </div>
  );
};

export default CourseDetailPage;
