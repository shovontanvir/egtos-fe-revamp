import LightAnimation from "@/components/LightAnimation";
import About from "@/components/about/About";
import Solutions from "@/components/solution/Solution";
import WhyDifferent from "@/components/whydifferent/WhyDifferent";
import Benefit from "@/components/benefit/Benefit";
import Value from "@/components/unlockthevalue/UnlockValue";
import Footer from "@/components/Footer";
import WorkProsses from "@/components/workprosses/WorkProsses";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <LightAnimation />
      <About />
      <Solutions />
      <WorkProsses />
      <WhyDifferent />
      <Benefit />
      <Value />
      {/* <Footer /> */}
    </main>
  );
}
