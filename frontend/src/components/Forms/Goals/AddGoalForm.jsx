import React, { useState } from 'react';
import InputField from '../../InputField/InputField';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

const AddGoalForm = (props) => {
  const { setModalIsOpen, rqstRld } = props;
  const [, token] = useAuth();
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newStartDate, setNewStartDate] = useState('');
  const [newDeadlineDate, setNewDeadlineDate] = useState('');
  // const [newType, setNewType] = useState('');
  const [newBeGreatIf, setNewBeGreatIf] = useState('');

  const handleTitle = (event) => setNewTitle(event.target.value);
  const handleDescription = (event) => setNewDescription(event.target.value);
  const handleStartDate = (event) => setNewStartDate(event.target.value);
  const handleDeadlineDate = (event) => setNewDeadlineDate(event.target.value);
  // const handleGoalType = (event) => setNewType(event.target.value);
  const handleBeGreatIf = (event) => setNewBeGreatIf(event.target.value);

  function handleSubmit(event) {
    event.preventDefault();
    let newGoal = {
      title: newTitle,
      description: newDescription,
      start_date: newStartDate,
      // goal_type: newType,
      projects: [''],
      courses: [''],
      deadline_date: newDeadlineDate,
      notes: newBeGreatIf,
    };
    addGoal(newGoal);
  }

  async function addGoal(goal) {
    try {
      let result = await axios.post(
        `http://127.0.0.1:8000/api/goals/add/`,
        goal,
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
    <div className='form-container'>
      <h2 className='form-header'>Add a New Goal</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label='Goal Title'
          htmlFor='goal-title'
          value={newTitle}
          onChange={handleTitle}
        />
        <InputField
          label='Description'
          htmlFor='goal-description'
          value={newDescription}
          onChange={handleDescription}
        />
        <InputField
          label='Start Date'
          htmlFor='goal-start'
          value={newStartDate}
          onChange={handleStartDate}
          type='date'
        />
        <InputField
          label='Deadline'
          htmlFor='goal-deadline'
          value={newDeadlineDate}
          onChange={handleDeadlineDate}
          type='date'
        />
        {/* <InputField
          label='Goal Type'
          htmlFor='goal-type'
          value={newType}
          // onChange={handleType}
          type='date'
        /> */}
        {/* <label>
          Goal Type
          <input
            defaultValue='Choose...'
            onChange={handleGoalType}
            value={newType}
          >
            <option>Choose...</option>
            <option>Short Term</option>
            <option>Long Term</option>

          </input>
        </label> */}

        <InputField
          label="By completing this goal, wouldn't it be great if..."
          htmlFor='goal-beGreatIf'
          value={newBeGreatIf}
          onChange={handleBeGreatIf}
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
          // onClick={() => setModalIsOpen(false)}
        >
          Add Goal
        </Button>
      </form>
    </div>
  );
};

export default AddGoalForm;
