import { useState, useEffect } from "react";
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
    <section id="home" className="relative h-[85vh] overflow-hidden bg-gray-900">
      {/* Slideshow container */}
      <div 
        className="slideshow-container h-full relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide h-full bg-cover bg-center ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url('${slide.url}')` }}
            aria-hidden={index !== currentSlide}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-black/50"></div>
          </div>
        ))}
        
        {/* Slide controls */}
        <div className="absolute z-10 bottom-6 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full bg-white ${
                index === currentSlide ? 'opacity-100' : 'opacity-50'
              } hover:opacity-100 transition-opacity`}
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
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              <span className="inline-block">Incubate</span>
              <span className="block mt-2 text-primary-300">National MedTech Hackathon</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Where medical expertise meets engineering innovation to create the future of healthcare
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <a className="bg-[#f97316] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 text-center">
                  Register Now
                </a>
              </Link>
              <Link href="/about">
                <a className="bg-white hover:bg-gray-100 text-primary-600 font-semibold py-3 px-8 rounded-md shadow-lg transition duration-300 text-center">
                  Learn More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
