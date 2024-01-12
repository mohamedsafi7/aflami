// WatchlistMovie.jsx

import React from 'react';

const WatchlistMovie = ({ movie, onDelete }) => {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.name} className="movie-image" />
      <div className="movie-info">
        <p>{movie.name}</p>
        <button className="delete-button" onClick={() => onDelete(movie.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default WatchlistMovie;
