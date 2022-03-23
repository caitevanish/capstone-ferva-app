import React from 'react';
import { useEffect, useState } from 'react';
import CoursesTable from '../../components/CoursesTable/CoursesTable';
import Modal from 'react-modal';

import useAuth from '../../hooks/useAuth';
import AddCourseForm from '../../components/Forms/Courses/AddCourseForm';

const CoursesMainPage = (props) => {
  const { courses, rqstRld } = props;
  const [user, token] = useAuth();
  // const [courses, setCourses] = useState([]);
  // const [courseDetails, setCourseDetails] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //-----------To-Do:
  //BUG FIX: As of now, when I switch to the course amin page i need to reload the screen to see the table filled with details. No good! Tried using the useEffect which calls setCourses, didn't work.

  // useEffect(() => {
  //   // fetchCourses();
  // }, []);

  //-----------To-Do:

  return (
    <div className='container'>
      <h1>Courses Main Page for {user.username}</h1>
      <button onClick={() => setModalIsOpen(true)}>Add a Course</button>
      <Modal isOpen={modalIsOpen}>
        <AddCourseForm setModalIsOpen={setModalIsOpen} rqstRld={rqstRld} />
      </Modal>

      <CoursesTable
        courses={courses}
        // setCourseDetails={setCourseDetails}
        token={token}
      />
    </div>
  );
};

export default CoursesMainPage;

//Past Code saved @ _scratch-temp > scratch-CoursesMain.js
