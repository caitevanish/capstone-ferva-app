import React, { useState } from 'react';
import InputField from '../../InputField/InputField';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

const AddProjectForm = (props) => {
  const { setModalIsOpen, rqstRld } = props;
  const [user, token] = useAuth();
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newStartDate, setNewStartDate] = useState('');
  const [newDeadlineDate, setNewDeadlineDate] = useState('');

  const handleTitle = (event) => setNewTitle(event.target.value);
  const handleDescription = (event) => setNewDescription(event.target.value);
  const handleStartDate = (event) => setNewStartDate(event.target.value);
  const handleDeadlineDate = (event) => setNewDeadlineDate(event.target.value);

  function handleSubmit(event) {
    event.preventDefault();
    let newProject = {
      title: newTitle,
      description: newDescription,
      start_date: newStartDate,
      deadline_date: newDeadlineDate,
      notes: '',
    };
    addProject(newProject);
  }

  async function addProject(project) {
    try {
      let result = await axios.post(
        `http://127.0.0.1:8000/api/projects/add/`,
        project,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );
      console.log(result);

      if (result.request.status === 201) {
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
      <h2 className='form-header'>Add a New Project</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label='Project Title' //h3 styling
          htmlFor='project-title'
          value={newTitle}
          onChange={handleTitle}
        />
        <InputField
          label='Description'
          htmlFor='project-description'
          value={newDescription}
          onChange={handleDescription}
        />
        <InputField
          label='Start Date'
          htmlFor='project-start'
          value={newStartDate}
          onChange={handleStartDate}
          type='date'
        />
        <InputField
          label='Deadline'
          htmlFor='project-deadline'
          value={newDeadlineDate}
          onChange={handleDeadlineDate}
          type='date'
        />
        <button onClick={() => setModalIsOpen(false)}>Close</button>
        <button type='submit'>Add Project</button>
      </form>
    </>
  );
};

export default AddProjectForm;
