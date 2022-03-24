import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Modal from 'react-modal';
import UpdateGoalForm from '../../components/Forms/Goals/UpdateGoalForm';
import axios from 'axios';

const GoalDetailPage = (props) => {
  const [, token] = useAuth();
  const { rqstRld } = props;
  const { id } = useParams();
  const [goalDetails, setGoalDetails] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const [detailReload, setDetailReload] = useState(false);

  useEffect(() => {
    fetchGoalDetails();
  }, [id, detailReload]);

  async function fetchGoalDetails() {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/goals/goal/${id}/`,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );
      setGoalDetails(response.data);
    } catch (error) {
      // console.log(error.message);
    }
  }

  async function handleDelete(event, id) {
    event.preventDefault();
    //have pop up window to warn user
    try {
      let result = await axios.delete(
        `http://127.0.0.1:8000/api/goals/${id}/delete/`,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );
      console.log(result);
      rqstRld(); //Request to reload page
      navigate('/goals/');
    } catch {
      console.log('error. Something went wrong');
    }
    return;
  }

  const dtlRld = () => {
    //Reload the Main Courses table
    setDetailReload(!detailReload);
  };
  return (
    <div className='container'>
      <Link to={'/goals/'} className='button'>
        Back to Goals
      </Link>

      <h1>Details for {goalDetails.title} Goal</h1>

      <div className='row'>
        <h3>Goal Name</h3>
        <p>{goalDetails.title}</p>
      </div>
      <div className='row'>
        <h3>Description</h3>
        <p>{goalDetails.description}</p>
      </div>
      <div className='row'>
        <h3>Start Date:</h3>
        <p>{goalDetails.start_date}</p>
        <h3>Deadline:</h3>
        <p>{goalDetails.deadline_date}</p>
      </div>
      <div className='col-1'>
        <h3>By completing this course, wouldn't it be great if...</h3>
        <p>{}</p> {/* Add great_if to model and migrate */}
      </div>
      <button onClick={() => setModalIsOpen(true)}>Update</button>
      <Modal isOpen={modalIsOpen}>
        <UpdateGoalForm
          setModalIsOpen={setModalIsOpen}
          id={id}
          goalDetails={goalDetails}
          dtlRld={dtlRld}
          rqstRld={rqstRld}
        />
      </Modal>
      <button
        onClick={(event) => handleDelete(event, goalDetails.id)}
        className='btn-danger'
      >
        Delete
      </button>
    </div>
  );
};

export default GoalDetailPage;
