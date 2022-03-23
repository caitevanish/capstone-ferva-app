import React, { useState } from 'react';
import InputField from '../../InputField/InputField';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

const AddProjectForm = (props) => {
  const { setModalIsOpen, rqstRld } = props;
  const [, token] = useAuth();
  const [newTitle, setNewTitle] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [newPurchaseDate, setNewPurchaseDate] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newPurchaseType, setNewPurchaseType] = useState('');

  const handleTitle = (event) => setNewTitle(event.target.value);
  // const handle = event =>
  // const handle = event =>
  // const handle = event =>
  // const handle = event =>
  // const handle = event =>

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

export default AddProjectForm;
