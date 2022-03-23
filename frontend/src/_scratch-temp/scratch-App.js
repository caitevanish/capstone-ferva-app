
  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       let response = await axios.get('http://127.0.0.1:8000/api/courses/', {
  //         headers: {
  //           Authorization: 'Bearer ' + token,
  //         },
  //       });
  //       setCourses(response.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchCourses();
  // }, [token]);


  

// async function fetchCourses () {
//   try {
//     let response = await axios.get('http://127.0.0.1:8000/api/courses/', {
//       headers: {
//         Authorization: 'Bearer ' + token,
//       },
//     });
//     setCourses(response.data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// useEffect(() => {
//   fetchCourses();
// }, [token]);