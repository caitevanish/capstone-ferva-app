import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const GoalsTable = (props) => {
  const { goals } = props;

  return (
    <div className=''>
      <h2>My Goals</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {goals &&
            goals.map((goal, index) => {
              return (
                <tr key={index}>
                  <td>{goal.title}</td>
                  <td>{goal.description}</td>
                  <td>{goal.deadline_date}</td>
                  <td>
                    <Link to={`/goal/${goal.id}/`} className='button'>
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

export default GoalsTable;
