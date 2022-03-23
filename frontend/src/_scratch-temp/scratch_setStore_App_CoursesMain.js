//Dan was telling me about storing axios request info in empty arrays. Won't be able to implement this great idea yet because I would need to learn how to memo-ize something.

//   <<<<App.js>>>>>>

const initialState = {courses: [], projects: [], goals: [], modal: ''}

function App() {
  const [store, setStore] = useState(initialState)
  setStore({...store, courses: []});

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
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path='/courses/all/'
          element={
            <PrivateRoute>
              <CoursesMainPage store={store} setStore={setStore}/>
            </PrivateRoute>
          }
        />
        </Routes>
      </div>);
}

//   <<<<CoursesMainPage.js>>>>>>

const CoursesMainPage = ({store, setStore}) => {
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
        setStore({...store, courses:response.data}); //whenever axios call is made, will automatically replace the store object in app.js. Duplicate store in new object, replace the ...
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCourses();
  }, [token])};
