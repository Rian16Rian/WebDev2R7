import React from 'react';
import '../css/s.css'; 
import kristal from '../assets/IMG/kristal.webp'; 
import rianson from '../assets/IMG/rianson.webp'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

const TeamSection = () => {
  return (
    <section className="team-section" id="team-section">
      <div className="team-title">
        <h1>Meet Our Team</h1>
      </div>
      <div className="team-cards">
        <div className="team-card">
          <div className="team-image">
            <img src={kristal} alt="Kristal Sarsoza" />
          </div>
          <div className="team-detail">
            <h3>Kristal Sarsoza</h3>
            <a href="https://www.facebook.com/kristalangeline.sarsoza">
              <FontAwesomeIcon icon={faFacebookSquare} /> Kristal Angeline Sarsoza
            </a>
            <a href="mailto:sarsoza.kristal2003@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} /> sarsoza.kristal2003@gmail.com
            </a>
            <p>Web Developer</p>
          </div>
        </div>

        <div className="team-card">
          <div className="team-image">
            <img src={rianson} alt="Rianson Amar" />
          </div>
          <div className="team-detail">
            <h3>Rianson Amar</h3>
            <a href="https://www.facebook.com/rianson.amar">
              <FontAwesomeIcon icon={faFacebookSquare} /> Rianson Amar
            </a>
            <a href="mailto:amar.rianson16@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} /> amar.rianson16@gmail.com
            </a>
            <p>Web Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;