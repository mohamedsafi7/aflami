
import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { NavLink } from 'react-router-dom';
import './App.css'; 
import Header from './Header.jsx';


const API_URL = "http://localhost:3001/movies";
const API_URL1 = "http://localhost:3001/tvShow";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [genre, setGenre] = useState(null);
  const [type, setType] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const moviesResponse = await fetch(API_URL);
      const tvShowResponse = await fetch(API_URL1);

      const moviesData = await moviesResponse.json();
      const tvShowData = await tvShowResponse.json();

      setFilteredData([...moviesData, ...tvShowData]);
    };

    fetchData();
  }, []);

  const filterData = () => {
    return filteredData.filter((item) => {
      return (
        (!type || item.type === type) &&
        (!genre || item.genre === genre) &&
        (!searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });
  };

  return (
    <div className="home">
    <Header setSearchTerm={setSearchTerm} />

      <div className="filters">
        <div className="type-genre-container">
        <span
        className={`filter ${selectedType === null ? 'selected' : ''}`}
        onClick={() => {
          setType(null);
          setSelectedType(null);
        }}
      >
       All
      </span>
      <span>Or</span>
          <span
            className={`filter ${selectedType === 'movie' ? 'selected' : ''}`}
            onClick={() => {
              setType('movie');
              setSelectedType('movie');
            }}
          >
            Movies
          </span>
          <span>/</span>
          <span
            className={`filter ${selectedType === 'tvShow' ? 'selected' : ''}`}
            onClick={() => {
              setType('tvShow');
              setSelectedType('tvShow');
            }}
          >
            Series
          </span>

        </div>
        
        <ul className="genre-list">
          <li
            className={`genre-btn ${selectedGenre === null ? 'selected' : ''}`}
            onClick={() => {
              setGenre(null);
              setSelectedGenre(null);
            }}
          >
            All
          </li>
          <span>Or</span>
          <li
            className={`genre-btn ${selectedGenre === 'Drama' ? 'selected' : ''}`}
            onClick={() => {
              setGenre('Drama');
              setSelectedGenre('Drama');
            }}
          >
            Drama
          </li>
          <span>/</span>
          <li
            className={`genre-btn ${selectedGenre === 'Action' ? 'selected' : ''}`}
            onClick={() => {
              setGenre('Action');
              setSelectedGenre('Action');
            }}
          >
            Action
          </li>
          <span>/</span>
          <li
            className={`genre-btn ${selectedGenre === 'Crime' ? 'selected' : ''}`}
            onClick={() => {
              setGenre('Crime');
              setSelectedGenre('Crime');
            }}
          >
            Crime
          </li>
          <span>/</span>
          <li
            className={`genre-btn ${selectedGenre === 'Sci-Fi' ? 'selected' : ''}`}
            onClick={() => {
              setGenre('Sci-Fi');
              setSelectedGenre('Sci-Fi');
            }}
          >
            Sci-Fi
          </li>
        </ul>
        
      </div>

      {filterData()?.length > 0 ? (
        <div className="container">
          {filterData().map((item) => (
            <MovieCard key={item.id} id={item.id} genre={item.genre} name={item.name} image={item.image} />
          ))}
        </div>
        
      ) : (
        <div className="empty">
          <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
