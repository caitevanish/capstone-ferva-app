//   <<<<CoursesTable.jsx>>>>>>

//-----------Saturday 3/20:

// useEffect(() => {
//   fetchCourses();
// }, [token]);

// async function fetchCourses() {
//   try {
//     let response = await axios.get(
//       'http://127.0.0.1:8000/api/courses/all/',
//       {
//         headers: {
//           Authorization: 'Bearer ' + token,
//         },
//       }
//     );
//     setCoursesTable(response.data);
//   } catch (error) {
//     console.log(error.message);
//   } };
//   fetchCourses();
// }

// {courses &&
//   courses.map((course) => (
//     <p key={course.id}>
//       {course.title} {course.company} {course.price}{' '}
//       {course.purchase_date}
//     </p>  ))}
