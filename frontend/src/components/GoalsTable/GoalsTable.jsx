import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';

const GoalsTable = (props) => {
  const { goals } = props;
  const navigate = useNavigate();

  // const VISIBLE_FIELDS = ['Title', 'Description', 'Start Date', 'Deadline'];

  // export default function BasicExampleDataGrid() {
  //   const { data } = useDemoData({
  //     dataSet: 'Employee',
  //     visibleFields: VISIBLE_FIELDS,
  //     rowLength: 100,
  //   });

  //   return (
  //     <div style={{ height: 400, width: '100%' }}>
  //       <DataGrid {...data} />
  //     </div>
  //   );
  // }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align='left'>Description</TableCell>
              <TableCell align='left'>Start Date</TableCell>
              <TableCell align='left'>Deadline</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {goals.map((goal, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {goal.title}
                  </TableCell>
                  <TableCell align='left'>{goal.description}</TableCell>
                  <TableCell align='left'>{goal.start_date}</TableCell>
                  <TableCell align='left'>{goal.deadline_date}</TableCell>
                  <TableCell align='right'>
                    <Button
                      color='secondary'
                      onClick={() => {
                        navigate(`/goal/${goal.id}/`);
                      }}
                    >
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>

    //
  );
};

export default GoalsTable;
