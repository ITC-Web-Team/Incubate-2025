import { motion } from "framer-motion";
import incubateLogo from "@/assets/logos/incubate-logo.jpeg";

const IncubateLogo = () => {
  // Particle animation params
  const particleCount = 30;
  const particles = Array.from({ length: particleCount });

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-blue-900 digital-noise relative overflow-hidden">
      {/* Circuit background elements */}
      <div className="absolute inset-0 w-full h-full opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M25,0 C25,50 75,50 75,100" stroke="#4f46e5" strokeWidth="0.2" fill="none" />
          <path d="M0,25 C50,25 50,75 100,75" stroke="#4f46e5" strokeWidth="0.2" fill="none" />
          <circle cx="50" cy="50" r="40" stroke="#4f46e5" strokeWidth="0.2" fill="none" />
          <circle cx="50" cy="50" r="30" stroke="#4f46e5" strokeWidth="0.1" fill="none" />
          <circle cx="50" cy="50" r="20" stroke="#4f46e5" strokeWidth="0.1" fill="none" />
        </svg>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-500/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            className="relative mx-auto mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            {/* Animated rings around logo */}
            <motion.div 
              className="absolute inset-0 border-2 border-blue-500/30 rounded-full"
              style={{ width: '130%', height: '130%', top: '-15%', left: '-15%' }}
              animate={{ 
                rotate: 360,
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, repeatType: "reverse" }
              }}
            />
            
            <motion.div 
              className="absolute inset-0 border border-purple-500/30 rounded-full"
              style={{ width: '150%', height: '150%', top: '-25%', left: '-25%' }}
              animate={{ 
                rotate: -360,
                scale: [1, 1.03, 1]
              }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, repeatType: "reverse" }
              }}
            />
            
            {/* Logo container with glow */}
            <motion.div 
              className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-md rounded-full flex items-center justify-center relative overflow-hidden mx-auto border border-blue-500/30 shadow-glow"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Scanner line effect */}
              <div className="absolute inset-0 scanner-line"></div>
              
              {/* Logo image */}
              <motion.img
                src={incubateLogo}
                alt="Incubate Logo"
                className="w-5/6 h-5/6 object-contain relative z-10"
                initial={{ y: 20 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            INCUBATE
          </motion.h1>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          ></motion.div>
          
          <motion.p 
            className="text-xl text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Where curiosity meets innovation
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default IncubateLogo;