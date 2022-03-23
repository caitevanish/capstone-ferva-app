import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import InputField from '../../InputField/InputField';

const UpdateProjectForm = (props) => {
  const { setModalIsOpen, projectDetails, dtlRld, rqstRld } = props;
  const [, token] = useAuth();
  const [editTitle, setTitle] = useState(projectDetails.title);
  const [editDescription, setDescription] = useState(
    projectDetails.description
  );
  const [editStartDate, setStartDate] = useState(projectDetails.start_date);
  const [editDeadlineDate, setDeadlineDate] = useState(
    projectDetails.deadline_date
  );

  const handleTitle = (event) => setTitle(event.target.value);
  const handleDescription = (event) => setDescription(event.target.value);
  const handleStartDate = (event) => setStartDate(event.target.value);
  const handleDeadlineDate = (event) => setDeadlineDate(event.target.value);

  function handleSubmit(event) {
    event.preventDefault();
    let editProject = {
      title: editTitle,
      description: editDescription,
      start_date: editStartDate,
      deadline_date: editDeadlineDate,
      notes: '',
    };
    addProject(editProject);
  }

  async function addProject(project) {
    try {
      // console.log('project test', project);
      // console.log('token test', token);
      let result = await axios.put(
        `http://127.0.0.1:8000/api/projects/${projectDetails.id}/update/`,
        project,
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
    <>
      <h2 className='form-header'>Update your project details</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label='Project Title' //h3 styling
          htmlFor='project-title'
          value={editTitle}
          onChange={handleTitle}
        />
        <InputField
          label='Description'
          htmlFor='project-description'
          value={editDescription}
          onChange={handleDescription}
        />
        <InputField
          label='Start Date'
          htmlFor='project-start'
          value={editStartDate}
          onChange={handleStartDate}
          type='date'
        />
        <InputField
          label='Deadline'
          htmlFor='project-deadline'
          value={editDeadlineDate}
          onChange={handleDeadlineDate}
          type='date'
        />
        <button onClick={() => setModalIsOpen(false)}>Close</button>
        <button type='submit'>Add Project</button>
      </form>
    </>
  );
};

export default UpdateProjectForm;
