import React from 'react';
import { Link, Outlet } from 'react-router-dom';

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
  );
};

export default CoursesTable;

//Past Code saved @ _scratch-temp > scratch-CoursesMain.jsx
