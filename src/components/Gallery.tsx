import { useState, useEffect } from "react";

interface DJImageProps {
  src: string;
  alt: string;
  transitionDelay: string;
}

const DJImage = ({ src, alt, transitionDelay }: DJImageProps) => {
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById(alt); // Using alt text as the ID for uniqueness
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setInView(true);
      } else {
        setInView(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ease-in-out transform ${
        inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
      } w-[80%] mt-6`}
      style={{ transitionDelay: inView ? transitionDelay : "0s" }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const Gallery = () => {
  return (
    <section
      id="gallery-section"
      className="w-full flex flex-col items-center justify-center mt-6"
    >
      <h2 className="sr-only">Gallery</h2>

      {/* DJ Image 1 */}
      <DJImage
        src="/img/stackpackers-dj-1.jpg"
        alt="Stackpackers DJ Photo - Taken by Larkz"
        transitionDelay="1.2s"
      />

      {/* DJ Image 2 */}
      <DJImage
        src="/img/stackpackers-dj-2.jpg"
        alt="Stackpackers DJ Photo - Taken by Larkz"
        transitionDelay="1.4s"
      />
    </section>
  );
};

export default Gallery;
