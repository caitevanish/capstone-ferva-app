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

const ProjectsTable = ({ projects }) => {
  const navigate = useNavigate();

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
            {projects.map((project, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {project.title}
                  </TableCell>
                  <TableCell align='left'>{project.description}</TableCell>
                  <TableCell align='left'>{project.start_date}</TableCell>
                  <TableCell align='left'>{project.deadline_date}</TableCell>
                  <TableCell align='right'>
                    <Button
                      color='secondary'
                      onClick={() => {
                        navigate(`/project/${project.id}/`);
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

    //     <div className=''>
    //       <h2>My Projects</h2>
    //       <table>
    //         <thead>
    //           <tr>
    //             <th>Title</th>
    //             <th>Description</th>
    //             <th>Start Date</th>
    //             <th>Deadline</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {projects &&
    //             projects.map((project, index) => {
    //               return (
    //                 <tr key={index}>
    //                   <td>{project.title}</td>
    //                   <td>{project.description}</td>
    //                   <td>{project.start_date}</td>
    //                   <td>{project.deadline_date}</td>
    //                   <td>
    //                     <Link to={`/project/${project.id}/`} className='button'>
    //                       Details
    //                     </Link>
    //                     <Outlet></Outlet>
    //                   </td>
    //                 </tr>
    //               );
    //             })}
    //         </tbody>
    //       </table>
    //     </div>
  );
};
export default ProjectsTable;
