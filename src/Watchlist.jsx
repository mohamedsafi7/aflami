// Watchlist.jsx

import React from 'react';
import './Watchlist.css'; // Import the CSS file
import Header from './Header'; // Import the Header component

const WatchlistMovie = ({ movie, removeFromWatchlist }) => (
  <tr>
    <td><img src={movie.image} alt={movie.name} /></td>
    <td>{movie.name}</td>
    <td>
      <button className="delete-btn" onClick={() => removeFromWatchlist(movie.id)}>
        Delete
      </button>
    </td>
  </tr>
);

const Watchlist = ({ watchlist, removeFromWatchlist }) => (
  <div className='mywatch'>
    <Header />
    <table className="watchlist">
      <thead>
        <tr>
          <th>My Watchlist : </th>
        </tr>
      </thead>
      <tbody>
        {watchlist.map((movie) => (
          <WatchlistMovie key={movie.id} movie={movie} removeFromWatchlist={removeFromWatchlist} />
        ))}
      </tbody>
    </table>
  </div>
);

export default Watchlist;
