// New.js
import React, { useState } from 'react';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './form.css';
import { useNavigate } from 'react-router-dom';

const New = () => {
  const navigate = useNavigate()
  const url = "http://localhost:3001/movies";
  const url1 = "http://localhost:3001/tvShow";
  const [data, setData] = useState({
    name: "",
    genre: "",
    description: "",
    type: "movie",
    image: "",
    trailer:""
  });

  const ToastMessage = () => {
    toast.success("Added succesfully", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };
  const back = () =>{
    navigate("/Home")

  }
  const handle = (e) => {
    const { id, value } = e.target;
    
    setData((prevData) => ({
      ...prevData,
      [id]: value
    }));
    console.log(value,id);
  };


  const postData = (postUrl) => {
    console.log(data);
    Axios.post(postUrl, {
      name: data.name,
      genre: data.genre,
      description: data.description,
      type: data.type,
      image: data.image,
      trailer: data.trailer
    })
      .then(res => {
        navigate("/Home")
      })
      // .catch(error => {
      //   console.error('Error during completing the form:', error);
      //   alert('Error during completing the form');
      // });
  };

  const hsubmit = (e) => {
    e.preventDefault();
    if(data.type == "movie"){
      postData(url);
    }else{
      postData(url1);
    }
  };

  return (
    <div className='form-box'>
      <form onSubmit={hsubmit} className='newform'>
        <span className="title">Add new movie or series</span>
        <div className='newform-cotainer'>
          <input className='newinput' id="name" placeholder='name' value={data.name} type="text" onChange={(e) => { handle(e) }} />
          <select className='select' id="genre" onChange={(e) => { handle(e) }}>
            <option value="" disabled>Select Genre</option>
            <option id="genre" onChange={(e) => { handle(e) }} value="Drama">Drama</option>
            <option id="genre" onChange={(e) => { handle(e) }} value="Action">Action</option>
            <option id="genre" onChange={(e) => { handle(e) }} value="Crime">Crime</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
          <select className='select' id="type" onChange={(e) => { handle(e) }}>
            <option value="" disabled>Select Type</option>
            <option id="type" onChange={(e) => { console.log(e.target.value); handle(e) }} value="movie">movie</option>
            <option id="type" onChange={(e) => {console.log(e.target.value); handle(e) }} value="tvShow">tvShow</option>
          </select>
          <input className='newinput' id="description" placeholder='description' value={data.description} type="description" onChange={(e) => { handle(e) }} />
          <input className='newinput' id="trailer" placeholder='trailer video' value={data.trailer} type="trailer" onChange={(e) => { handle(e) }} />
        
        </div>
        <button className='btnew' type='submit' onClick={ToastMessage}>Add</button>
        <button className='btnew' onClick={back}>Cancel</button>
        
      </form>
    </div>
  );
};

export default New;
