/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
dayjs.extend(isSameOrAfter);


const shows = [
    {
        title: "Like It Love It Events Presents: DnB Boat Party, Melbourne Australia",
        href: "https://fixr.co/event/dnb-boat-party-melbourne-tickets-872451512",
        imgSrc: "/img/shows-artwork/boatparty_march_2026.jpg",
        date: "2026-03-21",
    },
    {
        title: "Blackout Frequency Presents: Dead Serpent - Boxing Day Warehouse Rave (Secret location announced on the night), Melbourne Australia",
        href: "https://events.humanitix.com/dead-serpent",
        imgSrc: "/img/shows-artwork/deadserpent_december_2025.jpg",
        date: "2025-12-26",
    },
    {
        title: "Pulse Audio & SUB:SOLAR Present: Xmas Eve in the Park, Melbourne Australia",
        href: "https://www.instagram.com/pulse_audio_",
        imgSrc: "/img/shows-artwork/xmaseveinthepark_december_2025.jpg",
        date: "2025-12-24",
    },
    {
        title: "Abyssal Presents Soulful Sessions at Nevermind Bar, Melbourne Australia",
        href: "https://www.facebook.com/events/2081448785928836",
        imgSrc: "/img/shows-artwork/soulfulsessions_december_2025.jpg",
        date: "2025-12-13",
    },
    {
        title: "Pitch Control Presents Wilkinson, Rova, and Sammythesinner at 170 Russell, Melbourne Australia",
        href: "https://moshtix.com.au/v2/event/wilkinson/184336",
        imgSrc: "/img/shows-artwork/wilkinson_november_2025.jpg",
        date: "2025-11-21",
    },
    {
        title: "Nocturne Presents Electropolis: Halloween Edition at QQQ, Melbourne Australia",
        href: "https://ra.co/events/2243135",
        imgSrc: "/img/shows-artwork/electropolis_halloween_edition_october_2025.jpg",
        date: "2025-10-31",
    },
    {
        title: "Like It Love It Events Presents: DnB Boat Party, Melbourne Australia",
        href: "https://fixr.co/event/drum-and-bass-boat-party-melbourne-tickets-374049284",
        imgSrc: "/img/shows-artwork/dnboatparty_october_2025.jpg",
        date: "2025-10-25",
    },
    {
        title: "House of Sin at Top Yard Rooftop, Melbourne Australia",
        href: "https://megatix.com.au/events/house-of-sin-melbourne",
        imgSrc: "/img/shows-artwork/house_of_sin_october_2025.jpg",
        date: "2025-10-11",
    },
        {
        title: "Plasma Lab Presents SWRVE featuring EN:VY, Melbourne Australia",
        href: "https://ra.co/events/2245209",
        imgSrc: "/img/shows-artwork/plasmalab-envy.jpg",
        date: "2025-09-25",
    },
    {
        title: "Delight Liquid Edition at Section 8, Melbourne Australia",
        href: "https://www.facebook.com/events/627721530371012",
        imgSrc: "/img/shows-artwork/delight_liquid_edition_september_2025.jpg",
        date: "2025-09-07",
    },
    {
        title: "Blackout Frequency Present Whiteout Frequency at The General Mt Hotham, Hotham Australia",
        href: "https://events.humanitix.com/whiteout-frequency",
        imgSrc: "/img/shows-artwork/whiteout_frequency_august_2025.jpg",
        date: "2025-08-30",
    },
    {
        title: "Slack Soundsystem at Second Story Studios, Melbourne Australia",
        href: "https://www.eventbrite.com.au/e/slack-sound-system-warehouse-party-tickets-1459809853569",
        imgSrc: "/img/shows-artwork/slacksoundsystem.jpg",
        date: "2025-08-02",
    },
    {
        title: "Blackout Frequency Warehouse Rave Volume 2, Melbourne Australia",
        href: "https://events.humanitix.com/blackout-frequency-v2",
        imgSrc: "/img/shows-artwork/blackoutfrequencyvol2.jpg",
        date: "2025-07-26",
    },
    {
        title: "Nocturne Presents Electropolis: Liquid and Dark Drum and Bass Edition at QQQ, Melbourne Australia",
        href: "https://ra.co/events/2190164",
        imgSrc: "/img/shows-artwork/nocturneelectropolis.jpg",
        date: "2025-07-18",
    },
    {
        title: "SUB-MERGED at Laundry, Melbourne Australia",
        href: "https://m.moshtix.com.au/v2/event/sub-merged-laundry/181747",
        imgSrc: "/img/shows-artwork/submerged.jpg",
        date: "2025-07-12",
    },
    {
        title: "Twisted Audio and Inhibit Present A.M.C. & Phantom, Koven, Skantia, Circadian at 170 Russell, Melbourne Australia",
        href: "https://moshtix.com.au/v2/event/a-m-c-phantom-koven-skantia-circadian/178936",
        imgSrc: "/img/shows-artwork/amc.jpg",
        date: "2025-06-08",
    },
    {
        title: "Hyperfix Crew Presents Rum & Bass at Section 8, Melbourne Australia",
        href: "https://www.instagram.com/hyperfix.crew/",
        imgSrc: "/img/shows-artwork/rnb.jpeg",
        date: "2025-05-29",
    },
    {
        title: "Blackout Frequency Warehouse Rave Volume 1, Melbourne Australia",
        href: "https://www.instagram.com/blackoutfrequency/",
        imgSrc: "/img/shows-artwork/blackoutwarehouse.jpeg",
        date: "2025-05-24",
    },
    {
        title: "Inhibit and Nocturne Present Basstripper at Sub Club, Melbourne Australia",
        href: "https://megatix.com.au/events/basstripper-melbourne",
        imgSrc: "/img/shows-artwork/basstripper.jpg",
        date: "2025-05-23",
    },
    {
        title: "Pitch Control and Twisted Audio Present SOTA and Crossy at Max Watts, Melbourne Australia",
        href: "",
        imgSrc: "/img/shows-artwork/sota_november_2024.jpg",
        date: "2024-11-09",
    },
        {
        title: "Pitch Control and Twisted Audio Present Touch Bass 2024 at Melbourne Pavillion, Melbourne Australia",
        href: "",
        imgSrc: "/img/shows-artwork/touchbass.jpg",
        date: "2024-03-29",
    },
        {
        title: "Twisted Audio and Higher Ground present Bou and Basstripper at Max Watts, Melbourne Australia",
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
                    }}
                    tabIndex={0}
                    aria-label={`Upcoming show: ${show.title}`}
                >
                    <div
                    style={{
                        position: "relative",
                        width: "100%",
                        paddingTop: `${(5 / 4) * 100}%`, // 4:5 aspect ratio → height = 125% width
                    }}
                    >
                    <img
                        src={show.imgSrc}
                        alt={show.title}
                        draggable={false}
                        style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        }}
                    />
                    </div>
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
                    }}
                    tabIndex={-1}
                    >
                    <div
                        style={{
                        position: "relative",
                        width: "100%",
                        paddingTop: `${(5 / 4) * 100}%`, // 125%
                        }}
                    >
                        <img
                        src={show.imgSrc}
                        alt={show.title}
                        draggable={false}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                        />
                    </div>
                    </div>

              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}