import React, { useState } from 'react';
import InputField from '../../InputField/InputField';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const AddCourseForm = ({ user, setModalIsOpen, rqstRld }) => {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const customer = user.user_id;
  const [, token] = useAuth();
  const [newTitle, setNewTitle] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [newPurchaseDate, setNewPurchaseDate] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newPurchaseType, setNewPurchaseType] = useState('');

  const handleTitle = (event) => setNewTitle(event.target.value);
  const handleCompany = (event) => setNewCompany(event.target.value);
  const handlePurchaseDate = (event) => setNewPurchaseDate(event.target.value);
  const handlePrice = (event) => setNewPrice(event.target.value);
  const handlePurchaseType = (event) => setNewPurchaseType(event.target.value);

  function handleSubmit(event) {
    event.preventDefault();
    let newCourse = {
      title: newTitle,
      company: newCompany,
      purchase_date: newPurchaseDate,
      price: newPrice,
      purchase_type: newPurchaseType,
      notes: '',
      user: user.user_id,
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
    <>
      <h2 className='form-header'>Add a New Course</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label='Course Title' //h3 styling
          htmlFor='course-title'
          value={newTitle}
          onChange={handleTitle}
        />
        {/* <label htmlFor='course-title'>
          Course Title
          <input
            type='text'
            onChange={(event) => setNewTitle(event.target.value)}
            value={newTitle}
            className='form-control'
          />
        </label> */}
        <InputField
          label='Company' //h3 styling
          htmlFor='course-company'
          value={newCompany}
          onChange={handleCompany}
        />
        {/* <label htmlFor='course-company'>
          Company
          <input
            type='text'
            onChange={(event) => setNewCompany(event.target.value)}
            value={newCompany}
            className='form-control'
          />
        </label> */}
        <InputField
          label='Date of Purchase' //h3 styling
          htmlFor='course-purchaseDate'
          type='date'
          value={newPurchaseDate}
          onChange={handlePurchaseDate}
        />
        {/* <label htmlFor='course-purchaseDate'>
          Date of Purchase
          <input
            type='date'
            onChange={(event) => setNewPurchaseDate(event.target.value)}
            value={newPurchaseDate}
            className='form-control'
          />
        </label> */}
        <InputField
          label='Price' //h3 styling
          htmlFor='course-price'
          type='number'
          value={parseInt(newPrice)}
          onChange={handlePrice}
        />
        {/* <label htmlFor='course-price'>
          Price
          <input
            type='number'
            onChange={(event) => setNewPrice(event.target.value)}
            value={parseInt(newPrice)}
            className='form-control'
          />
        </label> */}
        <InputField
          label='Purchase Type' //h3 styling
          htmlFor='course-purchaseType'
          value={newPurchaseType}
          onChange={handlePurchaseType}
        />
        {/* <label htmlFor='course-purchaseType'>
          Purchase Type
          <input
            type='text'
            onChange={(event) => setNewPurchaseType(event.target.value)}
            value={newPurchaseType}
            className='form-control'
          />
        </label> */}

        <button onClick={() => setModalIsOpen(false)}>Close</button>
        <button type='submit'>Add Course</button>
      </form>
    </>
  );
};

export default AddCourseForm;
