import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(sessionStorage.getItem('activeTab') || 'about');

  useEffect(() => {
    sessionStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openNav = () => {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("openbtn").style.marginRight = "100%";
  };

  const closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("openbtn").style.marginRight = "0";
  };

  const openTab = (tabName) => {
    setActiveTab(tabName);
    closeNav();
  };

  return (
    <div className={`overlay-menu ${menuOpen ? 'open' : ''}`}>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand className="logo-container">
            <img
              src={`${process.env.PUBLIC_URL}/img/sp-logo.svg`}
              height="30"
              className="align-top color-black logo"
              alt="Stackpackers Logo"
            />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav" className={`justify-content-center ${menuOpen ? 'show' : ''}`}>
            <Nav className="align-items-center custom-nav">
              <Nav.Link as={NavLink} to="/" exact onClick={() => openTab('home')}>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/about" onClick={() => openTab('about')}>About</Nav.Link>
              <Nav.Link as={NavLink} to="/music" onClick={() => openTab('music')}>Music</Nav.Link>
              <Nav.Link as={NavLink} to="/events" onClick={() => openTab('events')}>Events</Nav.Link>
              <Nav.Link as={NavLink} to="/contact" onClick={() => openTab('contact')}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <button id="openbtn" className="open-menu" onClick={openNav}>☰</button>
      <div id="mySidebar" className="sidebar">
        <button className="closebtn" onClick={closeNav}>×</button>
        <ul>
          <li><NavLink to="/" exact onClick={() => openTab('home')}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => openTab('about')}>About</NavLink></li>
          <li><NavLink to="/music" onClick={() => openTab('music')}>Music</NavLink></li>
          <li><NavLink to="/events" onClick={() => openTab('events')}>Events</NavLink></li>
          <li><NavLink to="/contact" onClick={() => openTab('contact')}>Contact</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

