
import React from 'react';
import './Watchlist.css';
import Footer from './Footer.jsx';
const WatchlistMovie = ({ movie, onDelete }) => {
  return (
    <>
    <div className="movie-card">
      <img src={movie.image} alt={movie.name} className="movie-image" />
      <div className="movie-info">
        <p>{movie.name}</p>
        <button className="delbutton" onClick={() => onDelete(movie.id)}>
          Delete
        </button>
      </div>
     
    </div>
     <Footer/>
     </>
  );
};

export default WatchlistMovie;
