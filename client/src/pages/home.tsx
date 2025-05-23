import HeroSection from "@/components/home/HeroSection";
import AboutEvent from "@/components/home/AboutEvent";
import Timeline from "@/components/home/Timeline";
import Process from "@/components/home/Process";
import Prizes from "@/components/home/Prizes";
import Sponsors from "@/components/home/Sponsors";
import IncubateLogo from "@/components/home/IncubateLogo";
import NewsTicker from "@/components/home/NewsTicker";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  // Update page title on mount
  useEffect(() => {
    document.title = "Incubate - Where Curiosity Meets Innovation";
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <NewsTicker />
      <IncubateLogo />
      <AboutEvent />
      <Timeline />
      <Process />
      <Prizes />
      <Sponsors />
    </motion.div>
  );
}
