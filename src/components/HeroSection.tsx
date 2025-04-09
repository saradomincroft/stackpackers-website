"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
  const [burst, setBurst] = useState(false);
  const [hasBurst, setHasBurst] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!hasBurst) {
      const timer = setTimeout(() => {
        setBurst(true);
        setHasBurst(true);
      },80);

      return () => clearTimeout(timer);
    }
  }, [hasBurst]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <header className="flex flex-col items-center justify-center" style={{ height: "100vh" }}>
      <h1
        className={`relative w-[80vw] sm:w-[80vw] lg:w-[80vw] aspect-[16/9] ${
          burst ? `${styles.burstIn} ${styles.showGlow}` : "initialState"
        }`}
        style={{ height: "auto" }}
      >
        <Image
          src="/img/Stackpackers-Logo.png"
          alt="Stackpackers Logo"
          fill
          className={`object-contain absolute top-0 left-0 transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          priority
          onLoadingComplete={handleImageLoad}
        />
      </h1>
    
 


    </header>
  );
};

export default HeroSection;
