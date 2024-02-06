import log from './../pics/log.webp';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './center.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';

const Signin = () => {
  const url = "http://localhost:3002/users";
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const showToastMessage = () => {
    toast.error("Error Informations !", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };
  const handle = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  
    Axios.get(url)
      .then(res => {
        const users = res.data && res.data.users ? res.data.users : [];
        
        const user = users.find(u => u.email === data.email && u.password === data.password);

        if (user) {
          // Valid user information, navigate to home page
          useNavigate('/Home');
        } 
      })
      .catch(error => {
        console.error('Error during signin:', error);
      });
  };
  

  return (
    <div className='form-box'>
    <div className='bg'>
    <img src={log} alt="" />
    </div>
    <div className='frm'>
    <form onSubmit={handleSubmit} className='form'>
    <span className="title">Sign In</span>
    <span className="subtitle">Sign in to the account with your email.</span>
      <div className='form-container'>
        <input className='input' id="email" placeholder='email' value={data.email} type="email" onChange={handle} />
        <input className='input' id="password" placeholder='password' value={data.password} type="password" onChange={handle} />
      </div>
      <button type='submit' onClick={showToastMessage}> Login</button>
       
    </form>
    <div className="form-section">
      <p>Dont have an account? <NavLink to="/Signup">Sign up</NavLink></p>
    </div></div>
    </div>
  );
};

export default Signin;