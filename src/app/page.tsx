"use client";
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ParticleOverlay from "@/components/ParticleOverlay";
import LightningOverlay from "@/components/LightningOverlay";
import Navbar from '@/components/Navbar';
import HeroSection from "@/components/HeroSection";
import Info from "@/components/Info";
import Links from "@/components/Links";
import Music from '@/components/Music';
import Shows from '@/components/Shows';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    setShowNavbar(true);
  }, []);

  return (
    <>
      <Head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1642911539671658');
              fbq('track', 'PageView');
            `
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1642911539671658&ev=PageView&noscript=1"
            alt="" />
        </noscript>
        {/* End Meta Pixel Code */}
        {/* TikTok Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              //@ts-ignore
              !function (w, d, t) {
                w.TiktokAnalyticsObject=t;
                var ttq=w[t]=w[t]||[];
                ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
                ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}; 
                for(var i=0;i<ttq.methods.length;i++) ttq.setAndDefer(ttq,ttq.methods[i]);
                ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);
                return e};
                ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;
                ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};
                n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;
                e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
                ttq.load('CVR0JKRC77U819HAPDTG');
                ttq.page();
              }(window, document, 'ttq');
            `
          }}
        />
        {/* End TikTok Pixel Code */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              "name": "Stackpackers",
              "description": "A storm in full force, shaking the scene with explosive sets and powerful soundscapes.",
              "url": "https://stackpackers.com",
              "genre": "Drum and Bass",
              "member": [
                {
                  "@type": "Person",
                  "name": "Sara Catalano"
                },
                {
                  "@type": "Person",
                  "name": "Joseph James Carrington-Griffin"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/stackpackers",
                "https://facebook.com/stackpackers",
                "https://www.tiktok.com/@stackpackers",
                "https://soundcloud.com/stackpackers",
                "https://www.youtube.com/channel/UCDLU5AEO7qqnQXJPHlA9sPQ",
                "https://open.spotify.com/artist/6oPMjcVt82VYpcntvL2JqZ?si=UjX0Yg0hQ96CzT9vUlkBuw",
                "https://www.beatport.com/artist/stackpackers/1142861",
                "https://music.apple.com/us/artist/stackpackers/1698648603",
                "https://music.amazon.com/artists/B0B63XG3MK/stackpackers",
                "https://stackpackers.bandcamp.com"
              ]
            })
          }}
        />
      </Head>

      <main className="flex min-h-screen flex-col container mx-auto relative">
        {/* Navbar with fade-in effect */}
        <Navbar isVisible={showNavbar} />

        {/* Overlays behind content */}
        <ParticleOverlay />
        <LightningOverlay />

        {/* Main content */}
        <div className="relative z-10 mask-fade-top">
          <HeroSection />
          <Info />
          <Links />
          <Music />
          <Shows />
          <Contact />
          <Footer />

        </div>
      </main>
    </>
  );
}
