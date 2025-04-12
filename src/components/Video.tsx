// "use client";
// import { useEffect, useRef, useState } from "react";

// const Video = () => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   // const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//         }
//       },
//       { threshold: 0.1 }
//     );
  
//     const handleScroll = () => {
//       if (window.scrollY < 100) {
//         setInView(false);
//       }
//     };
  
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     window.addEventListener("scroll", handleScroll);
  
//     return () => {
//       observer.disconnect();
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
  

//   return (
//     <section
//       id="video-section"
//       ref={sectionRef}
//       className="w-full flex flex-col items-center justify-center"
//     >
//     <h2 className="sr-only">Video</h2>

//     {/* 4. VIDEO */}
//     {/* <div
//         className={`transition-all duration-1000 ease-in-out transform ${
//             inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
//             } w-[80%] mt-6`}
//             style={{ transitionDelay: inView ? "0.6s" : "0s" }}
//     >
//         <video playsInline autoPlay loop muted className="w-full h-auto">
//             <source src="/img/info-vid.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//         </video>
//     </div> */}



//         {/* 6. DJ IMAGE 1 */}
//         {/* <div
//         className={`transition-all duration-1000 ease-in-out transform ${
//         inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
//         } w-[80%] mt-6`}
//         style={{ transitionDelay: inView ? "1.2s" : "0s" }}
//         >
//         <Image
//         src="/img/stackpackers-dj-1.jpg"
//         alt="Stackpackers DJ Photo - Taken by Larkz"
//         width={1920}
//         height={823}
//         className="w-full h-full object-cover"
//         />
//         </div> */}

//         {/* 7. DJ IMAGE 2 */}
//         {/* <div
//         className={`transition-all duration-1000 ease-in-out transform ${
//         inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
//         } w-[80%] mt-6`}
//         style={{ transitionDelay: inView ? "1.4s" : "0s" }}
//         >
//         <Image
//         src="/img/stackpackers-dj-2.jpg"
//         alt="Stackpackers DJ Photo - Taken by Larkz"
//         width={1920}
//         height={823}
//         className="w-full h-full object-cover"
//         />
//         </div> */}

//         </section>
//     );
// };

// export default Video;
