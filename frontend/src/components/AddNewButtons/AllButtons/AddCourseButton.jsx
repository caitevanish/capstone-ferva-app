import React, { useState } from 'react';
import { Stack } from '@mui/material';
import './AddNewButtons.css';
import AddCourseForm from '../../Forms/Courses/AddCourseForm';
import Modal from 'react-modal';

function AddCourseButton({ height, sx }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <Stack direction='column' spacing={0} sx={sx}>
        <button type='button' onClick={() => setModalIsOpen(true)}>
          <img src='/images/add-course.png' height={height} />
        </button>
        <p>Course</p>

        <Modal isOpen={modalIsOpen}>
          <AddCourseForm setModalIsOpen={setModalIsOpen} />
        </Modal>
      </Stack>
    </div>
  );
}

export default AddCourseButton;
