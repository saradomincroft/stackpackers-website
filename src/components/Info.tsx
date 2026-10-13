"use client";
import { useEffect, useRef, useState } from "react";

const Info = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setInView(false);
      }
    };

    if (sectionRef.current) observer.observe(sectionRef.current);
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="info-section"
      ref={sectionRef}
      className="w-full flex flex-col items-center justify-center"
    >
      <h2 className="sr-only">Info</h2>
      {/* SPOTIFY IFRAME */}
      <div
        className={`transition-all duration-1000 ease-in-out transform ${
          inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
        } w-[80%] mt-6 overflow-hidden`}
        style={{
          backgroundColor: "#92007d",
          transitionDelay: inView ? "0.2s" : "0s",
          borderRadius: "0px",
        }}
      >
        <iframe
        data-testid="embed-iframe"
        src="https://open.spotify.com/embed/track/1GHbPLS2TmiTXB75u2dtwc?utm_source=generator&si=095757aa38ac412b"
        width="100%"
        height="152"
        title="Stackpackers Spotify Release"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{
            border: "none",
            borderRadius: "12px",
            display: "block",
        }}
        />
      </div>
        {/* PRESS IMAGE */}
        <div
        className={`relative transition-all duration-1000 ease-in-out transform ${
            inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
        } w-[80%] aspect-[21/9] mt-6`}
        style={{ transitionDelay: inView ? "0.4s" : "0s" }}
        >
        <img
            src="/img/profile-banner.jpg"
            alt="Stackpackers Duo"
            className="w-full h-full object-cover"
        />
        
        {/* Credit Text Overlay */}
        <a
            href="https://www.instagram.com/rexthebard/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 text-white text-xs bg-black bg-opacity-50 px-2 py-1 rounded"
        >
            Photo Credits: @rexthebard
        </a>
        </div>


      {/* BIO TEXT */}
      <div
        className={`transition-all duration-1000 ease-in-out transform mt-6 ${
          inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
        } w-[80%] text-white text-left`}
        style={{ transitionDelay: inView ? "0.6s" : "0s" }}
      >
        <div className="p-6" style={{ backgroundColor: "rgba(0, 31, 61, 0.8)" }}>
            <p className="pb-4 text-sm sm:text-base md:text-lg leading-relaxed font-thin">
            Stackpackers are a storm in full force, sharing a
            chemistry that&apos;s electric, unpredictable, and experimental. 
            With drum & bass at the heart of their sound, UK born duo
            have made their mark with power-packed sets that keep
            the dance floor charged. However, it&apos;s not all thunder and
            lightning, they know exactly when to bring it down with moody and dark sounds.
            </p>
            <p className="pb-4 text-sm sm:text-base md:text-lg leading-relaxed font-thin">
            You can also catch them playing liquid, dubstep, UKG and psytrance sets, 
            proving they&apos;re as versatile as they are energetic. 
            The pair bring their signature energy to all performances.
            </p>
            <p className="pb-4 text-sm sm:text-base md:text-lg leading-relaxed font-thin">
            In the production space, Stackpackers have been gaining traction 
            with their releases going off in the rave. 
            Their tracks have found a home with those who seek unfiltered chaos, and a fresh take 
            on the underground sound. 
            They recently launched <u><a href="https://electropolisrecords.com/">Electropolis Records</a></u>, 
            a platform showcasing the vibrant and gritty sounds of the modern world.
            </p>
        </div>
      </div>
      
        {/* 6. DJ IMAGE 1 */}
        <div
        className={`relative transition-all duration-1000 ease-in-out transform ${
            inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
        } w-[80%] mt-6`}
        style={{ transitionDelay: inView ? "1s" : "0s" }}
        >
        <img
            src="/img/stackpackers-dj-1.jpg"
            alt="Stackpackers DJ Photo - Taken by Nicholas Bexter Photography"
            className="w-full h-full object-cover"
        />
        <a
            href="https://www.instagram.com/nicholasbexter_photography"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 text-white text-xs bg-black bg-opacity-50 px-2 py-1 rounded"
        >
            Photo Credits: @nicholasbexter_photography
        </a>
        </div>

        {/* 7. DJ IMAGE 2 */}
        <div
        className={`relative transition-all duration-1000 ease-in-out transform ${
            inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
        } w-[80%] mt-6`}
        style={{ transitionDelay: inView ? "1.2s" : "0s" }}
        >
        <img
            src="/img/stackpackers-dj-2.jpg"
            alt="Stackpackers DJ Photo - Taken by Larkz"
            className="w-full h-full object-cover"
        />
        <a
            href="https://www.instagram.com/larkz/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 text-white text-xs bg-black bg-opacity-50 px-2 py-1 rounded"
        >
            Photo Credits: @larkz
        </a>
        </div>
    </section>
  );
};

export default Info;
