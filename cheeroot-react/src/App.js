import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import ContactInfoModal from './components/ContactInfoModal';
import Container from './components/Container';
import About from './components/About';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import './css/s.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header openModal={openModal} />
      <Home />
      {isModalOpen && <ContactInfoModal closeModal={closeModal} />}
      <Container />
      <About />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default App;
