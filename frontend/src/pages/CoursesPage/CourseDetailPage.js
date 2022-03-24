import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Modal from 'react-modal';
import UpdateCourseForm from '../../components/Forms/Courses/UpdateCourseForm';
import axios from 'axios';

const CourseDetailPage = (props) => {
  const [user, token] = useAuth();
  const { rqstRld } = props;
  const [courseDetails, setCourseDetails] = useState([]);
  const { id } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const [detailReload, setDetailReload] = useState(false);

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
    //useEffect gets triggered once [], or if the values change [token], [id], or can take multiple parameters!
  }, [id, detailReload]);

  const dtlRld = () => {
    //Reload the Main Courses table
    setDetailReload(!detailReload);
  };

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
      rqstRld(); //Request to reload page
      navigate('/courses/');
    } catch {
      console.log('error. Something went wrong');
    }
    return;
  }

  return (
    <div>
      <Link to={'/courses/'} className='button'>
        Back to Courses
      </Link>
      <h1>Details for {courseDetails.title} Course</h1>
      <div className='row'>
        <h3>Course:</h3>
        <p>{courseDetails.title}</p>
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
      <button onClick={() => setModalIsOpen(true)}>Update</button>
      <Modal isOpen={modalIsOpen}>
        <UpdateCourseForm
          setModalIsOpen={setModalIsOpen}
          id={id}
          courseDetails={courseDetails}
          dtlRld={dtlRld}
          rqstRld={rqstRld}
        />
      </Modal>
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
