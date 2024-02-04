import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header.jsx';
import { Rating } from 'react-simple-star-rating';

const MovieDetails = ({ addToWatchlist }) => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [rating, setRating] = useState(0);
  const [recommandations, setRecommandations] = useState([]);
  const [recommendedgenre, setRecommendedgenre] = useState([]);
  const [buttonText, setButtonText] = useState('Add to Watchlist');

  const apiMovies = "http://localhost:3001/movies";
  const apiTvShow = "http://localhost:3001/tvShow";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieResponse = await fetch(`http://localhost:3001/movies/${id}`);

        if (movieResponse.ok) {
          const movieData = await movieResponse.json();
          setMovieDetails(movieData);
        } else {
          // If the movie is not found, try fetching TV show details
          const tvShowResponse = await fetch(`http://localhost:3001/tvShow/${id}`);

          if (tvShowResponse.ok) {
            const tvShowData = await tvShowResponse.json();
            setMovieDetails(tvShowData);
          } else {
            console.error('No data found for the given ID.');
          }
        }
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieResult = await fetch(apiMovies);
        const tvShowResult = await fetch(apiTvShow);

        const movieRecommendations = await movieResult.json();
        const tvShowRecommendations = await tvShowResult.json();

        setRecommandations([...movieRecommendations, ...tvShowRecommendations]);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const genreResponse = await fetch(
          movieDetails.type === "movie"
            ? `${apiMovies}?genre=${movieDetails.genre}`
            : `${apiTvShow}?genre=${movieDetails.genre}`
        );

        if (genreResponse.ok) {
          const genreData = await genreResponse.json();
          setRecommendedgenre(genreData);
        }
      } catch (error) {
        console.error('Error fetching genre details:', error);
      }
    };

    if (movieDetails) {
      fetchGenre();
    }
  }, [movieDetails]);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRating(e.rating);
  };

  const handleAddToWatchlist = () => {
    addToWatchlist(movieDetails);
    setButtonText('Added');
  };

  return (
    <div className="apx">
      <Header />
      {movieDetails ? (
        <div className='cardetails'>
          <div className='cardimage'>
            <div dangerouslySetInnerHTML={{ __html: movieDetails.trailer }} />
          </div>
          <div className='cardcontent'>
            <p className='cardtitle'>{movieDetails.name}</p>
            <p className='info'>{movieDetails.genre}</p>
            <p className='info'>{movieDetails.description}</p>
            <div className='cardconfig'></div>
            <form onSubmit={handleSubmit}>
              <div className='stars'>
                <Rating
                  onClick={handleRating}
                  initialValue={0}
                  ratingValue={rating}
                  size={50}
                  transition
                />
              </div>
              <button className="cart" onClick={handleAddToWatchlist} disabled={buttonText === 'Added'}>
                {buttonText}
              </button>
            </form>
          </div>
          <div>
            {recommendedgenre && recommendedgenre.length > 0 ? (
              <div>
                <h2>Recommended Movies/TV Shows with the Same Genre:</h2>
                {recommendedgenre.map((item) => (
                  <div key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <h2>No recommendations available for the same genre</h2>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
