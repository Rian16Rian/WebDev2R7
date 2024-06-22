
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Home() {
  const scrollToTitle = () => {
    const element = document.getElementById('titlecontainer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="home">
      <div className="overlay">
        <h1>FRESH HERBS</h1>
        <h2>Natural & Nutritious</h2>
        <p>Elevate Your Journey With Fresh Flavors And Timeless Traditions</p>
        <Link to="#titlecontainer" className="explore-button" onClick={scrollToTitle}>EXPLORE</Link>
        <div className="icon">
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
    </header>
  );
}

export default Home;
