"use client";

import React, { useState, useEffect } from "react";

type NavbarProps = {
  isVisible: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ isVisible }) => {
  const [activeLink, setActiveLink] = useState<string>("hero-section");
  const navbarHeight = 60;

  const handleClick = (link: string, sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveLink(link);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleScroll = () => {
    const sections = ["hero-section", "info-section", "links-section", "music-section", "shows-section", "contact-section"];
    let found = false;

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section && !found) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navbarHeight && rect.bottom >= window.innerHeight / 2) {
          setActiveLink(sectionId);
          found = true;
        }
      }
    });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md"
      style={{
        backgroundColor: "var(--space-blue)",
        opacity: isVisible ? 0.8 : 0,
        transition: "opacity 1s ease-in-out 1s",
      }}
    >
      <ul className="flex justify-center items-center p-4 space-x-8">
        <li
          className={`font-bold cursor-pointer transition duration-300 ${
            activeLink === "hero-section" ? "active-link" : "link"
          }`}
          onClick={(e) => handleClick("home", "hero-section", e)}
        >
          Home
        </li>
        <li
          className={`font-bold cursor-pointer transition duration-300 ${
            activeLink === "info-section" ? "active-link" : "link"
          }`}
          onClick={(e) => handleClick("info", "info-section", e)}
        >
          Info
        </li>
        <li
          className={`font-bold cursor-pointer transition duration-300 ${
            activeLink === "links-section" ? "active-link" : "link"
          }`}
          onClick={(e) => handleClick("links", "links-section", e)}
        >
          Links
        </li>
        <li
          className={`font-bold cursor-pointer transition duration-300 ${
            activeLink === "music-section" ? "active-link" : "link"
          }`}
          onClick={(e) => handleClick("music", "music-section", e)}
        >
          Music
        </li>
        <li
          className={`font-bold cursor-pointer transition duration-300 ${
            activeLink === "shows-section" ? "active-link" : "link"
          }`}
          onClick={(e) => handleClick("shows", "shows-section", e)}
        >
          Shows
        </li>
        <li
          className={`font-bold cursor-pointer transition duration-300 ${
            activeLink === "contact-section" ? "active-link" : "link"
          }`}
          onClick={(e) => handleClick("contact", "contact-section", e)}
        >
          Contact
        </li>
      </ul>

      <style jsx>{`
        /* Define the electric yellow color */
        .active-link {
          color: #ffea00; /* Electric Yellow */
        }

        .link {
          color: white;
        }

        .link:hover {
          color: #ffea00; /* Electric Yellow on hover */
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
