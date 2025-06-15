import { motion } from "framer-motion";
import incubateLogo from "@/assets/logos/incubate-logo.jpeg"; // Changed to PNG version
import { useEffect, useState } from "react";

const IncubateLogo = () => {
  // Define colors for particles and effects
  const colors = ["#3b82f6", "#8b5cf6", "#ec4899", "#10b981"];
  
  // For particles
  const smallParticleCount = 40;
  const smallParticles = Array.from({ length: smallParticleCount });
  
  // For floating dots that follow a circular path
  const orbitingDotsCount = 12;
  const orbitingDots = Array.from({ length: orbitingDotsCount });
  
  // For pulsing effect
  const [isHovered, setIsHovered] = useState(false);
  
  // Generate random delay for staggered animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsHovered(prev => !prev);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Circuit background */}
      <div className="absolute inset-0 w-full h-full opacity-15">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M10,10 Q50,30 90,10" stroke="#4f46e5" strokeWidth="0.1" fill="none" />
          <path d="M10,90 Q50,70 90,90" stroke="#4f46e5" strokeWidth="0.1" fill="none" />
          <path d="M20,20 C20,50 80,50 80,80" stroke="#6366f1" strokeWidth="0.1" fill="none" strokeDasharray="0.5,1" />
          <path d="M80,20 C80,50 20,50 20,80" stroke="#6366f1" strokeWidth="0.1" fill="none" strokeDasharray="0.5,1" />
          <circle cx="50" cy="50" r="40" stroke="#4f46e5" strokeWidth="0.2" fill="none" />
          <circle cx="50" cy="50" r="30" stroke="#4f46e5" strokeWidth="0.1" fill="none" />
          <circle cx="50" cy="50" r="20" stroke="#4f46e5" strokeWidth="0.1" fill="none" />
        </svg>
      </div>
      
      {/* Floating tiny particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {smallParticles.map((_, i) => (
          <motion.div
            key={`small-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: colors[Math.floor(Math.random() * colors.length)],
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.6,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo Container */}
          <motion.div
            className="relative mx-auto mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {/* Orbiting dots */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {orbitingDots.map((_, i) => {
                const angle = (i / orbitingDotsCount) * 360;
                const delay = i * 0.05;
                return (
                  <motion.div
                    key={`orbit-${i}`}
                    className="absolute rounded-full"
                    style={{
                      width: i % 3 === 0 ? '6px' : '4px',
                      height: i % 3 === 0 ? '6px' : '4px',
                      backgroundColor: colors[i % colors.length],
                    }}
                    initial={{
                      x: Math.cos((angle * Math.PI) / 180) * 180,
                      y: Math.sin((angle * Math.PI) / 180) * 180,
                    }}
                    animate={{
                      x: [
                        Math.cos((angle * Math.PI) / 180) * 180,
                        Math.cos(((angle + 120) * Math.PI) / 180) * 180,
                        Math.cos(((angle + 240) * Math.PI) / 180) * 180,
                        Math.cos((angle * Math.PI) / 180) * 180,
                      ],
                      y: [
                        Math.sin((angle * Math.PI) / 180) * 180,
                        Math.sin(((angle + 120) * Math.PI) / 180) * 180,
                        Math.sin(((angle + 240) * Math.PI) / 180) * 180,
                        Math.sin((angle * Math.PI) / 180) * 180,
                      ],
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.9, 0.3],
                    }}
                    transition={{
                      duration: 20,
                      ease: "linear",
                      times: [0, 0.33, 0.66, 1],
                      delay,
                      repeat: Infinity,
                    }}
                  />
                );
              })}
            </div>
            
            {/* Animated rings */}
            <motion.div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-blue-400/40 rounded-full"
              style={{ width: '350px', height: '350px' }}
              animate={{ 
                rotate: 360,
              }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
            
            <motion.div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-purple-400/30 rounded-full"
              style={{ width: '400px', height: '400px' }}
              animate={{ 
                rotate: -360,
              }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
            
            {/* Logo container */}
            <motion.div 
              className="relative mx-auto w-64 h-64 md:w-72 md:h-72 bg-white dark:bg-white backdrop-blur-md rounded-full flex items-center justify-center overflow-hidden border border-gray-300 dark:border-gray-300"
              style={{ boxShadow: "0 0 30px 5px rgba(147, 197, 253, 0.18)" }}
              whileHover={{ scale: 1.03 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              {/* Scanner effect - consider removing or making it very subtle if background is white */}
              {/* <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"
                initial={{ top: "-100%" }}
                animate={{ top: ["100%", "-100%"] }}
                transition={{ 
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                  repeatDelay: 3
                }}
                style={{ height: "50%", width: "100%" }}
              /> */}
              
              {/* Logo image */}
              <motion.div
                className="relative z-10 w-5/6 h-5/6 flex items-center justify-center"
                animate={{ 
                  y: isHovered ? [0, -5, 0] : [0, -8, 0],
                }}
                transition={{ 
                  duration: isHovered ? 2 : 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <img
                  src={incubateLogo}
                  alt="Incubate Logo"
                  className="w-5/6 h-5/6 object-contain filter "
                />
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Text elements */}
          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.05em' }}
          >
            INCUBATE
          </motion.h1>
          
          <motion.div
            className="w-48 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 192 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
          
          <motion.p 
            className="text-2xl font-light text-blue-100 max-w-2xl mx-auto tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Where curiosity meets innovation
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default IncubateLogo;