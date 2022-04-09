import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Modal from 'react-modal';
import UpdateGoalForm from '../../components/Forms/Goals/UpdateGoalForm';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

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
    <div className='container-fluid'>
      {/* <Link to={'/goals/'} className='button'>
        Back to Goals
      </Link> */}
      <div className='row'>
        <h1>Details for {goalDetails.title} Goal</h1>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <div className='details-left'>
            <div className='row'>
              <h4>Goal Name</h4>
              <p>{goalDetails.title}</p>
            </div>
            <div className='row'>
              <h4>Description</h4>
              <p>{goalDetails.description}</p>
            </div>
            <div className='row'>
              <h4>Start Date:</h4>
              <p>{goalDetails.start_date}</p>
              <h4>Deadline:</h4>
              <p>{goalDetails.deadline_date}</p>
            </div>
            <div className='row'>
              <h4>By completing this course, wouldn't it be great if...</h4>
              <p>{goalDetails.notes}</p>
              <div className='details-buttons'>
                <Stack direction='row' spacing={2} justifyContent='right'>
                  <Button
                    className='detail-btn'
                    color='warning'
                    variant='outlined'
                    onClick={(event) => handleDelete(event, goalDetails.id)}
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
                </Stack>
              </div>
            </div>
          </div>
        </div>

        <Modal isOpen={modalIsOpen}>
          <UpdateGoalForm
            setModalIsOpen={setModalIsOpen}
            id={id}
            goalDetails={goalDetails}
            dtlRld={dtlRld}
            rqstRld={rqstRld}
          />
        </Modal>
      </div>
    </div>
  );
};

export default GoalDetailPage;

{
  /* <div className='col-md-4'>
          <div className='details-right'>
            <div className='row'>
              <h4>Milestones:</h4>
              <p></p>
            </div>

            <div className='row'>
              <h4>Projects List</h4>
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <h3>VISIONBOARD!</h3>
      
      </div> */
}
