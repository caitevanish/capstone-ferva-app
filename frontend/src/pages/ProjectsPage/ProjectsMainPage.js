import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';

import useAuth from '../../hooks/useAuth';
import AddProjectForm from '../../components/Forms/Projects/AddProjectForm';
import ProjectsTable from '../../components/ProjectsTable/ProjectsTable';

const ProjectsMainPage = (props) => {
  const { projects, rqstRld } = props;
  const [user] = useAuth();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className='container'>
      <h1>Projects Main Page for {user.username}</h1>
      <button onClick={() => setModalIsOpen(true)}>Add a Project</button>
      <Modal isOpen={modalIsOpen}>
        <AddProjectForm setModalIsOpen={setModalIsOpen} rqstRld={rqstRld} />
      </Modal>

      <ProjectsTable projects={projects} />
    </div>
  );
};

export default ProjectsMainPage;
