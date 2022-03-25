import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CoursesTable = (props) => {
  const { courses } = props;
  // const [user, token] = useAuth();
  // const [courseTable, setCoursesTable] = useState([]);

  //-----------To-Do:
  //handleClick function: This button is supposed to lead to the course details page

  // function handleClick(course) {
  //   setEditCourseId(course.id)
  // }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align='right'>Company</TableCell>
              <TableCell align='right'>Purchase Date</TableCell>
              <TableCell align='right'>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {course.title}
                  </TableCell>
                  <TableCell align='right'>{course.company}</TableCell>
                  <TableCell align='right'>{course.purchase_date}</TableCell>
                  <TableCell align='right'>{course.price}</TableCell>
                  <TableCell align='right'>
                    <Link to={`/course/${course.id}/`} className='button'>
                      Details
                    </Link>
                    <Outlet></Outlet>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* </>
    
    <div className=''>
      <h2>My Courses</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Purchase Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {courses &&
            courses.map((course, index) => {
              return (
                <tr key={index}>
                  <td>{course.title}</td>
                  <td>{course.company}</td>
                  <td>{course.purchase_date}</td>
                  <td>{course.price}</td>
                  <td>
                    <Link to={`/course/${course.id}/`} className='button'>
                      Details
                    </Link>
                    <Outlet></Outlet>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  
 */}
    </>
  );
};
export default CoursesTable;

//Past Code saved @ _scratch-temp > scratch-CoursesMain.jsx
