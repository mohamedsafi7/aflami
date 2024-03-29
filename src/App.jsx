import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import MovieDetails from './MovieDetails.jsx'; // Import the MovieDetails component
import Signup from './Signup.jsx';
import Signin from './Signin.jsx';
import Watchlist from './Watchlist';
import About from './About';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import New from './New.jsx';
import { Provider } from 'react-redux';
import store from './Store';

const App = () => {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    // Check if the movie is already in the watchlist
    const isAlreadyAdded = watchlist.some((item) => item.id === movie.id);

    if (!isAlreadyAdded) {
      setWatchlist((prevWatchlist) => [...prevWatchlist, movie]);
    } else {
      toast.error('Movie already in watchlist', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const removeFromWatchlist = (movieId) => {
    setWatchlist((prevWatchlist) =>
      prevWatchlist.filter((movie) => movie.id !== movieId)
    );
  };

  return (
    <Provider store={store}>  
    <Router>
      <Routes>
        <Route path="/Home" element={<Home addToWatchlist={addToWatchlist} />}/>
        <Route path="/Home/MovieDetails/:id"  element={<MovieDetails addToWatchlist={addToWatchlist} />} />
        <Route path="/Home/Watchlist" element={<Watchlist watchlist={watchlist} removeFromWatchlist={removeFromWatchlist} />}/>
        <Route path="/" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home/About" element={<About />} />
        <Route path="/Home/New" element={<New />} />

      </Routes>
    </Router></Provider>
  );
};

export default App;
