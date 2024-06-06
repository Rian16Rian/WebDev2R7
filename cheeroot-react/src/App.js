import React, { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ContactInfoModal from './components/ContactInfoModal';
import Container from './components/Container';
import About from './components/About';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import RecipePage from './pages/RecipePage';
import ProductPage from './pages/ProductPage';
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
    <HashRouter>
      <div className="App">
        <Header openModal={openModal} />
        {isModalOpen && <ContactInfoModal closeModal={closeModal} />}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Container />
                <About />
                <TeamSection />
              </>
            }
          />
          <Route path="/recipepage" element={<RecipePage />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<TeamSection />} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
