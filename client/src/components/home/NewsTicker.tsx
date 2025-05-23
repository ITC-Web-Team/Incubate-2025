import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// News data - this would typically come from an API
const medtechNews = [
  {
    id: 1,
    title: "AI System Detects Lung Cancer Earlier Than Radiologists",
    source: "MedTech Journal",
    date: "May 22, 2025"
  },
  {
    id: 2,
    title: "New Wearable Device Continuously Monitors Blood Glucose Without Needles",
    source: "Healthcare Innovation",
    date: "May 20, 2025"
  },
  {
    id: 3,
    title: "Robotic Exoskeleton Helps Paralyzed Patients Walk Again",
    source: "Medical Robotics Today",
    date: "May 19, 2025"
  },
  {
    id: 4,
    title: "Virtual Reality Platform Revolutionizes Surgical Training",
    source: "Digital Health Report",
    date: "May 18, 2025"
  },
  {
    id: 5,
    title: "Nanoparticle Delivery System Shows Promise for Targeted Cancer Treatment",
    source: "BioTech Advance",
    date: "May 17, 2025"
  },
  {
    id: 6,
    title: "New Brain-Computer Interface Allows ALS Patients to Communicate",
    source: "Neural Tech Review",
    date: "May 16, 2025"
  },
  {
    id: 7,
    title: "3D Bioprinting Successfully Creates Functional Human Heart Tissue",
    source: "Regenerative Medicine Today",
    date: "May 15, 2025"
  },
  {
    id: 8,
    title: "Smartphone Ultrasound Device Brings Medical Imaging to Remote Areas",
    source: "Global Health Technology",
    date: "May 14, 2025"
  }
];

const NewsTicker = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Function to rotate through news items
    const rotateNews = () => {
      setIsVisible(false);
      
      // Short delay to allow exit animation to complete
      setTimeout(() => {
        setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % medtechNews.length);
        setIsVisible(true);
      }, 500);
    };

    // Set up interval to change news every 4 seconds
    const intervalId = setInterval(rotateNews, 4000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const currentNews = medtechNews[currentNewsIndex];

  return (
    <section className="bg-gradient-to-r from-blue-900 to-indigo-900 py-3 relative overflow-hidden scanner-line">
      {/* Digital circuit background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,20 L100,20" stroke="#4f46e5" strokeWidth="0.1" strokeDasharray="1,5" fill="none" />
          <path d="M0,50 L100,50" stroke="#4f46e5" strokeWidth="0.1" strokeDasharray="1,5" fill="none" />
          <path d="M0,80 L100,80" stroke="#4f46e5" strokeWidth="0.1" strokeDasharray="1,5" fill="none" />
          <path d="M20,0 L20,100" stroke="#4f46e5" strokeWidth="0.1" strokeDasharray="1,5" fill="none" />
          <path d="M50,0 L50,100" stroke="#4f46e5" strokeWidth="0.1" strokeDasharray="1,5" fill="none" />
          <path d="M80,0 L80,100" stroke="#4f46e5" strokeWidth="0.1" strokeDasharray="1,5" fill="none" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between relative z-10">
          {/* Ticker label */}
          <div className="flex items-center">
            <div className="flex items-center mr-3 bg-blue-500 text-white px-3 py-1 rounded">
              <span className="animate-pulse mr-2">●</span>
              <span className="font-bold text-sm">MEDTECH NEWS</span>
            </div>
            <div className="hidden md:block h-5 w-px bg-blue-400/30"></div>
          </div>
          
          {/* News content with animation */}
          <div className="flex-1 px-4 overflow-hidden h-8">
            <AnimatePresence mode="wait">
              {isVisible && (
                <motion.div
                  key={currentNews.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-between"
                >
                  <p className="text-white font-medium truncate">
                    {currentNews.title}
                  </p>
                  <div className="hidden md:flex items-center ml-4 text-blue-200 text-xs whitespace-nowrap">
                    <span>{currentNews.source}</span>
                    <span className="mx-2">•</span>
                    <span>{currentNews.date}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Indicator showing which news is active */}
          <div className="hidden md:flex space-x-1">
            {medtechNews.map((_, index) => (
              <div 
                key={index}
                className={`h-1.5 w-1.5 rounded-full ${
                  index === currentNewsIndex ? 'bg-blue-400' : 'bg-blue-800'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsTicker;