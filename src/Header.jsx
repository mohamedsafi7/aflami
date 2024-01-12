import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

import './App.css'; 
import Signup from './Signup.jsx';

const Header = ({ setSearchTerm }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    const inputText = e.target.value;
    setSearchInput(inputText);
    setSearchTerm(inputText);
  };

  return (
    <div className='app'>
      <div className="header">
        <div className="top">
          <NavLink to="/Home">
            <h1> MoviePOWER </h1>
          </NavLink>
          <NavLink to="../">
            <h2> Login </h2>
          </NavLink>
          <NavLink to="/Watchlist"><h2> Watchlist </h2></NavLink>
          <div className="search">
            <input value={searchInput} onChange={handleSearch} placeholder="Search for movies"/>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
