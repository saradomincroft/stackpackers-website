import React from 'react';
import { Container } from 'react-bootstrap';
import './Home.css';


export default function Home() {
  return (
    <div id="Home" className="tabcontent">
      <Container fluid className="video-container">
          <video autoPlay loop muted>
          <source src="/img/home-vid.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-logo-container">
            <img src="/img/stackpackers-logo.svg" alt="Logo" />
          </div>
      </Container>
    </div>
  );
}
