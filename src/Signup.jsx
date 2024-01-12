import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './center.css';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const url = "http://localhost:3002/users"; /*link of the api here, add in the end of the link /Create*/
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        id:""
    });
    const ToastMessage = () => {
        toast.error("Error Informations !", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
      };

    function handle(e) {
        const { id, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    }

    const hsubmit = (e) => {
        e.preventDefault();

        Axios.post(url, {
            name: data.name,
            email: data.email,
            password: data.password
        })
        .then(res => {
            // Check if login is correct
            if (res.data && res.data.length > 0) {
              // If login is successful, manually navigate to home
              window.location.href = '/Signin'; // Assuming your home page route is '/'
            } else {
                window.location.href = '/Signin';
            }
          })
          .catch(error => {
            console.error('Error during signin:', error);
            alert('Error during signin');
          });
    };

    return (
        <div className='form-box'>
            <form onSubmit={hsubmit} className='form'>
                <span className="title">Sign up</span>
                <span className="subtitle">Create an account with your email.</span>
                <div className='form-cotainer'>
                    <input className='input' id="name" placeholder='name' value={data.name} type="text" onChange={(e) => { handle(e) }} />
                    <input className='input' id="email" placeholder='email' value={data.email} type="email" onChange={(e) => { handle(e) }} />
                    <input className='input' id="password" placeholder='password' value={data.password} type="password" onChange={(e) => { handle(e) }} />
                </div>
                <button type='submit' onClick={ToastMessage}>Sign up</button>
                <ToastContainer />
            </form>
            <div className="form-section">
                <p>Have an account? <NavLink to="/Signin">Log in</NavLink></p>
            </div>
        </div>
    );
};

export default Signup;
