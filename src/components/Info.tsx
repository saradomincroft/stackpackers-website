"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
      // style={{ scrollMarginTop: "2rem" }}
    >
      <h2 className="sr-only">Info</h2>
      {/* 1. SPOTIFY IFRAME */}
      <div
        className={`transition-all duration-1000 ease-in-out transform ${
          inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
        } w-[80%] mt-6 mb-6 overflow-hidden`}
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
        >
        </iframe>
      </div>

      {/* 2. PRESS IMAGE */}
      <div
        className={`transition-all duration-1000 ease-in-out transform ${
          inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
        } w-[80%] aspect-[21/9] mb-6`}
        style={{ transitionDelay: inView ? "0.4s" : "0s" }}
      >
        <Image
          src="/img/profile-banner.jpg"
          alt="Stackpackers Duo"
          width={1920}
          height={823}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 3. BIO TEXT */}
      <div
        className={`transition-all duration-1000 ease-in-out transform ${
          inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
        } w-[80%] text-white text-left`}
        style={{ transitionDelay: inView ? "0.6s" : "0s" }}
      >
        <div className="p-6" style={{ backgroundColor: "rgba(0, 31, 61, 0.8)" }}>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Stackpackers are a storm in full force. This cheeky duo shares a
            chemistry that&apos;s electric, unpredictable, and experimental. 
            Blending old and new, their sets are an ever-changing journey.
            <br/><br/>
            With drum & bass at the heart of their sound, Stackpackers
            have made their mark with amped-up, power-packed DnB sets that keep
            the dance floor charged. However, it&apos;s not all thunder and
            lightning, they know exactly when to bring it down with emotional,
            moody liquid, proving they&apos;re as versatile as they are energetic.
            <br /><br />
            From bass heavy DnB to soulful liquid, Stackpackers bring the kind of 
            energy that makes every set and song unique and every performance a new 
            adventure. Aside from DnB, they explore house, psytrance, 140, and UKG, 
            always adding fresh twists and surprises to their sets. Each performance 
            is a sonic adventure full of unexpected moments.
            <br /><br />
            In the production space, their tracks have found a home with those
            who seek unfiltered chaos and a fresh take on the underground sound.
          </p>
        </div>
      </div>

      {/* 4. VIDEO */}
      <div
        className={`transition-all duration-1000 ease-in-out transform ${
          inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
        } w-[80%] mt-6`}
        style={{ transitionDelay: inView ? "0.6s" : "0s" }}
      >
        <video playsInline autoPlay loop muted className="w-full h-auto">
          <source src="/img/info-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 5. SOUNDCLOUD IFRAME */}
      <div
        className={`transition-all duration-1000 ease-in-out transform ${
          inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
        } w-[80%] mt-6`}
        style={{ transitionDelay: inView ? "1s" : "0s" }}
      >
        <iframe
          width="100%"
          height="120"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2003590828%3Fsecret_token%3Ds-hbc6PvIsmbw&color=%23fff800&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
        ></iframe>
        <div
          style={{
            fontSize: "10px",
            color: "#cccccc",
            lineBreak: "anywhere",
            wordBreak: "normal",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            fontFamily:
              "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
            fontWeight: "100",
          }}
        >
        </div>
      </div>

      {/* 6. DJ IMAGE 1 */}
      <div
        className={`transition-all duration-1000 ease-in-out transform ${
          inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
        } w-[80%] mt-6`}
        style={{ transitionDelay: inView ? "1.2s" : "0s" }}
      >
        <Image
          src="/img/stackpackers-dj-1.jpg"
          alt="Stackpackers DJ Photo - Taken by Larkz"
          width={1920}
          height={823}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 7. DJ IMAGE 2 */}
      <div
        className={`transition-all duration-1000 ease-in-out transform ${
          inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
        } w-[80%] mt-6`}
        style={{ transitionDelay: inView ? "1.4s" : "0s" }}
      >
        <Image
          src="/img/stackpackers-dj-2.jpg"
          alt="Stackpackers DJ Photo - Taken by Larkz"
          width={1920}
          height={823}
          className="w-full h-full object-cover"
        />
      </div>

    </section>
  );
};

export default Info;
