import Head from 'next/head';
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import ParticleOverlay from "@/components/ParticleOverlay";
import LightningOverlay from "@/components/LightningOverlay";

export default async function Home() {
  return (
    <>
      <Head>
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
