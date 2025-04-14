"use client";
import { useEffect, useState } from "react";
import styles from "../styles/Links.module.css";
//todo: fix hover color

const Links = () => {
  const [hasScrolledIn, setHasScrolledIn] = useState(false);

  const links = [
    { href: "https://www.tiktok.com/@stackpackers", label: "TikTok" },
    { href: "https://instagram.com/stackpackers", label: "Instagram" },
    { href: "https://facebook.com/stackpackers", label: "Facebook" },
    { href: "https://open.spotify.com/artist/6oPMjcVt82VYpcntvL2JqZ?si=UjX0Yg0hQ96CzT9vUlkBuw", label: "Spotify" },
    { href: "https://www.youtube.com/channel/UCDLU5AEO7qqnQXJPHlA9sPQ", label: "YouTube" },
    { href: "https://www.soundcloud.com/stackpackers", label: "Soundcloud" },
    { href: "https://www.beatport.com/artist/stackpackers/1142861", label: "Beatport" },
    { href: "https://music.apple.com/us/artist/stackpackers/1698648603", label: "Apple Music" },
    { href: "https://music.amazon.com/artists/B0B63XG3MK/stackpackers", label: "Amazon Music" },
    { href: "https://stackpackers.bandcamp.com/", label: "Bandcamp" },
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
