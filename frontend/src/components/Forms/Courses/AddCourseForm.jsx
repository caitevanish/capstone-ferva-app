import React, { useState } from 'react';
import InputField from '../../InputField/InputField';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import Button from '@mui/material/Button';

const AddCourseForm = ({ setModalIsOpen, rqstRld }) => {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const customer = user.user_id;
  const [user, token] = useAuth();
  const [newTitle, setNewTitle] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [newPurchaseDate, setNewPurchaseDate] = useState('');
  const [newPrice, setNewPrice] = useState('');
  // const [newPurchaseType, setNewPurchaseType] = useState('');
  const [newBeGreatIf, setNewBeGreatIf] = useState('');
  const [newHelpMeTo, setNewHelpMeTo] = useState('');

  const handleTitle = (event) => setNewTitle(event.target.value);
  const handleCompany = (event) => setNewCompany(event.target.value);
  const handlePurchaseDate = (event) => setNewPurchaseDate(event.target.value);
  const handlePrice = (event) => setNewPrice(event.target.value);
  // const handlePurchaseType = (event) => setNewPurchaseType(event.target.value);
  const handleBeGreatIf = (event) => setNewBeGreatIf(event.target.value);
  const handleHelpMeTo = (event) => setNewHelpMeTo(event.target.value);

  function handleSubmit(event) {
    event.preventDefault();
    let newCourse = {
      title: newTitle,
      company: newCompany,
      purchase_date: newPurchaseDate,
      price: newPrice,
      // purchase_type: newPurchaseType,
      be_great: newBeGreatIf,
      help_me_to: newHelpMeTo,
    };
    console.log(user);
    addCourse(newCourse);
  }

  async function addCourse(course) {
    try {
      // console.log('course test', course);
      // console.log('token test', token);
      let result = await axios.post(
        `http://127.0.0.1:8000/api/courses/add/`,
        course,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );
      console.log(result);

      if (result.request.status === 201) {
        rqstRld(); //THIS WORKS
        setModalIsOpen(false);
        return;
      }
    } catch (error) {
      console.log(error.message);
    }
    return;
  }

  return (
    <div className='form-container'>
      <h2 className='form-header'>Add a New Course</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label='Course Title' //h3 styling
          htmlFor='course-title'
          value={newTitle}
          onChange={handleTitle}
        />

        <InputField
          label='Company' //h3 styling
          htmlFor='course-company'
          value={newCompany}
          onChange={handleCompany}
        />

        <InputField
          label='Date of Purchase' //h3 styling
          htmlFor='course-purchaseDate'
          type='date'
          value={newPurchaseDate}
          onChange={handlePurchaseDate}
        />

        <InputField
          label='Price' //h3 styling
          htmlFor='course-price'
          type='number'
          value={parseInt(newPrice)}
          onChange={handlePrice}
        />

        {/* <InputField
          label='Purchase Type' //h3 styling
          htmlFor='course-purchaseType'
          value={newPurchaseType}
          onChange={handlePurchaseType}
        /> */}
        <InputField
          label="By completing this course, wouldn't it be great if..." //h3 styling
          htmlFor='course-beGreatIf'
          value={newBeGreatIf}
          onChange={handleBeGreatIf}
        />
        <InputField
          label='This course will help me by...' //h3 styling
          htmlFor='course-helpMeTo'
          value={newHelpMeTo}
          onChange={handleHelpMeTo}
        />

        <Button
          className='detail-btn'
          color='primary'
          variant='contained'
          onClick={() => setModalIsOpen(false)}
        >
          Close
        </Button>

        <Button
          type='submit'
          className='detail-btn'
          color='success'
          variant='contained'
        >
          Add Course
        </Button>
      </form>
    </div>
  );
};

export default AddCourseForm;
