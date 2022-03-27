import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';

import useAuth from '../../hooks/useAuth';
import AddGoalForm from '../../components/Forms/Goals/AddGoalForm';
import GoalsTable from '../../components/GoalsTable/GoalsTable';
import { Button } from '@mui/material';

const GoalsMainPage = (props) => {
  //Use const or function?
  const { goals, rqstRld } = props;
  const [user] = useAuth();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h1>Goals Main Page for {user.username}</h1>
      </div>
      <div className='row'>
        <div className='col-md-7'>
          <div className='feature-5'>
            <Button
              color='secondary'
              variant='contained'
              onClick={() => setModalIsOpen(true)}
            >
              Add a Goal
            </Button>
            <GoalsTable goals={goals} />
          </div>
        </div>
        <div className='col-md-5'>
          <h2>Goal column 2</h2>
          <div className='feature-6'>{/* <component /> */}</div>
        </div>
      </div>

      <Modal isOpen={modalIsOpen}>
        <AddGoalForm setModalIsOpen={setModalIsOpen} rqstRld={rqstRld} />
      </Modal>
    </div>
  );
};

export default GoalsMainPage;
