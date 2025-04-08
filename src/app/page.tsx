import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import ParticleOverlay from "@/components/ParticleOverlay";
import LightningOverlay from "@/components/LightningOverlay";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto">
      <ParticleOverlay />
      <LightningOverlay />
      <HeroSection />
      <About />
    </main>
  );
}
