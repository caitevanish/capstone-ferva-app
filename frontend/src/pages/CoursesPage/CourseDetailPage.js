import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useParams, Link, Outlet } from 'react-router-dom';
import axios from 'axios';

const CourseDetailPage = () => {
  const [, token] = useAuth();
  const [courseDetails, setCourseDetails] = useState([]);
  const { id } = useParams();

  //Ask Dan or teachers how to
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

  // Set Delete up like fetchCourseDetails?

  async function handleDelete(event, id) {
    event.preventDefault();
    //have pop up window to warn user
    try {
      let result = await axios.delete(
        `http://127.0.0.1:8000/api/courses/${id}/delete/`,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );
      console.log(result);
      //return back to all courses page
    } catch {
      console.log('error. Something went wrong');
    }
    return;
  }

  return (
    <div>
      {/* Add back button */}
      <Link to={'/courses/'} className='button'>
        Back to Courses
      </Link>
      <h1>Details for {courseDetails.title} Course</h1>
      {/* <Outlet></Outlet> */}
      <div className='row'>
        <h3>Company:</h3>
        <p>{courseDetails.company}</p>
        <h3>Purchase Date:</h3>
        <p>{courseDetails.purchase_date}</p>
      </div>
      <div className='row'>
        <h3>Price:</h3>
        <p>{courseDetails.price}</p>
        <h3>Payment Type:</h3>
        <p>{courseDetails.purchase_type}</p>
      </div>
      <h3>I want to finish this course by:</h3>
      <p>{courseDetails.deadline_date}</p>{' '}
      {/* Add deadline_date to model and migrate */}
      <div className='col-1'>
        <h3>This course will help me by...</h3>
        <p>{}</p> {/* Add help_me_to to model and migrate */}
      </div>
      <h3>By completing this course, wouldn't it be great if...</h3>
      <p>{}</p> {/* Add great_if to model and migrate */}
      {/* Add edit course button */}
      <button>Update</button>
      {/* <Link to={'#'} className='button'>
        Update Course Info
      </Link> */}
      {/* Add Delete course button -- pop up warning! */}
      <button
        onClick={(event) => handleDelete(event, courseDetails.id)}
        className='btn-danger'
      >
        Delete
      </button>
    </div>
  );
};

export default CourseDetailPage;
