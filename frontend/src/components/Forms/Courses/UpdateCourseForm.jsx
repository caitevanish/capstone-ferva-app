import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import InputField from '../../InputField/InputField';
import Button from '@mui/material/Button';
import axios from 'axios';

const UpdateCourseForm = (props) => {
  const { setModalIsOpen, courseDetails, dtlRld, rqstRld } = props;
  const [, token] = useAuth();
  const [editTitle, setTitle] = useState(courseDetails.title);
  const [editCompany, setCompany] = useState(courseDetails.company);
  const [editPurchaseDate, setPurchaseDate] = useState(
    courseDetails.purchase_date
  );
  const [editPrice, setPrice] = useState(courseDetails.price);
  // const [editPurchaseType, setPurchaseType] = useState(
  //   courseDetails.purchase_type);
  const [editBeGreatIf, setBeGreatIf] = useState(courseDetails.be_great);
  const [editHelpMeTo, setHelpMeTo] = useState(courseDetails.be_great);

  const handleTitle = (event) => setTitle(event.target.value);
  const handleCompany = (event) => setCompany(event.target.value);
  const handlePurchaseDate = (event) => setPurchaseDate(event.target.value);
  const handlePrice = (event) => setPrice(event.target.value);
  // const handlePurchaseType = (event) => setNewPurchaseType(event.target.value);
  const handleBeGreatIf = (event) => setBeGreatIf(event.target.value);
  const handleHelpMeTo = (event) => setHelpMeTo(event.target.value);

  function handleSubmit(event) {
    event.preventDefault();
    let editCourse = {
      title: editTitle,
      company: editCompany,
      purchase_date: editPurchaseDate,
      price: editPrice,
      // purchase_type: editPurchaseType,
      be_great: editBeGreatIf,
      help_me_to: editHelpMeTo,
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
        dtlRld(); //WORKING!
        rqstRld();
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
      <h2 className='form-header'>Update your course information</h2>
      <form onSubmit={handleSubmit}>
        {/* <label for='update-title'>
          Course Title
          <input
            type='text'
            placeholder={courseDetails.title}
            onChange={(event) => setTitle(event.target.value)}
            value={editTitle}
            className='form-control'
          /> 
          </label>*/}

        <InputField
          label='Course Title' //h3 styling
          htmlFor='course-title'
          value={editTitle}
          onChange={handleTitle}
        />

        {/* <label for='update-company'>
          Company
          <input
            type='text'
            placeholder={courseDetails.company}
            onChange={(event) => setCompany(event.target.value)}
            value={editCompany}
            className='form-control'
          />
        </label> */}

        <InputField
          label='Company' //h3 styling
          htmlFor='course-company'
          value={editCompany}
          onChange={handleCompany}
        />

        {/* <label for='update-purchaseDate'>
          Date of Purchase
          <input
            type='date'
            placeholder={courseDetails.purchase_date}
            onChange={(event) => setPurchaseDate(event.target.value)}
            value={editPurchaseDate}
            className='form-control'
          />
        </label> */}

        <InputField
          label='Date of Purchase' //h3 styling
          htmlFor='course-purchaseDate'
          type='date'
          value={editPurchaseDate}
          onChange={handlePurchaseDate}
        />

        {/* <label for='update-coursePrice'>
          Price
          <input
            type='number'
            placeholder={courseDetails.price}
            onChange={(event) => setPrice(event.target.value)}
            value={parseInt(editPrice)}
            className='form-control'
          />
        </label> */}

        <InputField
          label='Price' //h3 styling
          htmlFor='course-price'
          type='number'
          value={parseInt(editPrice)}
          onChange={handlePrice}
        />

        {/* <label for='update-purchaseType'>
          Purchase Type
          <input
            type='text'
            placeholder={courseDetails.purchase_type}
            onChange={(event) => setPurchaseType(event.target.value)}
            value={editPurchaseType}
            className='form-control'
          />
        </label> */}

        <InputField
          label="By completing this course, wouldn't it be great if..." //h3 styling
          htmlFor='course-beGreatIf'
          value={editBeGreatIf}
          onChange={handleBeGreatIf}
        />

        <InputField
          label='This course will help me by...' //h3 styling
          htmlFor='course-helpMeTo'
          value={editHelpMeTo}
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
          onClick={() => setModalIsOpen(true)}
        >
          Update
        </Button>
      </form>
    </div>
  );
};

export default UpdateCourseForm;
