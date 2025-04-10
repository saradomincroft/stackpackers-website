"use client";
import { useEffect, useState } from "react";
import styles from "../styles/Links.module.css"; // Ensure this CSS file exists

const Links = () => {
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

    // If the section is entering the viewport, trigger the animation
    if (sectionTop <= window.innerHeight && sectionTop > 0 && !hasScrolledIn) {
      setHasScrolledIn(true);
    }

    // Activate individual link animations when they are in the viewport
    const linkElements = document.querySelectorAll(`.${styles.link}`);
    linkElements.forEach((link) => {
      const linkRect = link.getBoundingClientRect();
      const linkTop = linkRect.top;

      // If link is in the viewport, add 'active' class to trigger animation
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
      } flex flex-col items-center justify-center px-4`}
    >
      <div className={`${styles.linksContainer}`}>
        {/* Dynamically render the links */}
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

export default Links;
