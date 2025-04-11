"use client";

import React, { useState, useEffect } from "react";

type NavbarProps = {
  isVisible: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ isVisible }) => {
  const [activeLink, setActiveLink] = useState<string>("hero-section");
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarHeight = 60;

  const sections = [
    { id: "hero-section", label: "Home" },
    { id: "info-section", label: "Info" },
    { id: "links-section", label: "Links" },
    { id: "music-section", label: "Music" },
    { id: "shows-section", label: "Shows" },
    { id: "contact-section", label: "Contact" },
  ];

  const handleClick = (link: string, sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveLink(sectionId);
    setMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScroll = () => {
    for (const { id } of sections) {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navbarHeight && rect.bottom >= window.innerHeight / 2) {
          setActiveLink(id);
          break;
        }
      }
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      {/* Desktop nav */}
      <ul className="hidden md:flex justify-center items-center p-4 space-x-8">
        {sections.map(({ id, label }) => (
          <li
            key={id}
            className={`font-bold cursor-pointer transition duration-300 ${
              activeLink === id ? "active-link" : "link"
            }`}
            onClick={(e) => handleClick(label.toLowerCase(), id, e)}
          >
            {label}
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <div className="md:hidden flex justify-between items-center p-2">
        <span className=""></span>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "#ffea00" }}
          className={`text-3xl focus:outline-none cursor-pointer transition-transform hover:scale-110 ${
            menuOpen ? "scale-110" : ""
          }`}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {menuOpen && (
  <ul
    className="md:hidden flex flex-col items-center space-y-4"
    style={{
      height: '100vh',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      overflowY: 'auto',
    }}
  >
    {sections.map(({ id, label }) => (
      <li
        key={id}
        className={`font-bold cursor-pointer transition duration-300 ${
          activeLink === id ? "active-link" : "link"
        }`}
        onClick={(e) => handleClick(label.toLowerCase(), id, e)}
      >
        {label}
      </li>
    ))}
  </ul>
)}



      <style jsx>{`
        .active-link {
          color: #ffea00;
        }

        .link {
          color: white;
        }

        .link:hover {
          color: #ffea00;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
