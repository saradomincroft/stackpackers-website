"use client";
import { useEffect, useState } from "react";
import styles from "../styles/Links.module.css"; // Ensure this CSS file exists

const Music = () => {
  const [hasScrolledIn, setHasScrolledIn] = useState(false);

  // List of link objects
  const links = [
    { href: "https://facebook.com", label: "Facebook" },
    { href: "https://www.tiktok.com", label: "TikTok" },
    { href: "https://facebook.com", label: "Facebook" },
    { href: "https://www.tiktok.com", label: "TikTok" },
    { href: "https://facebook.com", label: "Facebook" },
    { href: "https://www.tiktok.com", label: "TikTok" },
    { href: "https://facebook.com", label: "Facebook" },
    { href: "https://www.tiktok.com", label: "TikTok" },
    { href: "https://facebook.com", label: "Facebook" },
    { href: "https://www.tiktok.com", label: "TikTok" },
  ];

  // Handle scroll to check visibility of the section
  const handleScroll = () => {
    const linksSection = document.querySelector("#links-section");
    if (!linksSection) return;

    const sectionRect = linksSection.getBoundingClientRect();
    const sectionTop = sectionRect.top;

    // If the top of the section is within the viewport and hasn't triggered yet
    if (sectionTop <= window.innerHeight && sectionTop >= 0 && !hasScrolledIn) {
      setHasScrolledIn(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, ); // Dependency to ensure effect happens only once

  return (
    <div
      id="links-section"
      className={`${styles.linksSection} ${
        hasScrolledIn ? styles.visible : ""
      } min-h-screen flex flex-col items-center justify-center px-4`}
    >
      <h2 className="text-2xl font-bold mb-8"></h2>
      <div className={`${styles.linksContainer}`}>
        {/* Dynamically render the links */}
        {links.map((link, index) => (
          <div
            key={index}
            className={`${styles.link} ${
              index % 2 === 0 ? styles.left : styles.right
            } ${hasScrolledIn ? styles.active : ""}`}
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              {link.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
