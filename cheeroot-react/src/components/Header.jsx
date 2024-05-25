import React from 'react';
import '../css/s.css'; // Correct relative path

const Header = () => {
  return (
    <header>
      <input type="checkbox" id="toggler" />
      <label htmlFor="toggler" className="fas fa-bars"></label>

      <a href="#home" className="logo">Cheeroot √</a>

      <nav className="navbar">
        <a href="project.html">home</a>
        <a href="#about">about</a>
        <a href="recipe.html">recipes</a>
        <a href="products.html">products</a>
        <button id="contactLink" onClick={() => alert('Open contact modal')}>contacts</button>
      </nav>

      <div className="icons">
        <a href="#" className="fas fa-user"></a>
      </div>
    </header>
  );
}

export default Header;
