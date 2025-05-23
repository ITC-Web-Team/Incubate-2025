import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const slides = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    alt: "Medical professionals collaborating with engineers over medical device"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    alt: "Medical professionals looking at brain scan with technology"
  },
  {
    id: 3,
    url: "https://pixabay.com/get/gd6d8b3a9a1412bf43dbcc1fd8589e7376f48d25918a5ba774d39ca1ae0d42d49423d6beb606f5a2fba8557207dd3cf2ae97db05cb91541d5b9414c88e47428b5_1280.jpg",
    alt: "High-tech medical laboratory equipment"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    alt: "Medical robotics in surgery"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    alt: "Team collaborating on medical technology"
  }
];

// Tech particles background animation
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-30">
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blue-500"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.4, 0.8, 0.4],
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
  );
};

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Handle slide change
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isPaused) return;

    // Auto-advance slides
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="home" className="relative h-[85vh] overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
      <ParticleBackground />
      
      {/* Digital circuit lines */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="#4f46e5" strokeWidth="0.2" />
          <path d="M0,50 L100,50" fill="none" stroke="#4f46e5" strokeWidth="0.2" />
          <path d="M50,0 L50,100" fill="none" stroke="#4f46e5" strokeWidth="0.2" />
          {/* Circuit paths */}
          <path d="M10,10 Q30,30 50,10 T90,10" fill="none" stroke="#4f46e5" strokeWidth="0.2" />
          <path d="M10,90 Q30,70 50,90 T90,90" fill="none" stroke="#4f46e5" strokeWidth="0.2" />
          <path d="M10,50 Q30,30 50,50 T90,50" fill="none" stroke="#4f46e5" strokeWidth="0.2" />
        </svg>
      </div>
      
      {/* Slideshow container */}
      <div 
        className="slideshow-container h-full relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className="absolute inset-0 h-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentSlide ? 0.7 : 0,
              scale: index === currentSlide ? 1 : 1.1
            }}
            transition={{ duration: 1.5 }}
            style={{ 
              backgroundImage: `url('${slide.url}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: index === currentSlide ? 'block' : 'none'
            }}
            aria-hidden={index !== currentSlide}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/70 mix-blend-multiply"></div>
          </motion.div>
        ))}
        
        {/* Advanced slide controls */}
        <div className="absolute z-10 bottom-6 left-0 right-0 flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide 
                  ? 'bg-gradient-to-r from-blue-400 to-purple-400 border border-white shadow-glow' 
                  : 'bg-gray-400/50 border border-gray-300/30'
              } hover:opacity-100 transition-all duration-300 transform hover:scale-110`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide}
            ></button>
          ))}
        </div>
      </div>
      
      {/* Hero content */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="max-w-2xl backdrop-blur-sm bg-black/10 p-8 rounded-lg border border-blue-500/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Incubate</span>
              <span className="block mt-2 text-white">National MedTech Hackathon</span>
            </motion.h1>
            
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            ></motion.div>
            
            <motion.p 
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Where medical expertise meets engineering innovation to create the future of healthcare
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a 
                href="https://forms.gle/your-registration-form" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-8 rounded-md shadow-lg group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
                <span className="relative z-10 flex items-center justify-center">
                  <span>Register Now</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              
              <Link href="/about">
                <a className="relative overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300">
                  Learn More
                </a>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
