import React from 'react';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';

import useAuth from '../../hooks/useAuth';
import AddProjectForm from '../../components/Forms/Projects/AddProjectForm';

const ProjectsMainPage = (props) => {
  const { rqstRld } = props;
  const [user, token] = useAuth();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {}, [token]);

  return (
    <div className='container'>
      <h1>Projects Main Page for {user.username}</h1>
      <button onClick={() => setModalIsOpen(true)}>Add a Project</button>
      <Modal isOpen={modalIsOpen}>
        <AddProjectForm setModalIsOpen={setModalIsOpen} rqstRld={rqstRld} />
      </Modal>
    </div>
  );
};

export default ProjectsMainPage;
