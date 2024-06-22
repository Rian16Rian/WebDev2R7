import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faLinkedin, faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
import '../css/s.css'; 

const Footer = () => {
  return (
    <footer>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">
            Copyright © 2024 Cheeroot. Created by A&S DUO
          </span>
          <div className="social_links">
            <a href="#"><FontAwesomeIcon icon={faFacebookSquare} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitterSquare} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faGooglePlusSquare} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
