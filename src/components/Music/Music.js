import React from 'react';
import './Music.css';


export default function Music() {
return (
<div id="Music" className="tabcontent">
  <div className="soundcloud">
    <iframe
      title="Soundcloud Player"
      width="100%"
      height="700"
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
      <a href="https://soundcloud.com/stackpackers" title="Stackpackers" target="_blank" rel="noopener noreferrer" style={{ color: "#cccccc", textDecoration: "none" }}>
      Stackpackers
      </a>
    </div>
  </div>
</div>
);
}
