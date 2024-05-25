import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import ContactInfoModal from './components/ContactInfoModal';
import Container from './components/Container';
import About from './components/About';
import './css/s.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <ContactInfoModal />
      <Container />
      <About />
      {/* Other components go here */}
    </div>
  );
}

export default App;
