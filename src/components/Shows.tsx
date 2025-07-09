/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
dayjs.extend(isSameOrAfter);

const shows = [
    {
        title: "Slack Soundsystem",
        href: "https://www.eventbrite.com.au/e/slack-sound-system-warehouse-party-tickets-1459809853569",
        imgSrc: "/img/shows-artwork/slacksoundsystem.jpg",
        date: "2025-08-02",
    },
    {
        title: "Blackout Frequency Warehouse Rave Volume 2",
        href: "https://events.humanitix.com/blackout-frequency-v2",
        imgSrc: "/img/shows-artwork/blackoutfrequencyvol2.jpg",
        date: "2025-07-26",
    },
    {
        title: "Nocturne Electropolis - Liquid and Dark Drum and Bass Edition",
        href: "https://ra.co/events/2190164",
        imgSrc: "/img/shows-artwork/nocturneelectropolis.jpg",
        date: "2025-07-18",
    },
    {
        title: "SUB-MERGED",
        href: "https://m.moshtix.com.au/v2/event/sub-merged-laundry/181747",
        imgSrc: "/img/shows-artwork/submerged.jpg",
        date: "2025-07-12",
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
        title: "Blackout Frequency Warehouse Rave Volume 1",
        href: "https://www.instagram.com/blackoutfrequency/",
        imgSrc: "/img/shows-artwork/blackoutwarehouse.jpeg",
        date: "2025-05-24",
    },
    {
        title: "Basstripper",
        href: "https://megatix.com.au/events/basstripper-melbourne",
        imgSrc: "/img/shows-artwork/basstripper.jpg",
        date: "2025-05-23",
    },
        {
        title: "Touch Bass 2024",
        href: "",
        imgSrc: "/img/shows-artwork/touchbass.jpg",
        date: "2024-03-29",
    },
        {
        title: "Bou and Basstripper",
        href: "",
        imgSrc: "/img/shows-artwork/boubasstripper.jpg",
        date: "2023-11-06",
    },
];

export default function Shows() {
  const containerRef = useRef<HTMLDivElement>(null);
  const upcomingScrollRef = useRef<HTMLDivElement>(null);
  const pastScrollRef = useRef<HTMLDivElement>(null);

  const [imagesPerView, setImagesPerView] = useState(3);

  useEffect(() => {
    const checkScreen = () => {
      const small = window.innerWidth < 768;
    //   setIsSmallScreen(small);
      setImagesPerView(small ? 2 : 3);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const today = dayjs();
  const upcoming = shows
  .filter((s) => dayjs(s.date).isSameOrAfter(today, "day"))
  .sort((a, b) => dayjs(a.date).diff(dayjs(b.date)));

  const past = shows.filter((s) => dayjs(s.date).isBefore(today, "day"));

  const imageFlexBasisPercent = 100 / imagesPerView;

  return (
    <div
      id="shows-section"
      className="py-6 text-white mx-auto"
      style={{ minWidth: "320px" }}
      ref={containerRef}
    >
      <h2 className="sr-only">Shows</h2>

      {/* UPCOMING SHOWS */}
      {upcoming.length > 0 && (
        <>
          <h3 className="text-2xl font-medium mb-4 text-center text-[#ffea00]">UPCOMING EVENTS</h3>
          <div className="relative flex items-center justify-center gap-2 w-full">
            {/* Scroll container */}
            <div
                ref={upcomingScrollRef}
                className="flex overflow-x-auto scroll-smooth touch-auto gap-4 w-[80%] custom-scrollbar"
                style={{ scrollSnapType: "x mandatory" }}
                    >
                {upcoming.map((show, idx) => (
                <a 
                    key={idx}
                    href={show.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 rounded shadow-lg overflow-hidden cursor-pointer"
                    style={{
                    flex: `0 0 ${imageFlexBasisPercent}%`,
                    scrollSnapAlign: "start",
                    aspectRatio: "4 / 5",
                    }}
                    tabIndex={0}
                    aria-label={`Upcoming show: ${show.title}`}
                >
                    <img
                    src={show.imgSrc}
                    alt={show.title}
                    className="w-full h-full object-cover"
                    draggable={false}
                    />
                </a>
                ))}
            </div>
          </div>
        </>
      )}

      {/* PAST SHOWS */}
      {past.length > 0 && (
        <>
          <h3 className="text-2xl font-medium mb-4 mt-8 text-center text-[#ffea00]">PAST EVENTS</h3>
          <div className="relative flex items-center justify-center gap-2 w-full">
            {/* Scroll container */}
            <div
              ref={pastScrollRef}
              className="flex overflow-x-auto scroll-smooth touch-auto gap-4 w-[80%] custom-scrollbar"
              style={{ scrollSnapType: "x mandatory", gap: "1rem", margin: "0 0.5rem" }}
            >
              {past.map((show, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 rounded shadow-lg overflow-hidden cursor-default"
                  style={{
                    flex: `0 0 ${imageFlexBasisPercent}%`,
                    scrollSnapAlign: "start",
                    aspectRatio: "4 / 5",
                  }}
                  tabIndex={-1}
                >
                  <img
                    src={show.imgSrc}
                    alt={show.title}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}