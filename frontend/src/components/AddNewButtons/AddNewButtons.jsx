import React, { useState } from 'react';
import { Stack } from '@mui/material';

import AddCourseButton from './AllButtons/AddCourseButton';
import AddProjectButton from './AllButtons/AddProjectButton';
import AddGoalButton from './AllButtons/AddGoalButton';

export default function AddNewButtons() {
  const height = '80';
  const sx = { border: '0px solid' };

  return (
    <>
      <div className='row'>
        <h3>Add New:</h3>
      </div>
      <div className='row'>
        <Stack direction='row' spacing={6} justifyContent='center'>
          <AddCourseButton height={height} sx={sx} />
          <AddProjectButton height={height} sx={sx} />
          <AddGoalButton height={height} sx={sx} />
        </Stack>
      </div>
    </>
  );
}
