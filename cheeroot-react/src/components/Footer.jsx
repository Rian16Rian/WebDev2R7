import React from 'react';
import '../css/s.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <i className="fab fa-slack"></i>
            <span className="logo_name">Cheers!</span>
          </div>
        </div>

        <div className="link-boxes">
          <ul className="box">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Our partners</a></li>
          </ul>
          <ul className="box">
            <li className="link_name">Services</li>
            <li><a href="#">Health and Wellness</a></li>
            <li><a href="#">Natural Products</a></li>
          </ul>
          <ul className="box input-box">
            <li className="link_name">Subscribe to Cheeroot</li>
            <li><input type="text" placeholder="Enter your email" /></li>
            <li><input type="button" value="Subscribe" /></li>
          </ul>
        </div>
      </div>

      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">Copyright © 2024 <a href="#">Cheeroot</a></span>
          <span className="policy_terms">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
