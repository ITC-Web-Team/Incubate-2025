import FAQs from "@/components/faqs/FAQs";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function FAQsPage() {
  // Update page title on mount
  useEffect(() => {
    document.title = "FAQs | Incubate - MedTech Hackathon";
  }, []);
  
  return (
    <motion.div 
      className="py-12 digital-noise relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Circuit background elements */}
      <div className="absolute inset-0 w-full h-full opacity-10 -z-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M25,0 C25,50 75,50 75,100" stroke="#4f46e5" strokeWidth="0.2" fill="none" />
          <path d="M0,25 C50,25 50,75 100,75" stroke="#4f46e5" strokeWidth="0.2" fill="none" />
          <path d="M10,10 Q50,0 90,10" stroke="#4f46e5" strokeWidth="0.2" fill="none" strokeDasharray="0.5,1" />
          <path d="M10,90 Q50,100 90,90" stroke="#4f46e5" strokeWidth="0.2" fill="none" strokeDasharray="0.5,1" />
        </svg>
      </div>
      
      <FAQs />
    </motion.div>
  );
}
