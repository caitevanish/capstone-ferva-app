import React, { useState } from 'react';
import InputField from '../../InputField/InputField';
import useAuth from '../../../hooks/useAuth';

const AddGoalForm = (props) => {
  const {setModalIsOpen, rqstRld} = props;
  const [newTitle, setNewTitle] = useState('');

  const handleTitle = (event) => setNewTitle(event.target.value);

  return (
    <>
      <InputField
        label='Course Title'
        value={newTitle}
        onChange={handleTitle}
      />
    </>
  );
};

export default AddGoalForm;
