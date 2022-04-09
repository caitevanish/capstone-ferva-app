import React, { useState } from 'react';
import axios from 'axios';
import useAuth from './hooks/useAuth';

const VisionBoard = (props) => {
  const [{}] = props;
  const [, token] = useAuth();
  const [image, setImage] = useState();
  const [requestImgReload, setRequestImgReload] = useState(false);

  const newImage = () => {
    const uploadData = new FormData();
    uploadData.append('image', image, image.name);
  };

  const handleFile = (event) => setImage(event.target.files[0]);

  async function fetchImages(image) {
    try {
      let response = await axios.post('CREATE A NEW ENDPOINT', image, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      if (result.request.status === 200) {
        rqstImgRld();
        return;
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchImages();
  }, [requestImgReload]);

  const rqstImgRld = () => {
    setRequestImgReload(!requestImgReload);
  };

  return (
    <div>
      <h3>Upload images to your Vision Board</h3>
      {/* <label>
        Title
        <input
          type='text'
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
        />
      </label> */}
      <label>
        Choose Your Vision!
        <input type='file' onChange={handleFile} />
      </label>
      <br />
      <button onClick={() => newImage()}>Add</button>
    </div>
  );
};

export default VisionBoard;
