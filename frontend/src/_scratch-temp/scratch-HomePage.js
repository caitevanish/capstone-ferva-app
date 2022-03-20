//   <<<<scratch-HomePage.js>>>>>>


//-----------Saturday 3/20:

// const [user, token] = useAuth();
// const [courses, setCourses] = useState([]);

// useEffect(() => {
//   //change the variable names from fetchCars to something else

//   const fetchCourses = async () => {
//     // async function fetchCourses(){
//     try {
//       //Check the URLs: Is it port 3000 or 8000??

//       let response = await axios.get(
//         'http://127.0.0.1:8000/api/courses/all/',
//         {
//           headers: {
//             Authorization: 'Bearer ' + token,
//           },
//         }
//       );
//       console.log(user);
//       setCourses(response.data);
//     } catch (error) {
//       console.log(courses);
//     }
//   };
//   fetchCourses();
// }, [token]);