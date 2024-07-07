import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Music from './components/Music/Music';
import Events from './components/Events';
import Contact from './components/Contact';
import Socials from './components/Socials/Socials';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Socials />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </>
  );
};

export default App;
