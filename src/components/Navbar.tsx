"use client";
import React, { useState } from "react";

type NavbarProps = {
  isVisible: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ isVisible }) => {
  const [activeLink, setActiveLink] = useState<string>("home");

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

  return (
<nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md"
      style={{
        backgroundColor: "var(--space-blue)",
        opacity: isVisible ? 0.8 : 0,
        transition: "opacity 1s ease-in-out 1s",
      }}
    >
      <ul className="flex justify-center items-center p-4 space-x-8">
        {/* Home link should just scroll, no "/" */}
        <li
          className={`font-bold cursor-pointer transition duration-300 ${
            activeLink === "home" ? "text-yellow-500" : "text-white"
          } hover:text-gray-400`}
          onClick={(e) => handleClick("home", "hero-section", e)}
        >
          Home
        </li>
        <li
          className={`font-bold cursor-pointer transition duration-300 ${
            activeLink === "links" ? "text-yellow-500" : "text-white"
          } hover:text-gray-400`}
          onClick={(e) => handleClick("links", "links-section", e)}
        >
          Links
        </li>
        <li
          className={`font-bold cursor-pointer transition duration-300 ${
            activeLink === "shows" ? "#fff800" : "text-white"
          } hover:text-gray-400`}
          onClick={(e) => handleClick("shows", "shows-section", e)}
        >
          Gallery
        </li>
        <li
          className={`font-bold cursor-pointer transition duration-300 ${
            activeLink === "contact" ? "text-yellow-500" : "text-white"
          } hover:text-gray-400`}
          onClick={(e) => handleClick("contact", "contact-section", e)}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
