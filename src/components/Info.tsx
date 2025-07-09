/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef, useState } from "react";

const Info = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setInView(false);
      }
    };

    if (sectionRef.current) observer.observe(sectionRef.current);
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="info-section"
      ref={sectionRef}
      className="w-full flex flex-col items-center justify-center"
    >
      <h2 className="sr-only">Info</h2>
      {/* SPOTIFY IFRAME */}
      <div
        className={`transition-all duration-1000 ease-in-out transform ${
          inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
        } w-[80%] mt-6 overflow-hidden`}
        style={{
          backgroundColor: "#202020",
          transitionDelay: inView ? "0.2s" : "0s",
          borderRadius: "0px",
        }}
      >
        <iframe
          src="https://open.spotify.com/embed/track/0snGpj75e0p0vw2XS9J05z?utm_source=generator&theme=0"
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{
            border: "none",
            margin: "-1px",
            width: "calc(100% + 2px)",
            height: "154px",
          }}
        ></iframe>
      </div>
        {/* PRESS IMAGE */}
        <div
        className={`relative transition-all duration-1000 ease-in-out transform ${
            inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
        } w-[80%] aspect-[21/9] mt-6`}
        style={{ transitionDelay: inView ? "0.4s" : "0s" }}
        >
        <img
            src="/img/profile-banner.jpg"
            alt="Stackpackers Duo"
            className="w-full h-full object-cover"
        />
        
        {/* Credit Text Overlay */}
        <a
            href="https://www.instagram.com/rexthebard/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 text-white text-xs bg-black bg-opacity-50 px-2 py-1 rounded"
        >
            Photo Credits: @rexthebard
        </a>
        </div>


      {/* BIO TEXT */}
      <div
        className={`transition-all duration-1000 ease-in-out transform mt-6 ${
          inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
        } w-[80%] text-white text-left`}
        style={{ transitionDelay: inView ? "0.6s" : "0s" }}
      >
        <div className="p-6" style={{ backgroundColor: "rgba(0, 31, 61, 0.8)" }}>
            <p className="pb-4 text-sm sm:text-base md:text-lg leading-relaxed font-thin">
            Stackpackers are a storm in full force, sharing a
            chemistry that&apos;s electric, unpredictable, and experimental. 
            Blending old and new, their sets are an ever-changing journey.
            </p>
            <p className="pb-4 text-sm sm:text-base md:text-lg leading-relaxed font-thin">
            With drum & bass at the heart of their sound, Stackpackers
            have made their mark with amped-up, power-packed DnB sets that keep
            the dance floor charged. However, it&apos;s not all thunder and
            lightning, they know exactly when to bring it down with emotional,
            moody liquid, proving they&apos;re as versatile as they are energetic.
            From bass heavy DnB to soulful liquid, Stackpackers bring the kind of 
            energy that makes every performance and song unique and every performance a
            sonic adventure.
            </p>
            <p className="pb-4 text-sm sm:text-base md:text-lg leading-relaxed font-thin">
            In the production space, Stackpackers have been gaining traction 
            with releases like &apos;Run&apos; and &apos;Notorious&apos; going off in the rave. 
            Their tracks have found a home with those who seek unfiltered chaos, and a fresh take 
            on the underground sound. 
            Aside from DnB, they explore house, psytrance, dubstep, 
            and UKG, 
            always adding fresh twists and surprises to their sets.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed font-thin">
            As the creators of Nocturne, Stackpackers have crafted a world where high 
            energy, dark gritty basslines, and moody liquid collide — a space where 
            rhythm and darkness surge together in perfect harmony. Concepts like 
            Electropolis embody their unique approach to building immersive experiences, 
            always pushing the boundaries of sound and atmosphere.
          </p>
        </div>
      </div>
      
      {/* SOUNDCLOUD IFRAME */}
      <div
        className={`transition-all duration-1000 ease-in-out transform ${
          inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
        } w-[80%] mt-6`}
        style={{ transitionDelay: inView ? "0.8s" : "0s" }}
      >
        <iframe
          width="100%"
          height="120"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2003590828%3Fsecret_token%3Ds-hbc6PvIsmbw&color=%23fff800&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
        ></iframe>
      </div>

        {/* 6. DJ IMAGE 1 */}
        <div
        className={`relative transition-all duration-1000 ease-in-out transform ${
            inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
        } w-[80%] mt-6`}
        style={{ transitionDelay: inView ? "1s" : "0s" }}
        >
        <img
            src="/img/stackpackers-dj-1.jpg"
            alt="Stackpackers DJ Photo - Taken by Nicholas Bexter Photography"
            className="w-full h-full object-cover"
        />
        <a
            href="https://www.instagram.com/nicholasbexter_photography"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 text-white text-xs bg-black bg-opacity-50 px-2 py-1 rounded"
        >
            Photo Credits: @nicholasbexter_photography
        </a>
        </div>

        {/* 7. DJ IMAGE 2 */}
        <div
        className={`relative transition-all duration-1000 ease-in-out transform ${
            inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
        } w-[80%] mt-6`}
        style={{ transitionDelay: inView ? "1.2s" : "0s" }}
        >
        <img
            src="/img/stackpackers-dj-2.jpg"
            alt="Stackpackers DJ Photo - Taken by Larkz"
            className="w-full h-full object-cover"
        />
        <a
            href="https://www.instagram.com/larkz/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 text-white text-xs bg-black bg-opacity-50 px-2 py-1 rounded"
        >
            Photo Credits: @larkz
        </a>
        </div>
    </section>
  );
};

export default Info;
