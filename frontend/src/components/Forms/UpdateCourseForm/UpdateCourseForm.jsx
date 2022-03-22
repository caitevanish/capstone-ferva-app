import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateCourseForm = (props) => {
  const { setModalIsOpen, courseDetails, rqstRld } = props;
  const [, token] = useAuth();
  const navigate = useNavigate();
  const [editTitle, setTitle] = useState(courseDetails.title);
  const [editCompany, setCompany] = useState(courseDetails.company);
  const [editPurchaseDate, setPurchaseDate] = useState(
    courseDetails.purchase_date
  );
  const [editPrice, setPrice] = useState(courseDetails.price);
  const [editPurchaseType, setPurchaseType] = useState(
    courseDetails.purchase_type
  );

  function handleSubmit(event) {
    event.preventDefault();
    let editCourse = {
      title: editTitle,
      company: editCompany,
      purchase_date: editPurchaseDate,
      price: editPrice,
      purchase_type: editPurchaseType,
      notes: '',
    };
    addCourse(editCourse);
    // rqstRld();
    //close modal? modal is open=false?
  }

  async function addCourse(course) {
    try {
      // console.log('course test', course);
      // console.log('token test', token);
      let result = await axios.put(
        `http://127.0.0.1:8000/api/courses/${courseDetails.id}/update/`,
        course,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );
      console.log(result);

      if (result.request.status === 200) {
        rqstRld(); //NOT WORKING
        // navigate(`/course/${course.id}/`);
        // alert('Your course is updated');
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
      <h2 className='form-header'>Update your course information</h2>
      <form onSubmit={handleSubmit}>
        <label for='update-title'>
          Course Title
          <input
            type='text'
            placeholder={courseDetails.title}
            onChange={(event) => setTitle(event.target.value)}
            value={editTitle}
            className='form-control'
          />
        </label>
        <label for='update-company'>
          Company
          <input
            type='text'
            placeholder={courseDetails.company}
            onChange={(event) => setCompany(event.target.value)}
            value={editCompany}
            className='form-control'
          />
        </label>
        <label for='update-purchaseDate'>
          Date of Purchase
          <input
            type='date'
            placeholder={courseDetails.purchase_date}
            onChange={(event) => setPurchaseDate(event.target.value)}
            value={editPurchaseDate}
            className='form-control'
          />
        </label>
        <label for='update-coursePrice'>
          Price
          <input
            type='number'
            placeholder={courseDetails.price}
            onChange={(event) => setPrice(event.target.value)}
            value={parseInt(editPrice)}
            className='form-control'
          />
        </label>
        <label for='update-purchaseType'>
          Purchase Type
          <input
            type='text'
            placeholder={courseDetails.purchase_type}
            onChange={(event) => setPurchaseType(event.target.value)}
            value={editPurchaseType}
            className='form-control'
          />
        </label>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
        <button type='submit'>Update</button>
      </form>
    </>
  );
};

export default UpdateCourseForm;
