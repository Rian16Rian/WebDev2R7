import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import UserProfile from './UserProfile';

const Header = ({ openModal }) => {
  const [isProfileVisible, setProfileVisible] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleProfileVisibility = () => {
    setProfileVisible(!isProfileVisible);
  };

  const toggleMenuVisibility = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <header>
      <title>Cheeroot - Recipe Page</title>

      <input type="checkbox" id="toggler" onChange={toggleMenuVisibility} checked={isMenuVisible} />
      <label htmlFor="toggler" className="hamburger">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </label>

      <Link to="/" className="logo">Cheeroot √</Link>

      <nav className={`navbar ${isMenuVisible ? 'active' : ''}`}>
        <Link to="/" onClick={toggleMenuVisibility}>Home</Link>
        <Link to="/about" onClick={toggleMenuVisibility}>About</Link>
        <Link to="/recipepage" onClick={toggleMenuVisibility}>Recipes</Link>
        <Link to="/productpage" onClick={toggleMenuVisibility}>Products</Link>
        <a href="#contacts" id="contactLink" onClick={(e) => { e.preventDefault(); openModal(); toggleMenuVisibility(); }}>Contacts</a>
      </nav>

      <div className="icons" onClick={toggleProfileVisibility}>
        <a>
          <FontAwesomeIcon icon={faUser} />
        </a>
        {isProfileVisible && <UserProfile />}
      </div>
    </header>
  );
}

export default Header;
