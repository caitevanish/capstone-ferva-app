import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AddCourseForm = ({ setModalIsOpen, setCourses, rqstRld }) => {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const [, token] = useAuth();
  const [newTitle, setNewTitle] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [newPurchaseDate, setNewPurchaseDate] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newPurchaseType, setNewPurchaseType] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    let newCourse = {
      title: newTitle,
      company: newCompany,
      purchase_date: newPurchaseDate,
      price: newPrice,
      purchase_type: newPurchaseType,
      notes: '',
    };
    addCourse(newCourse);
    //close modal? modal is open=false?
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
        <label htmlFor='course-title'>
          Course Title
          <input
            type='text'
            onChange={(event) => setNewTitle(event.target.value)}
            value={newTitle}
            className='form-control'
          />
        </label>
        <label htmlFor='course-company'>
          Company
          <input
            type='text'
            onChange={(event) => setNewCompany(event.target.value)}
            value={newCompany}
            className='form-control'
          />
        </label>
        <label htmlFor='course-purchaseDate'>
          Date of Purchase
          <input
            type='date'
            onChange={(event) => setNewPurchaseDate(event.target.value)}
            value={newPurchaseDate}
            className='form-control'
          />
        </label>
        <label htmlFor='course-price'>
          Price
          <input
            type='number'
            onChange={(event) => setNewPrice(event.target.value)}
            value={parseInt(newPrice)}
            className='form-control'
          />
        </label>
        <label htmlFor='course-purchaseType'>
          Purchase Type
          <input
            type='text'
            onChange={(event) => setNewPurchaseType(event.target.value)}
            value={newPurchaseType}
            className='form-control'
          />
        </label>

        <button onClick={() => setModalIsOpen(false)}>Close</button>
        <button type='submit'>Add Course</button>
      </form>
    </>
  );
};

export default AddCourseForm;
