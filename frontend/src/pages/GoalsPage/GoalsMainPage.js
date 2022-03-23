import React from 'react';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';

import useAuth from '../../hooks/useAuth';
import AddGoalForm from '../../components/Forms/Goals/AddGoalForm' 

const GoalsMainPage = () => {
  //Use const or function?
  const [user, token] = useAuth();

  useEffect(() => {}, [token]);

  return (
    <div className='container'>
      <h1>Goals Main Page for {user.username}</h1>
      <button onClick={() => setModalIsOpen(true)}>Add a Goal</button>
      <Modal isOpen={modalIsOpen}>
        <AddGoalForm setModalIsOpen={setModalIsOpen} rqstRld={rqstRld} />
      </Modal>
    </div>
  );
};

export default GoalsMainPage;
