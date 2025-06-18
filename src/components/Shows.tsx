/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef, useState } from "react";
import DateTime from 'react-datetime';

const shows = [
  {
    title: "A.M.C. & Phantom, Koven, Skantia, Circadian",
    href: "https://moshtix.com.au/v2/event/a-m-c-phantom-koven-skantia-circadian/178936",
    imgSrc: "/img/shows-artwork/amc.jpg",
    date: "2025-06-08",
  },
  {
    title: "Rum & Bass",
    href: "https://www.instagram.com/hyperfix.crew/",
    imgSrc: "/img/shows-artwork/rnb.jpeg",
    date: "2025-05-29"
  },
    {
    title: "Blackout Frequency Warehouse Rave",
    href: "https://www.instagram.com/hyperfix.crew/",
    imgSrc: "/img/shows-artwork/rnb.jpeg",
    date: "2025-05-29"
  },
  {
    title: "Basstripper",
    href: "https://megatix.com.au/events/basstripper-melbourne",
    imgSrc: "/img/shows-artwork/basstripper.jpg",
    date: "2025-05-23"
  },
];

export default function Shows() {
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
      id="shows-section"
      ref={sectionRef}
      className="py-6 text-white "
    >
      <h2 className="sr-only">Shows</h2>
      <div
        className={`grid grid-cols-2 md:grid-cols-3 gap-4 w-[80%] mx-auto transition-all duration-1000 ease-in-out transform ${
          inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: inView ? "0.3s" : "0s" }}
      >
        {shows.map((show, index) => (
          <a
            key={index}
            href={show.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block text-center transition duration-300"
          >
            <div className="aspect-[4/5] overflow-hidden shadow-lg group-hover:opacity-90 transition-all duration-300 transform group-hover:scale-105">
              <img
                src={show.imgSrc}
                alt={show.title}
                className="object-cover w-full h-full"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
