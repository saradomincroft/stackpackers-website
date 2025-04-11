"use client";

import React, { useState, useEffect } from "react";

type NavbarProps = {
  isVisible: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ isVisible }) => {
  const [activeLink, setActiveLink] = useState<string>("hero-section");
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarHeight = 60; // Height of the navbar (can be adjusted)

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
      className="fixed top-0 left-0 w-full z-50"
      style={{
        backgroundColor: "#003366",
        opacity: isVisible ? 0.8 : 0,
        transition: "opacity 1s ease-in-out 1s",
      }}
    >
      {/* Desktop nav */}
      <ul className="hidden md:flex justify-center items-center py-3 space-x-6">
        {sections.map(({ id, label }) => (
          <li
            key={id}
            className={`font-medium cursor-pointer transition duration-300 text-white ${
              activeLink === id ? "active-link-desktop" : "link-desktop"
            }`}
            onClick={(e) => handleClick(label.toLowerCase(), id, e)}
          >
            {label}
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <div className="md:hidden flex justify-between items-center p-2">
        <span className="flex-1"></span>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="text-3xl z-[100] md:hidden transition-transform hover:scale-110 text-[#ffea00] cursor-pointer"
        >
          {menuOpen ? (
            <span className="text-2xl font-bold hover:text-[#ffea00] cursor-pointer">✕</span>
          ) : (
            "☰"
          )}
        </button>
      </div>

      {/* Slide-in mobile nav */}
      <div
        className="md:hidden fixed top-0 right-0 w-full h-full transition-transform duration-500 ease-in-out"
        style={{
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          zIndex: 40,
          backgroundColor: "#003366",
          backdropFilter: "blur(80px)",
        }}
      >
        <ul
          className="flex flex-col items-center space-y-2 p-0"
          style={{ marginTop: `${navbarHeight - 8}px` }}
        >
          {sections.map(({ id, label }) => (
            <li
              key={id}
              className="w-full m-0"
            >
              <a
                href={`#${id}`}
                className={`block w-full py-2 text-center text-white font-bold cursor-pointer transition duration-300 ${
                  activeLink === id
                    ? "active-link-mobile"
                    : "link-mobile"
                }`}
                onClick={(e) => handleClick(label.toLowerCase(), id, e)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        /* Desktop Link Styles */
        .active-link-desktop {
          color: #ffea00;
        }

        .link-desktop {
          color: white;
          transition: background-color 0.3s ease-in-out;
          font-weight: 500; /* Adjusted font weight for a lighter look */
        }

        .link-desktop:hover {
          color: #ffea00;
          background-color: transparent; /* Removed hover background for desktop */
        }

        /* Mobile Link Styles */
        .active-link-mobile {
          color: #ffea00;
          background-color: #2a5ba9;
          padding: 6px 0;
        }

        .link-mobile {
          color: white;
          transition: background-color 0.3s ease-in-out;
        }

        .link-mobile:hover {
          color: #ffea00;
          background-color: rgba(42, 91, 169, 0.3);
        }

        .active-link-mobile:hover {
          background-color: #2a5ba9;
        }

        button:focus {
          outline: none;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
