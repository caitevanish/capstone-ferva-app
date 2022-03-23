//   <<<<CoursesMainPage.js>>>>>>

//-----------Tuesday 3/22:

const [, token] = useAuth();
const [newTitle, setNewTitle] = useState('');
const [newCompany, setNewCompany] = useState('');
const [newPurchaseDate, setNewPurchaseDate] = useState('');
const [newPrice, setNewPrice] = useState('');
const [newPurchaseType, setNewPurchaseType] = useState('');

const handleTitle = (event) => setNewTitle(event.target.value);
const handleCompany = (event) => setNew(event.target.value);
const handlePurchaseDate = (event) => setNewPurchaseDate(event.target.value);
const handlePrice = (event) => setNewPrice(event.target.value);
const handlePurchaseType = (event) => setNewPurchaseType(event.target.value);



//-----------Saturday 3/20:

// useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         let response = await axios.get(
//           'http://127.0.0.1:8000/api/courses/all/',
//           {
//             headers: {
//               Authorization: 'Bearer ' + token,
//             },
//           }
//         );
//         setCourses(response.data);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     fetchCourses();
//   }, [token]);

//-----------Monday 3/21:

// useEffect(() => {
//   const fetchCourseDetails = async () => {
//     try {
//       let response = await axios.get('http://127.0.0.1:8000/api/courses/course/<int:pk>/', {
//         headers: {
//           Authorization: 'Bearer ' + token,
//         },
//       });
//       setCourseDetails(response.data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   fetchCourseDetails();
// }, [token]);
