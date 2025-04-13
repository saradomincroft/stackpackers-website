/* eslint-disable @next/next/no-img-element */
"use client";

const socialLinks = [
  { href: "https://tiktok.com", src: "/img/icons/tiktok.svg", alt: "TikTok" },
  { href: "https://instagram.com", src: "/img/icons/instagram.svg", alt: "Instagram" },
  { href: "https://facebook.com", src: "/img/icons/facebook.svg", alt: "Facebook" },
  { href: "https://beatport.com", src: "/img/icons/beatport.svg", alt: "Beatport" },
  { href: "https://spotify.com", src: "/img/icons/spotify.svg", alt: "Spotify" },
  { href: "https://youtube.com", src: "/img/icons/youtube.svg", alt: "YouTube" },
  { href: "https://soundcloud.com", src: "/img/icons/soundcloud.svg", alt: "SoundCloud" },
  { href: "https://music.apple.com", src: "/img/icons/apple.svg", alt: "Apple Music" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-white p-1">
      <div className="w-[80%] max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <p className="text-sm sm:text-base md:text-lg mb-2 md:mb-0 text-left">
          &copy; Stackpackers {currentYear}
        </p>
        <div className="flex gap-4 items-center">
          {socialLinks.map(({ href, src, alt }) => (
            <a
              key={alt}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                src={src}
                alt={alt}
                className="w-6 h-6 filter brightness-0 invert transition duration-300 hover:invert-0 hover:sepia hover:saturate-200 hover:hue-rotate-15 hover:brightness-150"
                />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
