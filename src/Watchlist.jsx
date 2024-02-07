import React from 'react';
import './Watchlist.css'; 
import Header from './Header'; 
import Footer from './Footer.jsx';

const WatchlistMovie = ({ movie, removeFromWatchlist }) => (
  <tr className="border-b-2 border-gray-200">
    <td className="movie-details">
     
    <img className="movie-image" src={`/${movie.image}`} alt={movie.name} />
       
      <span className="movie-name">{movie.name}</span>
    </td>
    <td className="movie-actions">
      <button className="delete-btn" onClick={() => removeFromWatchlist(movie.id)}>
        Delete
      </button>
    </td>
  </tr>
);

const Watchlist = ({ watchlist, removeFromWatchlist }) => (
  <>  
    <div className='mywatch'>
      <Header />
      <div className="overflow-x-auto">
        <table className="watchlist-table">
          <thead>
            <tr>
              <th className='seven'><h1>My watchlist</h1></th>
            </tr>
          </thead>
          <tbody>
            {watchlist.map((movie) => (
              <WatchlistMovie key={movie.id} movie={movie} removeFromWatchlist={removeFromWatchlist} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer />
  </>
);

export default Watchlist;
