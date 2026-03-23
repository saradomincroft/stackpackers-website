"use client";

import React, { useState, useEffect } from "react";

type NavbarProps = {
  isVisible: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ isVisible }) => {
  const [activeLink, setActiveLink] = useState<string>("hero-section");
  const [menuOpen, setMenuOpen] = useState(false);
  const [navColor, setNavColor] = useState("rgba(7,6,47,0.85)");

  const navbarHeight = 60;

  const sections = [
    { id: "hero-section", label: "HOME" },
    { id: "info-section", label: "INFO" },
    { id: "music-section", label: "RELEASES" },
    { id: "shows-section", label: "SHOWS" },
    { id: "links-section", label: "LINKS" },
    { id: "contact-section", label: "CONTACT" },
  ];

  const handleClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveLink(sectionId);
    setMenuOpen(false);

    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleScroll = () => {
  const offset = 1;
  for (const { id } of sections) {
    const section = document.getElementById(id);
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= navbarHeight + offset && rect.bottom >= window.innerHeight / 2) {
        setActiveLink(id);
        break;
      }
    }
  }

  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollFraction = Math.min(scrollTop / docHeight, 1);

  const start = { r: 1, g: 1, b: 1 };
  const end = { r: 7, g: 6, b: 47 };

  const r = Math.round(start.r + (end.r - start.r) * scrollFraction);
  const g = Math.round(start.g + (end.g - start.g) * scrollFraction);
  const b = Math.round(start.b + (end.b - start.b) * scrollFraction);

  setNavColor(`rgba(${r},${g},${b},0.85)`);
};

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, );

  return (
    <>
      {/* TOP NAV */}
      <nav
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-colors duration-300"
        style={{ backgroundColor: navColor, opacity: isVisible ? 1 : 0 }}
      >
        {/* Desktop nav */}
        <ul className="hidden md:flex justify-center items-center py-3 space-x-6 font-medium">
          {sections.map(({ id, label }) => (
            <li
              key={id}
              className={`cursor-pointer transition duration-300 ${
                activeLink === id ? "text-[#ffea00]" : "text-white hover:text-[#ffea00]"
              }`}
              onClick={(e) => handleClick(id, e)}
            >
              {label}
            </li>
          ))}
        </ul>

        {/* Mobile header */}
        <div className="md:hidden flex justify-between items-center p-3">
          <span />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-[#ffea00] z-[100] cursor-pointer"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* MOBILE SIDE NAV */}
    <div
        className="md:hidden fixed top-0 right-0 w-full h-full z-40 transition-transform duration-500"
        style={{
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            backgroundColor: navColor.replace("0.85", "0.95"),
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
        }}
    >
        <ul className="flex flex-col items-center space-y-4" style={{ marginTop: navbarHeight }}>
          {sections.map(({ id, label }) => (
            <li key={id} className="w-full">
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(id, e)}
                className={`block w-full text-center py-3 transition ${
                  activeLink === id
                    ? "text-[#ffea00] bg-[rgba(255,255,255,0.05)]"
                    : "text-white hover:text-[#ffea00]"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;