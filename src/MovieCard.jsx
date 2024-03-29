import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const MovieCard = ({ id, image, name , genre}) => {
  return (
    <div className="movie">
      <div>
        <p>{genre}</p>
      </div>
      <Link to={`/Home/MovieDetails/${id}`}>
      <div>
          <img src={`../${image}`} alt={name} />

      </div>
      </Link>
      <div>
        <h3>{name}</h3>

        {/* Pass the id as a parameter when navigating to MovieDetails */}
        
        <Link to={`/Home/MovieDetails/${id}`}>
          <button className="btn">View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
