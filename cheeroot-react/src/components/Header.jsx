import React, { useState } from 'react';
import '../css/s.css'; // Correct relative path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ContactInfoModal from './ContactInfoModal'; // Import the modal component

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility

  // Function to toggle modal visibility
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

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
        {/* Call toggleModal function when the button is clicked */}
        <button id="contactLink" onClick={toggleModal}>contacts</button>
      </nav>

      <div className="icons">
        <a href="#">
          <FontAwesomeIcon icon={faUser} />
        </a>
      </div>
      
      {/* Render the modal component conditionally based on modalOpen state */}
      {modalOpen && <ContactInfoModal closeModal={() => setModalOpen(false)} />}
    </header>
  );
}

export default Header;
