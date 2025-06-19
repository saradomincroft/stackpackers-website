/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
dayjs.extend(isSameOrAfter);

const shows = [
  {
    title: "A.M.C. & Phantom, Koven, Skantia, Circadian",
    href: "https://moshtix.com.au/v2/event/a-m-c-phantom-koven-skantia-circadian/178936",
    imgSrc: "/img/shows-artwork/amc.jpg",
    date: "2025-07-08",
  },
    {
    title: "A.M.C. & Phantom, Koven, Skantia, Circadian",
    href: "https://moshtix.com.au/v2/event/a-m-c-phantom-koven-skantia-circadian/178936",
    imgSrc: "/img/shows-artwork/amc.jpg",
    date: "2025-07-08",
  },
    {
    title: "A.M.C. & Phantom, Koven, Skantia, Circadian",
    href: "https://moshtix.com.au/v2/event/a-m-c-phantom-koven-skantia-circadian/178936",
    imgSrc: "/img/shows-artwork/amc.jpg",
    date: "2025-07-08",
  },
    {
    title: "A.M.C. & Phantom, Koven, Skantia, Circadian",
    href: "https://moshtix.com.au/v2/event/a-m-c-phantom-koven-skantia-circadian/178936",
    imgSrc: "/img/shows-artwork/amc.jpg",
    date: "2025-07-08",
  },
    {
    title: "A.M.C. & Phantom, Koven, Skantia, Circadian",
    href: "https://moshtix.com.au/v2/event/a-m-c-phantom-koven-skantia-circadian/178936",
    imgSrc: "/img/shows-artwork/amc.jpg",
    date: "2025-07-08",
  },
    {
    title: "A.M.C. & Phantom, Koven, Skantia, Circadian",
    href: "https://moshtix.com.au/v2/event/a-m-c-phantom-koven-skantia-circadian/178936",
    imgSrc: "/img/shows-artwork/amc.jpg",
    date: "2025-07-08",
  },
    {
    title: "A.M.C. & Phantom, Koven, Skantia, Circadian",
    href: "https://moshtix.com.au/v2/event/a-m-c-phantom-koven-skantia-circadian/178936",
    imgSrc: "/img/shows-artwork/amc.jpg",
    date: "2025-07-08",
  },
  {
    title: "A.M.C. & Phantom, Koven, Skantia, Circadian",
    href: "https://moshtix.com.au/v2/event/a-m-c-phantom-koven-skantia-circadian/178936",
    imgSrc: "/img/shows-artwork/amc.jpg",
    date: "2025-06-08",
  },
  {
    title: "A.M.C. & Phantom, Koven, Skantia, Circadian",
    href: "https://moshtix.com.au/v2/event/a-m-c-phantom-koven-skantia-circadian/178936",
    imgSrc: "/img/shows-artwork/amc.jpg",
    date: "2025-06-08",
  },
  {
    title: "A.M.C. & Phantom, Koven, Skantia, Circadian",
    href: "https://moshtix.com.au/v2/event/a-m-c-phantom-koven-skantia-circadian/178936",
    imgSrc: "/img/shows-artwork/amc.jpg",
    date: "2025-06-08",
  },
  {
    title: "A.M.C. & Phantom, Koven, Skantia, Circadian",
    href: "https://moshtix.com.au/v2/event/a-m-c-phantom-koven-skantia-circadian/178936",
    imgSrc: "/img/shows-artwork/amc.jpg",
    date: "2025-06-08",
  },
  {
    title: "Rum & Bass",
    href: "https://www.instagram.com/hyperfix.crew/",
    imgSrc: "/img/shows-artwork/rnb.jpeg",
    date: "2025-05-29",
  },
  {
    title: "Blackout Frequency Warehouse Rave",
    href: "https://www.instagram.com/hyperfix.crew/",
    imgSrc: "/img/shows-artwork/rnb.jpeg",
    date: "2025-05-29",
  },
  {
    title: "Basstripper",
    href: "https://megatix.com.au/events/basstripper-melbourne",
    imgSrc: "/img/shows-artwork/basstripper.jpg",
    date: "2025-05-23",
  },
];

export default function Shows() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // NEW refs for each shows grid section
  const upcomingRef = useRef<HTMLDivElement | null>(null);
  const pastRef = useRef<HTMLDivElement | null>(null);

  const [inView, setInView] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [upcomingPage, setUpcomingPage] = useState(1);
  const [pastPage, setPastPage] = useState(1);

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
      if (window.scrollY < 100) setInView(false);
    };

    if (sectionRef.current) observer.observe(sectionRef.current);
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const checkScreen = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const today = dayjs();
  const upcoming = shows.filter((s) => dayjs(s.date).isSameOrAfter(today, "day"));
  const past = shows.filter((s) => dayjs(s.date).isBefore(today, "day"));

  const itemsPerPage = isSmallScreen ? 4 : 6;

  // Pagination calculation
  const upcomingTotalPages = Math.ceil(upcoming.length / itemsPerPage);
  const pastTotalPages = Math.ceil(past.length / itemsPerPage);

  // Paginate upcoming shows
  const paginatedUpcoming = upcoming.slice(
    (upcomingPage - 1) * itemsPerPage,
    upcomingPage * itemsPerPage
  );

  // Sort & paginate past shows
  const paginatedPast = past
    .sort((a, b) => dayjs(b.date).valueOf() - dayjs(a.date).valueOf())
    .slice((pastPage - 1) * itemsPerPage, pastPage * itemsPerPage);

  // Scroll to top of upcoming grid when upcomingPage changes
  useEffect(() => {
    if (upcomingRef.current) {
      upcomingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [upcomingPage]);

  // Scroll to top of past grid when pastPage changes
  useEffect(() => {
    if (pastRef.current) {
      pastRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [pastPage]);

  return (
    <div id="shows-section" ref={sectionRef} className="py-6 text-white">
      <h2 className="sr-only">Shows</h2>

      {/* UPCOMING SHOWS */}
      {upcoming.length > 0 && (
        <>
          <h3 className="text-2xl font-semibold mb-4 text-center">Upcoming Shows</h3>
          <div
            ref={upcomingRef}
            className={`grid grid-cols-2 md:grid-cols-3 gap-4 w-[80%] mx-auto transition-all duration-1000 ease-in-out transform ${
              inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: inView ? "0.3s" : "0s" }}
          >
            {paginatedUpcoming.map((show, idx) => (
              <a
                key={idx}
                href={show.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center transition duration-300"
              >
                <div className="aspect-[4/5] overflow-hidden shadow-lg">
                  <img
                    src={show.imgSrc}
                    alt={show.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mt-2 text-sm">{show.title}</p>
              </a>
            ))}
          </div>

          {/* UPCOMING PAGINATION */}
          {upcomingTotalPages > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: upcomingTotalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setUpcomingPage(i + 1)}
                  className={`px-3 py-1 rounded ${
                    upcomingPage === i + 1
                      ? "bg-white text-black"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}

      {/* PAST SHOWS */}
      {past.length > 0 && (
        <>
          <h3 className="text-2xl font-semibold mt-12 mb-4 text-center">Past Shows</h3>
          <div
            ref={pastRef}
            className={`grid grid-cols-2 md:grid-cols-3 gap-4 w-[80%] mx-auto transition-all duration-1000 ease-in-out transform ${
              inView ? "opacity-100 translate-y-2" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: inView ? "0.3s" : "0s" }}
          >
            {paginatedPast.map((show, idx) => (
              <div
                key={idx}
                className="block text-center transition duration-300 cursor-default"
              >
                <div className="aspect-[4/5] overflow-hidden shadow-lg">
                  <img
                    src={show.imgSrc}
                    alt={show.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mt-2 text-sm">{show.title}</p>
              </div>
            ))}
          </div>

          {/* PAST PAGINATION */}
          {pastTotalPages > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: pastTotalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPastPage(i + 1)}
                  className={`px-3 py-1 rounded ${
                    pastPage === i + 1
                      ? "bg-white text-black"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
