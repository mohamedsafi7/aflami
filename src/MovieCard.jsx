import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const MovieCard = ({ id, image, name }) => {
  return (
    <div className="movie">
      <div>
        <p>{name}</p>
      </div>

      <div>
          <img src={`../${image}`} alt={name} />

      </div>

      <div>
        <h3>{name}</h3>

        {/* Pass the id as a parameter when navigating to MovieDetails */}
        
        <Link to={`/MovieDetails/${id}`}>
          <button className="btn">View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
