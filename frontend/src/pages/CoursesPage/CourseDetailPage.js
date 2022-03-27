import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Modal from 'react-modal';
import UpdateCourseForm from '../../components/Forms/Courses/UpdateCourseForm';
import axios from 'axios';
import Button from '@mui/material/Button';

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
    <div className='container-fluid'>
      <Link to={'/courses/'} className='button'>
        Back to Courses
      </Link>
      <div className='row'>
        <h1>Details for {courseDetails.title} Course</h1>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <div className='details-left'>
            <div className='row'>
              <h4>Course:</h4>
              <p>{courseDetails.title}</p>
            </div>
            <div className='row'></div>
            <h4>Company:</h4>
            <p>{courseDetails.company}</p>
            <div className='row'>
              <h4>Purchase Date:</h4>
            </div>
            <p>{courseDetails.purchase_date}</p>
            <h4>I want to finish this course by:</h4>
            <p>{courseDetails.deadline_date}</p>
            <h4>Price:</h4>
            <p>{courseDetails.price}</p>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='details-right'>
            <div className='row'>
              <h4>By completing this course, wouldn't it be great if...</h4>
              <p>{}</p> {/* Add great_if to model and migrate */}
              {/* Add edit course button */}
            </div>
            <div className='row'>
              <h4>This course will help me by...</h4>
              <p>{}</p> {/* Add help_me_to to model and migrate */}
            </div>
          </div>
        </div>
      </div>
      <div className='details-buttons'>
        <Button
          className='detail-btn'
          color='warning'
          variant='outlined'
          onClick={(event) => handleDelete(event, courseDetails.id)}
        >
          Delete
        </Button>
        <Button
          className='detail-btn'
          color='success'
          variant='contained'
          onClick={() => setModalIsOpen(true)}
        >
          Update
        </Button>
      </div>
      <Modal isOpen={modalIsOpen}>
        <UpdateCourseForm
          setModalIsOpen={setModalIsOpen}
          id={id}
          courseDetails={courseDetails}
          dtlRld={dtlRld}
          rqstRld={rqstRld}
        />
      </Modal>
      {/* <Button variant='contained'>Delete</Button> */}
      {/* <button
        onClick={(event) => handleDelete(event, courseDetails.id)}
        className='btn-danger'
      >
        Delete
      </button>\
      
      <button onClick={() => setModalIsOpen(true)}>Update</button>*/}
    </div>
  );
};

export default CourseDetailPage;

{
  /* <h3>Payment Type:</h3>
<p>{courseDetails.purchase_type}</p> */
}
