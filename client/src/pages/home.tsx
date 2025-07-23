import HeroSection from "@/components/home/HeroSection";
import AboutEvent from "@/components/home/AboutEvent";
import Timeline from "@/components/home/Timeline";
import Process from "@/components/home/Process";
import Prizes from "@/components/home/Prizes";
import Sponsors from "@/components/home/Sponsors";
import IncubateLogo from "@/components/home/IncubateLogo";
import Popup from "@/components/ui/Popup";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  // Update page title on mount and show popup once per tab opening
  useEffect(() => {
    document.title = "Incubate - Where Curiosity Meets Innovation";
    
    // Check if user has seen popup in this tab session
    const hasSeenPopup = sessionStorage.getItem('incubate_popup_shown');
    
    console.log('Has seen popup this tab session:', hasSeenPopup);
    
    // Show popup only if haven't seen it in this tab session
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        console.log('Showing popup for this tab...');
        setShowPopup(true);
        // Mark that popup has been shown in this tab session
        sessionStorage.setItem('incubate_popup_shown', 'true');
      }, 1500); // 1.5-second delay
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopup = () => {
    console.log('Closing popup...');
    setShowPopup(false);
  };
  
  return (
    <>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <IncubateLogo />
        <AboutEvent />
        <Timeline />
        <Process />
        <Prizes />
        <Sponsors />
      </motion.div>
      
      {/* Submission Popup for first-time visitors */}
      {showPopup && <Popup onClose={handleClosePopup} />}
    </>
  );
}
