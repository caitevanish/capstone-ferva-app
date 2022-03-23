// General Imports
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useAuth from './hooks/useAuth';
// import useRequestReload from './_scratch-temp/useRequestReload'; //Attempt to make a customHook
import './App.css';

// Pages Imports
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import CoursesMainPage from './pages/CoursesPage/CoursesMainPage';
import CourseDetailPage from './pages/CoursesPage/CourseDetailPage';
import ProjectsMainPage from './pages/ProjectsPage/ProjectsMainPage';
import ProjectDetailsPage from './pages/ProjectsPage/ProjectDetailsPage';
import GoalsMainPage from './pages/GoalsPage/GoalsMainPage';

// Component Imports
import TopNavbar from './components/TopNavbar/TopNavbar';
import Footer from './components/Footer/Footer';
import SideNavbar from './components/SideNavbar/SideNavbar';

// Util Imports
import PrivateRoute from './utils/PrivateRoute';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');
function App() {
  // const rqstRld  = useRequestReload()
  const [user, token] = useAuth();
  const [courses, setCourses] = useState([]);
  const [projects, setProjects] = useState([]);
  const [goals, setGoals] = useState([]);
  const [requestReload, setRequestReload] = useState(false);

  async function fetchCourses() {
    try {
      let response = await axios.get('http://127.0.0.1:8000/api/courses/', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      setCourses(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function fetchProjects() {
    try {
      let response = await axios.get('http://127.0.0.1:8000/api/projects/', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      setProjects(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function fetchGoals() {
    try {
      let response = await axios.get('http://127.0.0.1:8000/api/goals/', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      setGoals(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchCourses();
    fetchProjects();
    fetchGoals();
  }, [token, requestReload]);

  const rqstRld = () => {
    //Reload the Main Courses table
    setRequestReload(!requestReload);
  };

  return (
    <div>
      <TopNavbar />
      <SideNavbar />
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route
          path='/'
          element={
            <PrivateRoute>
              <HomePage user={user} token={token} courses={courses} />
            </PrivateRoute>
          }
        />
        <Route
          path='/courses/'
          element={
            <PrivateRoute>
              <CoursesMainPage courses={courses} rqstRld={rqstRld} />
            </PrivateRoute>
          }
        />
        <Route
          path='/course/:id/'
          element={
            <PrivateRoute>
              <CourseDetailPage courses={courses} rqstRld={rqstRld} />
            </PrivateRoute>
          }
        />
        <Route
          path='/projects/'
          element={
            <PrivateRoute>
              <ProjectsMainPage projects={projects} rqstRld={rqstRld} />
            </PrivateRoute>
          }
        />
        <Route
          path='/project/:id/'
          element={
            <PrivateRoute>
              <ProjectDetailsPage projects={projects} rqstRld={rqstRld} />
            </PrivateRoute>
          }
        />
        <Route
          path='/goals/'
          element={
            <PrivateRoute>
              <GoalsMainPage goals={goals} rqstRld={rqstRld} />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
