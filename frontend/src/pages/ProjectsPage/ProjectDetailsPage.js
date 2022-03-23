import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Modal from 'react-modal';
import UpdateProjectForm from '../../components/Forms/Projects/UpdateProjectForm';
import axios from 'axios';

const ProjectDetailPage = (props) => {
  const [, token] = useAuth();
  const { rqstRld } = props;
  const { id } = useParams();
  const [projectDetails, setProjectDetails] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const [detailReload, setDetailReload] = useState(false);

  useEffect(() => {
    fetchProjectDetails();
  }, [id, detailReload]);

  async function fetchProjectDetails() {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/projects/project/${id}/`,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );
      setProjectDetails(response.data);
    } catch (error) {
      // console.log(error.message);
    }
  }

  async function handleDelete(event, id) {
    event.preventDefault();
    //have pop up window to warn user
    try {
      let result = await axios.delete(
        `http://127.0.0.1:8000/api/projects/${id}/delete/`,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );
      console.log(result);
      rqstRld(); //Request to reload page
      navigate('/projects/');
    } catch {
      console.log('error. Something went wrong');
    }
    return;
  }

  const dtlRld = () => {
    //Reload the Main Courses table
    setDetailReload(!detailReload);
  };

  return (
    <>
      <Link to={'/projects/'} className='button'>
        Back to Projects
      </Link>

      <h1>Details for {projectDetails.title} Project</h1>

      <div className='row'>
        <h3>Project Name</h3>
        <p>{projectDetails.title}</p>
      </div>
      <div className='row'>
        <h3>Description</h3>
        <p>{projectDetails.description}</p>
      </div>
      <div className='row'>
        <h3>Start Date:</h3>
        <p>{projectDetails.start_date}</p>
        <h3>Deadline:</h3>
        <p>{projectDetails.deadline_date}</p>
      </div>
      <div className='col-1'>
        <h3>By completing this course, wouldn't it be great if...</h3>
        <p>{}</p> {/* Add great_if to model and migrate */}
      </div>

      <button onClick={() => setModalIsOpen(true)}>Update</button>
      <Modal isOpen={modalIsOpen}>
        <UpdateProjectForm
          setModalIsOpen={setModalIsOpen}
          id={id}
          projectDetails={projectDetails}
          dtlRld={dtlRld}
          rqstRld={rqstRld}
        />
      </Modal>
      <button
        onClick={(event) => handleDelete(event, projectDetails.id)}
        className='btn-danger'
      >
        Delete
      </button>
    </>
  );
};

export default ProjectDetailPage;
