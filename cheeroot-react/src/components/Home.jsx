import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <>
    <header className="home">
      <div className="overlay">
        <h1>FRESH HERBS</h1>
        <h2>Natural & Nutritious</h2>
        <p>Elevate Your Journey With Fresh Flavors And Timeless Traditions</p>
        <a href="#titlecontainer" className="explore-button">EXPLORE</a>
        <div className="icon">
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
    </header>
  </>
);
}

export default Home;