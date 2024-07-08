import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(sessionStorage.getItem('activeTab') || 'home');
  const [burgerVisible, setBurgerVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  const openNav = () => {
    document.getElementById("mySidebar").style.width = "100%";
    // document.body.style.overflow = 'hidden';
    setBurgerVisible(false);
  };

  const closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    setTimeout(() => {
      setBurgerVisible(true);
    }, 400); // delay on burger menu show after x is clicked to prevent overlap
    // document.body.style.overflow = 'hidden';
    setMenuOpen(false);
  };

  const openTab = (tabName, path) => {
    setActiveTab(tabName);
    closeNav();
    navigate(path);
  };

  return (
    <div className={`overlay-menu ${menuOpen ? 'open' : ''}`}>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          {/* <Navbar.Brand className="logo-container">
            <img
              src={`${process.env.PUBLIC_URL}/img/sp-logo.svg`}
              height="30"
              className="align-top color-black logo"
              alt="Stackpackers Logo"
            />
          </Navbar.Brand> */}
          <Navbar.Collapse id="responsive-navbar-nav" className={`justify-content-center ${menuOpen ? 'show' : ''}`}>
            <Nav className="align-items-center custom-nav">
              <Nav.Link as={NavLink} to="/" exact onClick={() => openTab('home', '/')}>Home</Nav.Link>
              {/* <Nav.Link as={NavLink} to="/about" onClick={() => openTab('about', '/about')}>About</Nav.Link> */}
              <Nav.Link as={NavLink} to="/music" onClick={() => openTab('music', '/music')}>Music</Nav.Link>
              {/* <Nav.Link as={NavLink} to="/events" onClick={() => openTab('events', '/events')}>Events</Nav.Link> */}
              <Nav.Link as={NavLink} to="/contact" onClick={() => openTab('contact', '/contact')}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {burgerVisible && <button id="openbtn" className="open-menu" onClick={openNav}>☰</button>}
      <div id="mySidebar" className="sidebar">
        <button className="closebtn" onClick={closeNav}>×</button>
        <Nav className="flex-column align-items-center custom-nav">
          <Nav.Link as={NavLink} to="/" exact className="nav-link" onClick={() => openTab('home', '/')}>Home</Nav.Link>
          {/* <Nav.Link as={NavLink} to="/about" className="nav-link" onClick={() => openTab('about', '/about')}>About</Nav.Link> */}
          <Nav.Link as={NavLink} to="/music" className="nav-link" onClick={() => openTab('music', '/music')}>Music</Nav.Link>
          {/* <Nav.Link as={NavLink} to="/events" className="nav-link" onClick={() => openTab('events', '/events')}>Events</Nav.Link> */}
          <Nav.Link as={NavLink} to="/contact" className="nav-link" onClick={() => openTab('contact', '/contact')}>Contact</Nav.Link>
        </Nav>
        {/* <div className="profile-image-container">
          <img src="/img/profile-image.jpg" alt="Profile" className="profile-image" />
        </div> */}
      </div>
    </div>
  );
}
