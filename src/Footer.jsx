import './Footer.css';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="f-item-con">
        <div className="app-info">
          <span className="app-name">
            <span className="app-initial">Movie</span>Power
          </span>
          <p>
            We provide you some <strong>Movies</strong> and <strong>Tv Shows</strong> latest news .
          </p>
        </div>
        <div className="useful-links">
          <div className="footer-title">Useful Links</div>
          <ul>
            <li>Sign In</li>
            <li>  About Us</li>
            <li> New</li>
            <li> Watchlist</li>
          </ul>
        </div>
        <div className="help-sec">
          <div className="footer-title">Help</div>
          <ul>
            <li>give ur</li>
            <li>Feedback or</li>
            <li>Report an Issue / Bug</li>
          </ul>
        </div>
        <div className="g-i-t">
          <div className="footer-title">Get in Touch</div>
          <form className="space-y-2">
            <input type="text" name="g-name" className="g-inp" id="g-name" placeholder="Name" />
            <input type="email" name="g-email" className="g-inp" id="g-email" placeholder="Email" />
            <textarea type="text" name="g-msg" className="g-inp h-40 resize-none" id="g-msg" placeholder="Message..."></textarea>
            <button className="f-btn">Submit</button>
          </form>
        </div>
      </div>
      <div className="cr-con">Copyright &copy; 2024 | Made by Mohamed Safi</div>
    </footer>
  );
};

export default Footer;

