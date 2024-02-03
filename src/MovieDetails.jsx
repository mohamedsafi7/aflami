import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header.jsx';
import './info.css';
import { Rating } from 'react-simple-star-rating';

const MovieDetails = ({ addToWatchlist }) => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [rating, setRating] = useState(0);
  const [recommandations,setRecommandations] = useState([]);
  const [buttonText, setButtonText] = useState('Add to Watchlist');

  const api_movies= "http://localhost:3001/movies";
  const api_tvshow= "http://localhost:3001/tvShow";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieResponse = await fetch(`http://localhost:3001/movies/${id}`);
    
        if (movieResponse.ok) {
          const movieData = await movieResponse.json();
          setMovieDetails(movieData);
        } else {
          // If movie is not found, try fetching TV show details
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

  useEffect(()=>{
    const data= async()=>{
      const movieResult= await fetch(api_movies);
      const tvshowResult= await fetch(api_tvshow);

      const movierecommend = await movieResult.json();
      const tvshowrecommend = await tvshowResult.json();

      setRecommandations([...movierecommend,...tvshowrecommend])
    };
    data();
  },[]);

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
            <div className='cardconfig'>
            </div>
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
          {data ?(
          <div>
            {Recommandations().map((i)=>(
              <div>
              <img src={i.image} alt="" />
              <h3></h3>
              </div>
              
            ))}
          </div>
        ):(
          <div><h1>aucun</h1></div>
          )}
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
