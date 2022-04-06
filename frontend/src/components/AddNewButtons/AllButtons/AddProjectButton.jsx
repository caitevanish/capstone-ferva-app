import React, { useState } from 'react';
import { Stack } from '@mui/material';
import './AddNewButtons.css';
import AddCourseForm from '../../Forms/Courses/AddCourseForm';
import Modal from 'react-modal';

function AddProjectButton({ height, sx }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <Stack direction='column' spacing={0} sx={sx}>
        <Modal isOpen={modalIsOpen}>
          <AddCourseForm setModalIsOpen={setModalIsOpen} />
        </Modal>

        <button type='button' onClick={() => setModalIsOpen(true)}>
          <img src='/images/add-project.png' height={height} />
        </button>
        <p>Project</p>
      </Stack>
    </div>
  );
}

export default AddProjectButton;
