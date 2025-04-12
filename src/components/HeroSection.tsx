"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
  const [burst, setBurst] = useState(false);
  const [hasBurst, setHasBurst] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(true);
  const [logoAnimationCompleted, setLogoAnimationCompleted] = useState(false);
  const [drawing, setDrawing] = useState(false);
  const yellowPathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (!hasBurst) {
      const timer = setTimeout(() => {
        setBurst(true);
        setHasBurst(true);
      }, 80);

      return () => clearTimeout(timer);
    }
  }, [hasBurst]);

  useEffect(() => {
    // Hide arrow when scrolling down, show it again when scrolling up
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setArrowVisible(false);
      } else {
        setArrowVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleArrowClick = () => {
    // Scroll to the next section
    const mainSection = document.getElementById("info-section");
    if (mainSection) {
      mainSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (burst) {
      const timer = setTimeout(() => {
        setLogoAnimationCompleted(true);
        setDrawing(true); // Start drawing after logo animation
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [burst]);

  useEffect(() => {
    if (drawing && yellowPathRef.current) {
      const yellowPath = yellowPathRef.current;
      const yellowPathLength = yellowPath.getTotalLength();

      yellowPath.style.strokeDasharray = yellowPathLength.toString();
      yellowPath.style.strokeDashoffset = yellowPathLength.toString();

      yellowPath.setAttribute("stroke", "#fff800");
      yellowPath.setAttribute("fill", "none");

      setTimeout(() => {
        yellowPath.style.transition = "stroke-dashoffset 1s ease-out";
        yellowPath.style.strokeDashoffset = "0";

        setTimeout(() => {
          yellowPath.setAttribute("fill", "#ffffff");
        }, 1000);
      }, 50);
    }
  }, [drawing]);

  return (
    <div        
      id="hero-section"
    >
      <header
        className="flex flex-col items-center justify-start"
        style={{ minHeight: "calc(100vh - 4rem)" }}      >
        {/* Stackpackers Logo Container */}
        <div
          className="relative w-full flex justify-center mt-[4rem]"
          style={{ height: "70vh" }}
        >
          <h1
            className={`relative w-[80vw] aspect-[16/9] ${
              burst ? `${styles.burstIn} ${styles.showGlow}` : "initialState"
            }`}
            style={{ height: "auto" }}
          >
            <Image
              src="/img/stackpackers-logo.png"
              alt="Stackpackers Logo"
              fill
              className={`object-contain absolute top-0 left-0 transition-opacity duration-500 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              priority
              onLoad={handleImageLoad}
            />
          </h1>
        </div>

        {/* Lightning Arrow */}
        {logoAnimationCompleted && imageLoaded && (
          <div
            className={`flex justify-center mt-[-6rem] sm:mt-[-8rem] md:mt-[-8rem] ${
              arrowVisible ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000`}
          >
            <svg
              viewBox="100 30 150 300"
              xmlns="http://www.w3.org/2000/svg"
              className={`w-18 sm:w-24 md:w-24 lg:w-32 h-auto transition-transform duration-300 ease-in-out hover:scale-110 ${styles.arrowFadeIn} ${styles.arrowGlowAndBurst}`}
              onClick={handleArrowClick}
              style={{ cursor: "pointer" }}
            >
              {/* Arrow Path */}
              <path
                ref={yellowPathRef}
                d="M 225 42 L 195 112 L 143 169 L 171 186 L 125 219 L 139 248 L 117 255 L 157 308 L 197 251 L 169 248 L 155 225 L 212 185 L 178 164 L 209 132 Z"
                fill="none"
                stroke="#fff800"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="arrow yellow"
              />
            </svg>
          </div>
        )}
      </header>
    </div>
  );
};

export default HeroSection;
