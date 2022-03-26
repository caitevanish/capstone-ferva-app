// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import useAuth from './hooks/useAuth';

// const VisionBoard = (props) => {
//   const [user, token] = useAuth();
//   // const [images, setImages] = useState([]);
//   const [selectedFile, setselectedFile] = useState([]);
//   const [requestImgReload, setRequestImgReload] = useState(false);

//   const uploadImage =() => {
//     let properties = {
//       mediaType: 'photo',
//       quality: 1,
//       in
//     }
//   }

//   const handleFile = (event) => setSelectedFile(event.target.files[0]);

//   async function fetchImages(image) {
//     try {
//       let response = await axios.post('CREATE A NEW ENDPOINT', image {
//         headers: {
//           Authorization: 'Bearer ' + token,
//         },
//       });
//       if (result.request.status === 200) {
//         rqstImgRld();
//         // setModalIsOpen(false);
//         return;
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   }

//   useEffect(() => {
//     fetchImages();
//   }, [requestImgReload]);

//   // const rqstImgRld = () => {
//   //   setRequestImgReload(!requestImgReload);
//   // };

//   function fileSelectedHandler(event) {
//     setImages();
//   }

//   function fileUploadHandler(event) {
//     const fd = new FormData();
//     fd.append('image', selectedFile,selectedFile.name )
//     console.log(event.target.files[0]);
//   }

//   return (
//     <>
//     <label>

//     </label>
//       {/* <input type='file' cnChange={fileSelectedHandler} /> */}
//       <input type='file' onChange={handleFile} />
//       <button onClick={fileUploadHandler}>Upload</button>
//     </>
//   );
// };

// export default VisionBoard;
