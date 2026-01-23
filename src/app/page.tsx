import HeroSection from "@/components/HeroSection";
import LightAnimation from "@/components/LightAnimation";
import About from "@/components/about/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <LightAnimation />
      <About />
    </main>
  );
}
