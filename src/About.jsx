import React from 'react';
import './about.css'
import { NavLink } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
const About = () => {
  return (
    <div className="responsive-container-block bigContainer">
    <Header /><div className='path'><NavLink to="/Home"><img src="./../pics/home.png" alt="" /></NavLink>
        <h2>/About Us</h2>
        </div>
      <div className="responsive-container-block Container">
      
        <div className="responsive-container-block leftSide">
        
          <p className="text-blk heading">
            Meet Our Creative Team
          </p>
          <p className="text-blk subHeading">
          Welcome to MoviePower, where passion for cinema meets creativity! Our dedicated team of movie enthusiasts is on a mission to curate an unparalleled cinematic experience for you. From seasoned film critics to tech-savvy developers, our diverse group brings a wealth of expertise to the table. We believe in the power of storytelling and are committed to providing you with a seamless, user-friendly platform that celebrates the magic of movies. Meet the faces behind the scenes – a harmonious blend of creativity, innovation, and love for the silver screen. At MoviePower, we're not just a team; we're a community united by our shared love for film. Join us on this cinematic journey, and lets make your movie-watching experience extraordinary together!
          </p>
        </div>
        <div className="responsive-container-block rightSide">
          <img className="number1img" src="./../pics/about10.jpg" alt="Number 1"/>
          <img className="number2img" src="./../pics/test1.jpg" alt="Number 2"/>
          <img className="number3img" src="./../pics/about1.jpg" alt="Number 3"/>
          <img className="number5img" src="./../pics/test.avif" alt="Number 5"/>
          <iframe
            allowFullScreen
            className="number4vid"
            poster="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b242.png"
            src="https://www.youtube.com/embed/svg%3E?"
          ></iframe>
          <img className="number7img" src="./../pics/lastabout.jpg" alt="Number 7"/>
          <img className="number6img" src="./../pics/about6.jpg" alt="Number 6"/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
