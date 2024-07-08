import React from 'react';
import { Row, Container } from 'react-bootstrap';
import './Socials.css';


export default function Socials() {
return (
  <Container className="socialsContainer">
    <Row className="socialsContent">
      <ul>
        <li className="socialsLink">
          <a href="https://www.youtube.com/channel/UCDLU5AEO7qqnQXJPHlA9sPQ" target="_blank" rel="noopener noreferrer">
            <img src="/img/youtube.svg" alt="youtube" />
          </a>
        </li>
        <li className="socialsLink">
          <a href="https://www.soundcloud.com/stackpackers" target="_blank" rel="noopener noreferrer">
            <img src="/img/soundcloud.svg" alt="soundcloud" />
          </a>
        </li>
        <li className="socialsLink">
          <a href="https://open.spotify.com/artist/6oPMjcVt82VYpcntvL2JqZ?si=UjX0Yg0hQ96CzT9vUlkBuw" target="_blank" rel="noopener noreferrer">
            <img src="/img/spotify.svg" alt="spotify" />
          </a>
        </li>
        <li className="socialsLink">
          <a href="https://www.beatport.com/artist/stackpackers/1142861" target="_blank" rel="noopener noreferrer">
            <img src="/img/beatport.svg" alt="beatport" />
          </a>
        </li>
        <li className="socialsLink">
          <a href="https://music.apple.com/us/artist/stackpackers/1698648603" target="_blank" rel="noopener noreferrer">
            <img src="/img/apple.svg" alt="apple" />
          </a>
        </li>
        <li className="socialsLink">
          <a href="https://music.amazon.com/artists/B0B63XG3MK/stackpackers" target="_blank" rel="noopener noreferrer">
            <img src="/img/amazon.svg" alt="amazon" />
          </a>
        </li>
      </ul>
    </Row>
    <Row className='socialsContent'>
      <ul>
      <li className="socialsLink">
          <a href="https://instagram.com/stackpackers" target="_blank" rel="noopener noreferrer">
            <img src="/img/instagram.svg" alt="amazon" />
          </a>
        </li>
        <li className="socialsLink">
          <a href="https://facebook.com/stackpackers" target="_blank" rel="noopener noreferrer">
            <img src="/img/facebook.svg" alt="amazon" />
          </a>
        </li>
        <li className="socialsLink">
          <a href="https://www.tiktok.com/@stackpackers" target="_blank" rel="noopener noreferrer">
            <img src="/img/tiktok.svg" alt="amazon" />
          </a>
        </li>
      </ul>
    </Row>
  </Container>
);
}
