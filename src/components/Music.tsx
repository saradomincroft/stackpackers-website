/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef, useState } from "react";

const artworks = [
    {
        title: "Woo Bass",
        href: "https://soundcloud.com/stackpackers/woo-bass",
        imgSrc: "/img/music-artwork/woobass.jpg",
    },
    {
        title: "How It's Done",
        href: "https://soundcloud.com/stackpackers/huntrix-how-its-done",
        imgSrc: "/img/music-artwork/howitsdone.jpg",
    },
    {
        title: "Dark Side",
        href: "https://soundcloud.com/stackpackers/dark-side",
        imgSrc: "/img/music-artwork/darkside.jpg",
    },
    {
        title: "Your Outie",
        href: "https://www.youtube.com/watch?v=1oD1SbNvmmI",
        imgSrc: "/img/music-artwork/your-outie.jpg",
    },
    {
        title: "Notorious",
        href: "https://open.spotify.com/track/0snGpj75e0p0vw2XS9J05z?si=62e17e124d894703",
        imgSrc: "/img/music-artwork/notorious.jpg",
    },
    {
        title: "Think Too Much",
        href: "https://open.spotify.com/track/2xbupDenR62ke7tB3CF8V4?si=258c7182a4134cc2",
        imgSrc: "/img/music-artwork/think-too-much.jpg",
    },
    {
        title: "Bonkers",
        href: "https://open.spotify.com/track/6ErBYAuXlET8rWFjjiL7C6?si=a2c0c181c5e04080",
        imgSrc: "/img/music-artwork/bonkers.jpg",
    },
    {
        title: "Nonstop",
        href: "https://open.spotify.com/track/0NiCVFiMtjK9xQxFxUk0XQ?si=46892a136ad34708",
        imgSrc: "/img/music-artwork/nonstop.jpg",
    },
    {
        title: "Run",
        href: "https://open.spotify.com/track/3ue48E1t2MW2EB6APBPBk5?si=d8c919cc1ed84191",
        imgSrc: "/img/music-artwork/run.jpg",
    },
];

export default function Music() {
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
    <div
      id="music-section"
      ref={sectionRef}
      className="py-4 text-white "
    >
        <h2 className="sr-only">Music</h2>
        <h3 className="text-2xl font-medium mt-8 text-center text-[#ffea00]">RELEASES</h3>
      <div
        className={`grid grid-cols-3 gap-4 py-4 w-[80%] mx-auto transition-all duration-1000 ease-in-out transform ${
          inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: inView ? "0.3s" : "0s" }}
      >
        {artworks.map((art, index) => (
          <a
            key={index}
            href={art.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block text-center transition duration-300"
          >
            <div className="aspect-square overflow-hidden shadow-lg group-hover:opacity-90 transition-all duration-300 transform group-hover:scale-105">
              <img
                src={art.imgSrc}
                alt={art.title}
                className="object-cover w-full h-full"
              />
            </div>
          </a>
        ))}
      </div>

    </div>
  );
}
