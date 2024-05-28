import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = ({ openModal }) => {
  return (
    <header>
      <input type="checkbox" id="toggler" />
      <label htmlFor="toggler" className="fas fa-bars"></label>

      <a href="#home" className="logo">Cheeroot √</a>

      <nav className="navbar">
        <a href="project.html">Home</a>
        <a href="#about">About</a>
        <a href="recipe.html">Recipes</a>
        <a href="products.html">Products</a>
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
