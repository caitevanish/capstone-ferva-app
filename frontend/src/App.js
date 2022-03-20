// General Imports
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useAuth from './hooks/useAuth';
import './App.css';

// Pages Imports
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import CoursesMainPage from './pages/CoursesPage/CoursesMainPage';
import ProjectsMainPage from './pages/ProjectsPage/ProjectMainPage';
import GoalsMainPage from './pages/GoalsPage/GoalsMainPage';

// Component Imports
import TopNavbar from './components/TopNavbar/TopNavbar';
import Footer from './components/Footer/Footer';
import SideNavbar from './components/SideNavbar/SideNavbar';

// Util Imports
import PrivateRoute from './utils/PrivateRoute';

function App() {
  const [user, token] = useAuth();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        let response = await axios.get(
          'http://127.0.0.1:8000/api/courses/all/',
          {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          }
        );
        setCourses(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCourses();
  }, [token]);

  

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
              <HomePage
                user={user}
                token={token}
                courses={courses}
                setCourses={setCourses}
              />
            </PrivateRoute>
          }
        />
        <Route
          path='/courses/all/'
          element={
            <PrivateRoute>
              <CoursesMainPage courses={courses} setCourses={setCourses} />
            </PrivateRoute>
          }
        />
        <Route
          path='/projects/all/'
          element={
            <PrivateRoute>
              <ProjectsMainPage />
            </PrivateRoute>
          }
        />
        <Route
          path='/goals/all/'
          element={
            <PrivateRoute>
              <GoalsMainPage />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
