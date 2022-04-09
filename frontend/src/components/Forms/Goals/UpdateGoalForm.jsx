import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import InputField from '../../InputField/InputField';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

const UpdateGoalForm = (props) => {
  const { setModalIsOpen, goalDetails, dtlRld, rqstRld } = props;
  const [, token] = useAuth();
  const [editTitle, setTitle] = useState(goalDetails.title);
  const [editDescription, setDescription] = useState(goalDetails.description);
  const [editStartDate, setStartDate] = useState(goalDetails.start_date);
  const [editDeadlineDate, setDeadlineDate] = useState(
    goalDetails.deadline_date
  );
  const [editBeGreatIf, setBeGreatIf] = useState(goalDetails.notes);

  const handleTitle = (event) => setTitle(event.target.value);
  const handleDescription = (event) => setDescription(event.target.value);
  const handleStartDate = (event) => setStartDate(event.target.value);
  const handleDeadlineDate = (event) => setDeadlineDate(event.target.value);
  const handleBeGreatIf = (event) => setBeGreatIf(event.target.value);

  function handleSubmit(event) {
    event.preventDefault();
    let newGoal = {
      title: editTitle,
      description: editDescription,
      start_date: editStartDate,
      // goal_type: newType,
      projects: [''],
      courses: [''],
      deadline_date: editDeadlineDate,
      notes: editBeGreatIf,
    };
    addGoal(newGoal);
  }

  async function addGoal(goal) {
    try {
      let result = await axios.put(
        `http://127.0.0.1:8000/api/goals/${goalDetails.id}/update/`,
        goal,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );
      console.log(result);

      if (result.request.status === 200) {
        dtlRld();
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
      <h2 className='form-header'>Update your goal details</h2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <InputField
            label='Goal Title'
            htmlFor='goal-title'
            value={editTitle}
            onChange={handleTitle}
          />
          <InputField
            label='Description'
            htmlFor='goal-description'
            value={editDescription}
            onChange={handleDescription}
          />
          <InputField
            label='Start Date'
            htmlFor='goal-start'
            value={editStartDate}
            onChange={handleStartDate}
            type='date'
          />
          <InputField
            label='Deadline'
            htmlFor='goal-deadline'
            value={editDeadlineDate}
            onChange={handleDeadlineDate}
            type='date'
          />
          <InputField
            label="By completing this goal, wouldn't it be great if..."
            htmlFor='goal-beGreatIf'
            value={editBeGreatIf}
            onChange={handleBeGreatIf}
          />
          <Stack direction='row' spacing={2} justifyContent='center'>
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
              // onClick={() => setModalIsOpen(true)}
            >
              Update
            </Button>
          </Stack>
        </Stack>

        {/* <button onClick={() => setModalIsOpen(false)}>Close</button>
        <button type='submit'>Update</button> */}
      </form>
    </div>
  );
};

export default UpdateGoalForm;
