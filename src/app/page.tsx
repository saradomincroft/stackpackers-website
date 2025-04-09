import Head from 'next/head';
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import ParticleOverlay from "@/components/ParticleOverlay";
import LightningOverlay from "@/components/LightningOverlay";

export default async function Home() {
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
        {/* Overlays behind content */}
        <ParticleOverlay />
        <LightningOverlay />

        {/* Main content */}
        <div className="relative z-10">
          <HeroSection />
          <About />
        </div>
      </main>
    </>
  );
}
