import HeroSection from "@/components/HeroSection";
import LightAnimation from "@/components/LightAnimation";
import About from "@/components/about/About";
import Solutions from "@/components/solution/Solution";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <LightAnimation />
      <About />
      <Solutions />
    </main>
  );
}
