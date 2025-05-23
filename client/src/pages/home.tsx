import HeroSection from "@/components/home/HeroSection";
import AboutEvent from "@/components/home/AboutEvent";
import Timeline from "@/components/home/Timeline";
import Process from "@/components/home/Process";
import Prizes from "@/components/home/Prizes";
import Sponsors from "@/components/home/Sponsors";
import { useEffect } from "react";

export default function Home() {
  // Update page title on mount
  useEffect(() => {
    document.title = "Incubate - Where Curiosity Meets Innovation";
  }, []);
  
  return (
    <>
      <HeroSection />
      <AboutEvent />
      <Timeline />
      <Process />
      <Prizes />
      <Sponsors />
    </>
  );
}
