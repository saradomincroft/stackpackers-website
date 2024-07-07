import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Music.css';


export default function Music() {
return (
<div id="Music" className="tabcontent">


  <Row className="musicContent">
    <ul>
      <li className="musicLink">
        <a href="https://www.youtube.com/channel/UCDLU5AEO7qqnQXJPHlA9sPQ" target="_blank" rel="noopener noreferrer">
        <img src="/img/youtube.svg" alt="youtube" />
        </a>
      </li>
      <li className="musicLink">
        <a href="https://www.soundcloud.com/stackpackers" target="_blank" rel="noopener noreferrer">
        <img src="/img/soundcloud.svg" alt="soundcloud" />
        </a>
      </li>
      <li className="musicLink">
        <a href="https://open.spotify.com/artist/6oPMjcVt82VYpcntvL2JqZ?si=UjX0Yg0hQ96CzT9vUlkBuw" target="_blank" rel="noopener noreferrer">
        <img src="/img/spotify.svg" alt="spotify" />
        </a>
      </li>
      <li className="musicLink">
        <a href="https://www.beatport.com/artist/stackpackers/1142861" target="_blank" rel="noopener noreferrer">
        <img src="/img/beatport.svg" alt="beatport" />
        </a>
      </li>
      <li className="musicLink">
        <a href="https://music.apple.com/us/artist/stackpackers/1698648603" target="_blank" rel="noopener noreferrer">
        <img src="/img/apple.svg" alt="apple" />
        </a>
      </li>
      <li className="musicLink">
        <a href="https://music.amazon.com/artists/B0B63XG3MK/stackpackers" target="_blank" rel="noopener noreferrer">
        <img src="/img/amazon.svg" alt="amazon" />
        </a>
      </li>
    </ul>
  </Row>

  <div className="soundcloud">
    <iframe
      width="100%"
      height="450"
      scrolling="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1625789674%3Fsecret_token%3Ds-xEPGoZvor86&color=%230f100f&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"> 
    </iframe>
    <div style={{
      fontSize: "10px",
      color: "#cccccc",
      lineBreak: "anywhere",
      wordBreak: "normal",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      fontFamily: "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
      fontWeight: "100"
      }}>
      <a href="https://soundcloud.com/stackpackers" title="Stackpackers" target="_blank" style={{ color: "#cccccc", textDecoration: "none" }}>
      Stackpackers
      </a>
    </div>
  </div>
</div>
);
}
