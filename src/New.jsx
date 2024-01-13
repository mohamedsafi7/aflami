// New.js
import React, { useState } from 'react';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './form.css';

const New = () => {
  const url = "http://localhost:3001/movies";
  const [data, setData] = useState({
    name: "",
    genre: "",
    description: "",
    type: "",
    image: ""
  });

  const ToastMessage = () => {
    toast.error("Error Informations !", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };
  const back = () =>{
    window.location.href = '/Home';
  }
  const handle = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const hsubmit = (e) => {
    e.preventDefault();

    Axios.post(url, {
      name: data.name,
      genre: data.genre,
      description: data.description,
      type: data.type,
      image: data.image
    })
      .then(res => {
        if (res.data && res.data.id) {
          window.location.href = '/Home';
        } else {
          console.log('Error during form submission:', res.data);
          alert('Error during form submission');
        }
      })
      .catch(error => {
        console.error('Error during completing the form:', error);
        alert('Error during completing the form');
      });
  };

  return (
    <div className='form-box'>
      <form onSubmit={hsubmit} className='newform'>
        <span className="title">Add new movie or series</span>
        <div className='newform-cotainer'>
          <input className='newinput' id="name" placeholder='name' value={data.name} type="text" onChange={(e) => { handle(e) }} />
          <select className='select' id="genre" onChange={(e) => { handle(e) }}>
            <option value="" disabled>Select Genre</option>
            <option value="Drama">Drama</option>
            <option value="Action">Action</option>
            <option value="Crime">Crime</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
          <select className='select' id="type" onChange={(e) => { handle(e) }}>
            <option value="" disabled>Select Type</option>
            <option value="Movie">Movie</option>
            <option value="Series">Series</option>
          </select>
          <input className='newinput' id="description" placeholder='description' value={data.description} type="description" onChange={(e) => { handle(e) }} />
        
        </div>
        <button className='btnew' type='submit' onClick={ToastMessage}>Add</button>
        <button className='btnew' onClick={back}>Cancel</button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default New;
