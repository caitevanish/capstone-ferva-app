import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const ProjectsTable = (props) => {
  const { projects } = props;

  return (
    <div className=''>
      <h2>My Projects</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {projects &&
            projects.map((project, index) => {
              return (
                <tr key={index}>
                  <td>{project.title}</td>
                  <td>{project.description}</td>
                  <td>{project.start_date}</td>
                  <td>{project.deadline_date}</td>
                  <td>
                    <Link to={`/project/${project.id}/`} className='button'>
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

export default ProjectsTable;
