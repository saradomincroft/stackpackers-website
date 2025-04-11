"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Info = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="info-section"
      ref={sectionRef}
      className="w-full flex flex-col items-center justify-center"
      style={{ scrollMarginTop: "2rem" }}
    >
    {/* IMAGE */}
    <div
      className={`transition-all duration-1000 ease-in-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
      } w-[80%] aspect-[21/9] mb-4`}
      >
        <Image
          src="/img/profile-banner.jpg"
          alt="Stackpackers Duo"
          width={1920}
          height={823}
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT CONTAINER */}
      <div
        className={`transition-all duration-1000 ease-in-out transform ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } w-[80%] text-white text-left`}
      >
        <div
          className="p-6"
          style={{
            backgroundColor: "rgba(0, 31, 61, 0.8)",
          }}
        >
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Stackpackers are a storm in full force. This cheeky duo shares a
            chemistry that&apos;s electric, unpredictable, and experimental.
            Blending old and new, their sets are a freestyle, ever-changing
            journey. With drum & bass at the heart of their sound, Stackpackers
            have made their mark with amped-up, power-packed DnB sets that keep
            the dance floor charged. However, it&apos;s not all thunder and
            lightning – they know exactly when to bring it down with emotional,
            moody liquid, proving they&apos;re as versatile as they are energetic.
            <br />
            <br />
            In the production space, their tracks have found a home with those
            who seek unfiltered chaos and a fresh take on the underground sound.
          </p>
        </div>
      </div>
       {/* VIDEO */}
       <div
          className={`transition-all duration-1000 ease-in-out transform ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } w-[80%] mt-6`}
        >
        <video playsInline autoPlay loop muted className="w-full h-auto">
          <source src="/img/info-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Info;
