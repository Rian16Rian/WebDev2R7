import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import ContactInfoModal from './components/ContactInfoModal';
import Container from './components/Container';
import About from './components/About';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import './css/s.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <ContactInfoModal />
      <Container />
      <About />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default App;
