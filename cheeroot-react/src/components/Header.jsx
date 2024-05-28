import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = ({ openModal }) => {
  return (
    <header>
      <title>Cheeroot - Recipe Page</title>

      <input type="checkbox" id="toggler" />
      <label htmlFor="toggler" className="fas fa-bars"></label>

      <Link to="/" className="logo">Cheeroot √</Link>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/recipepage">Recipes</Link>
        <Link to="/productpage">Products</Link>
        <a href="#contacts" id="contactLink" onClick={(e) => { e.preventDefault(); openModal(); }}>Contacts</a>
      </nav>

      <div className="icons">
        <a href="#">
          <FontAwesomeIcon icon={faUser} />
        </a>
      </div>

      
    </header>
  );
}

export default Header;
