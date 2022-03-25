import React from 'react';
import { useState } from 'react';
// import CoursesTable from '../../components/CoursesTable/CoursesTable';
import CoursesTable2 from '../../components/CoursesTable/CoursesTable2';
import Modal from 'react-modal';
// import BarChart from '../../components/Chart/BarChart';
// import LineChart from '../../components/Chart/LineChart';

import useAuth from '../../hooks/useAuth';
import AddCourseForm from '../../components/Forms/Courses/AddCourseForm';
import { useEffect } from 'react';

const CoursesMainPage = (props) => {
  const { user, courses, rqstRld } = props;
  const [, token] = useAuth();
  // const [courses, setCourses] = useState([]);
  // const [courseDetails, setCourseDetails] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function getDatesList(courses) {
    let datesList = [];
    let dateData = courses.map((course) => course.purchase_date);
    console.log(dateData);
    return;
  }

  // useEffect(() => {
  //   fetchChart();
  // }, [courses]);

  //-----------To-Do:

  return (
    <div className='container'>
      <h1>Courses Main Page for {user.username}</h1>

      <Modal isOpen={modalIsOpen}>
        <AddCourseForm
          user={user}
          setModalIsOpen={setModalIsOpen}
          rqstRld={rqstRld}
        />
      </Modal>
      <h2>My Courses</h2>
      <button onClick={() => setModalIsOpen(true)}>Add a Course</button>
      <CoursesTable2
        courses={courses}
        // setCourseDetails={setCourseDetails}
        token={token}
      />
      {/* <BarChart courses={courses} getDatesList={getDatesList} /> */}
    </div>
  );
};

export default CoursesMainPage;

//Past Code saved @ _scratch-temp > scratch-CoursesMain.js
