"use client";
import { useEffect, useState } from "react";
import styles from "../styles/Links.module.css";

const Links = () => {
  const [hasScrolledIn, setHasScrolledIn] = useState(false);

  // List of link objects
  const links = [
    { href: "https://facebook.com", label: "TikTok" },
    { href: "https://www.tiktok.com", label: "Instagram" },
    { href: "https://facebook.com", label: "Facebook" },
    { href: "https://facebook.com", label: "Spotify" },
    { href: "https://www.tiktok.com", label: "YouTube" },
    { href: "https://facebook.com", label: "Soundcloud" },
    { href: "https://www.tiktok.com", label: "Beatport" },
    { href: "https://www.tiktok.com", label: "Apple Music" },
    { href: "https://facebook.com", label: "Amazon Music" },
    { href: "https://www.tiktok.com", label: "Bandcamp" },
  ];

  const handleScroll = () => {
    const linksSection = document.querySelector("#links-section");
    if (!linksSection) return;

    const sectionRect = linksSection.getBoundingClientRect();
    const sectionTop = sectionRect.top;

    if (sectionTop <= window.innerHeight && sectionTop > 0 && !hasScrolledIn) {
      setHasScrolledIn(true);
    }

    const linkElements = document.querySelectorAll(`.${styles.link}`);
    linkElements.forEach((link) => {
      const linkRect = link.getBoundingClientRect();
      const linkTop = linkRect.top;

      if (linkTop <= window.innerHeight && linkTop >= 0) {
        link.classList.add(styles.active);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, );

  return (
    <div
      id="links-section"
      className={`${styles.linksSection} ${
        hasScrolledIn ? styles.visible : ""
      } flex flex-col items-center justify-center w-full md:w-[60vw] text-black text-left`}
    >
      <h2 className="sr-only">Links</h2>
      <div className={`${styles.linksContainer} w-full`}>
        {links.map((link, index) => (
          <div
            key={index}
            className={`${styles.link} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-black"
            >
              {link.label}
            </a>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Links;
