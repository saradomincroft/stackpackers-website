import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Music from './components/Music/Music';
import Contact from './components/Contact/Contact';
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
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </>
  );
};

export default App;
