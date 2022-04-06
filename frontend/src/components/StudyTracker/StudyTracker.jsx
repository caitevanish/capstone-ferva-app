import { useState } from 'react';
// import thumbsUpOn from '../../images/thumbsUpOn';
// import thumbsDownOn from '../../images/thumbsDownOn';

import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './StudyTracker.css';

export default function StudyTracker(props) {
  // const [studyMonday, setStudyMonday] = useState(buttonOff);
  // const [studyMonday, setStudyMonday] = useState(thumbsDownOn);

  // const handleMondayClick = (event) => setStudyMonday(event.target.value);
  // const handleMondayClick = (event) => setStudyMonday(thumbsUpOn);
  // function onToggle(event) {
  //   if (studyButton == thumbsDownOn) {
  //     setStudyMonday(thumbsUpOn);
  //   } else {
  //     setStudyMonday(thumbsDownOn);
  //   }
  // }

  return (
    <div className='feature-1'>
      <FormControl component='fieldset'>
        <h3>This Week's Studying:</h3>
        <FormLabel component='legend' />
        <FormGroup aria-label='position' row>
          {/* <FormControlLabel
            value='mon'
            control={handleMondayClick}
            // onChange={handleMondayClick}
            label='Mon'
            labelPlacement='top'
          /> */}
          <FormControlLabel
            value='mon'
            control={<Checkbox />}
            label='Mon'
            labelPlacement='top'
          />
          <FormControlLabel
            value='tue'
            control={<Checkbox />}
            label='Tue'
            labelPlacement='top'
          />
          <FormControlLabel
            value='wed'
            control={<Checkbox />}
            label='Wed'
            labelPlacement='top'
          />
          <FormControlLabel
            value='thu'
            control={<Checkbox />}
            label='Thu'
            labelPlacement='top'
          />
          <FormControlLabel
            value='fri'
            control={<Checkbox />}
            label='Fri'
            labelPlacement='top'
          />
          <FormControlLabel
            value='sat'
            control={<Checkbox />}
            label='Sat'
            labelPlacement='top'
          />
          <FormControlLabel
            value='sun'
            control={<Checkbox />}
            label='Sun'
            labelPlacement='top'
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
