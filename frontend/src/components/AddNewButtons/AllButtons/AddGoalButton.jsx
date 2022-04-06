import React, { useState } from 'react';
import { Stack } from '@mui/material';
import './AddNewButtons.css';
import AddGoalForm from '../../Forms/Goals/AddGoalForm';
import Modal from 'react-modal';

function AddGoalButton({ height, sx }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Stack direction='column' spacing={0} sx={sx}>
        <button type='button' onClick={() => setModalIsOpen(true)}>
          <img src='/images/add-goal.png' height={height} />
        </button>
        <p>Goal</p>
      </Stack>

      <Modal isOpen={modalIsOpen}>
        <AddGoalForm setModalIsOpen={setModalIsOpen} />
      </Modal>
    </>
  );
}

export default AddGoalButton;
