import React, { useState } from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const New = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    genre: '',
    description: '',
    type: '',
    image: null,
    id: '',
  });

  const ToastMessage = () => {
    toast.error('Error Informations !', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    handle(e); // Call the shared handle function to update the form data
  };

  const handle = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: id === 'image' ? selectedImage : value,
    }));
  };

  const hsubmit = async (e) => {
    e.preventDefault();

    const newFormData = new FormData();
    newFormData.append('name', formData.name);
    newFormData.append('genre', formData.genre);
    newFormData.append('description', formData.description);
    newFormData.append('type', formData.type);
    newFormData.append('image', formData.image);
    newFormData.append('id', formData.id);

    try {
      const response = await Axios.post('http://localhost:3001/movies', newFormData);

      if (response.data && response.data.length > 0) {
        window.location.href = '/Home';
      } else {
        window.location.href = '/Home';
      }
    } catch (error) {
      console.error('Error during completing the form:', error);
      ToastMessage(); // Display a toast message in case of an error
    }
  };

  return (
    <div className='form-box'>
      <form onSubmit={hsubmit} className='newform'>
        <span className='title'>Add new movie or series</span>
        <div className='newform-cotainer'>
          <input
            className='newinput'
            id='name'
            placeholder='name'
            value={formData.name}
            type='text'
            onChange={(e) => {
              handle(e);
            }}
          />
          <select id='genre' onChange={(e) => handle(e)}>
            <option value='Drama'>Drama</option>
            <option value='Action'>Action</option>
            <option value='Crime'>Crime</option>
            <option value='Sci-Fi'>Sci-Fi</option>
          </select>
          <select id='type' onChange={(e) => handle(e)}>
            <option value='Movie'>Movie</option>
            <option value='Series'>Series</option>
          </select>
          <input
            className='newinput'
            id='description'
            placeholder='description'
            value={formData.description}
            type='description'
            onChange={(e) => {
              handle(e);
            }}
          />
          <input
            className='newinput'
            id='image'
            placeholder='image'
            type='file'
            onChange={(e) => {
              handleImageChange(e);
            }}
          />
        </div>
        <button type='submit' onClick={ToastMessage}>
          Add
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default New;
