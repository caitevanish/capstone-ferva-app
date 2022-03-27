import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';

import useAuth from '../../hooks/useAuth';
import AddProjectForm from '../../components/Forms/Projects/AddProjectForm';
import ProjectsTable from '../../components/ProjectsTable/ProjectsTable';
import { Button } from '@mui/material';

const ProjectsMainPage = (props) => {
  const { projects, rqstRld } = props;
  const [user] = useAuth();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h1>Projects Main Page</h1>
      </div>
      <div className='row'>
        <div className='col-md-7'>
          {/* <h2>Project column 2</h2> */}
          <div className='feature-5'>
            <Button
              color='secondary'
              variant='contained'
              onClick={() => setModalIsOpen(true)}
            >
              Add a Project
            </Button>
            <ProjectsTable projects={projects} />
          </div>
        </div>
        <div className='col-md-5'>
          {/* <h2>Project column 2</h2> */}
          <div className='feature-6'>{/* component /> */}</div>
        </div>
      </div>

      <Modal isOpen={modalIsOpen}>
        <AddProjectForm setModalIsOpen={setModalIsOpen} rqstRld={rqstRld} />
      </Modal>
    </div>
  );
};

export default ProjectsMainPage;
