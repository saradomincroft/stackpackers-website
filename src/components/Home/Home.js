import React, { useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './Home.css';
import ImageSlideIn from '../ImageSlideIn/ImageSlideIn';

export default function Home() {
  const arrowRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      if (window.scrollY > scrollThreshold) {
        arrowRef.current.style.opacity = '0';
      } else {
        arrowRef.current.style.opacity = '1';
      }

      // Check if any image is in viewport
      imageRefs.current.forEach((imageRef) => {
        if (imageRef) {
          const rect = imageRef.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
          if (isVisible) {
            imageRef.classList.add('slide-in');
          } else {
            imageRef.classList.remove('slide-in');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      <div ref={arrowRef} className="scroll-down-arrow">
        <span></span>
      </div>
      <div className="about">
        <p>Consisting of Sara and Joe, born in the UK and are now based in Melbourne/Naarm. Their early years on the UK rave circuit immersed them in bass-filled warehouses and vibrant fields teeming with energetic ravers. Fast forward to the present, the duo mix and produce Drum & Bass, alongside a diverse range that encompasses genres such as Bass House, Psytrance, and 140. Renowned for their electrifying performances and distinctive sound, Stackpackers have built a reputation for delivering captivating shows and songs that showcase their unique blends and high-energy sets.</p>
        <p>Sara and Joe met in Tabulam, NSW, whilst completing their 88 days of regional work for their Working Holiday Visas. The pair quickly bonded over their love of Drum & Bass and travelling. Upon returning to Melbourne, they immersed themselves in the local music scene, honing their craft through weekly open decks nights at Sub Club. It wasn't long before Stackpackers emerged, marking the inception of their musical partnership.</p>
        <p>In March 2024 Stackpackers closed the main stage of the first edition of Touch Bass in Melbourne, with Twisted Audio, playing straight after Wilkinson, Kanine and Sota. Stackpackers have also been on the same lineups as artists such as Bou & B Live 24/7, Basstripper, Camo & Krooked, Terrence & Phillip, Turno, Mefjus, Subsonic, S.P.Y, Mozey, Benny L, Inja, Keeno, Whiney & P Money, Mollie Collins, Pola & Bryson, Smilk, and Dub Phizix & Strategy. Recently, they have been focusing on producing music, with self-released track 'Run' going off in the rave.</p>
        <p>Once solidified in the DJing scene, they established Nocturne, an events brand with a focus on heavy, high energy Drum and Bass raves. Nocturne have run many unforgettable club nights, collaborating with Twisted Audio, SUB:SOLAR, and Delight as well as solo ventures, featuring top-tier talent such as Turno, Dreps, Sub Zero, Gray, Annix, B.O.M, Yussi, Flowidus, Mozey, Keeno, and Terrence & Phillip for headline shows in Melbourne.</p>
      </div>
      <div className="image-gallery">
        <ImageSlideIn ref={(el) => (imageRefs.current[0] = el)} src="/img/touchbass.jpg" alt="Stackpackers at Touch Bass / Twisted Audio" />
        <p className="photo-credit">Photo by <a href="https://www.instagram.com/larkzvisuals_events/">Larkz Visuals</a></p>
      </div>
    </div>
  );
}
