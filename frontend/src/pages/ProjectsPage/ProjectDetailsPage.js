import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Modal from 'react-modal';
import UpdateProjectForm from '../../components/Forms/Projects/UpdateProjectForm';
import axios from 'axios';
import VisionBoard2 from '../../components/VisionBoard/VisionBoard';
import Button from '@mui/material/Button';

const ProjectDetailsPage = (props) => {
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
    <div className='container-fluid'>
      <Link to={'/projects/'} className='button'>
        Back to Projects
      </Link>
      <div className='row'>
        <h1>Details for {projectDetails.title} Project</h1>
      </div>
      <div className='row'>
        <div className='details-buttons'>
          <Button
            className='detail-btn'
            color='warning'
            variant='outlined'
            onClick={(event) => handleDelete(event, projectDetails.id)}
          >
            Delete
          </Button>

          <Button
            className='Z'
            color='success'
            variant='contained'
            onClick={() => setModalIsOpen(true)}
          >
            Update
          </Button>
        </div>
        <div className='col-md-6'>
          <div className='details-left'>
            <div className='row'>
              <h4>Project:</h4>
              <p>{projectDetails.title}</p>
            </div>
            <div className='row'>
              <h4>Description</h4>
              <p>{projectDetails.description}</p>
            </div>
            <div className='row'>
              <h4>Start Date:</h4>
              <p>{projectDetails.start_date}</p>
              <h4>Deadline:</h4>
              <p>{projectDetails.deadline_date}</p>
            </div>
            <div className='row'>
              <h4>By completing this project, wouldn't it be great if...</h4>
              <p>{/* <Great if text space /> */}</p>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='details-right'>
            <div className='row'>
              <h4>Milestones:</h4>
              <p>{/* <Milestones /> */}</p>
            </div>

            <div className='row'>
              <h4>Project Timetable</h4>
              <p>{/* <TimeTable /> */}</p>
            </div>
          </div>
        </div>

        <div className='row'>
          <h3>VISIONBOARD!</h3>
          {/* <VisionBoard2 /> */}
        </div>

        <Modal isOpen={modalIsOpen}>
          <UpdateProjectForm
            setModalIsOpen={setModalIsOpen}
            id={id}
            projectDetails={projectDetails}
            dtlRld={dtlRld}
            rqstRld={rqstRld}
          />
        </Modal>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
