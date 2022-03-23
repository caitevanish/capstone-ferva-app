import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';

import useAuth from '../../hooks/useAuth';
import AddGoalForm from '../../components/Forms/Goals/AddGoalForm';
import GoalsTable from '../../components/GoalsTable/GoalsTable';

const GoalsMainPage = (props) => {
  //Use const or function?
  const { goals, rqstRld } = props;
  const [user] = useAuth();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className='container'>
      <h1>Goals Main Page for {user.username}</h1>
      <button onClick={() => setModalIsOpen(true)}>Add a Goal</button>
      <Modal isOpen={modalIsOpen}>
        <AddGoalForm setModalIsOpen={setModalIsOpen} rqstRld={rqstRld} />
      </Modal>

      <GoalsTable goals={goals} />
    </div>
  );
};

export default GoalsMainPage;
