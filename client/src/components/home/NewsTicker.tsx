import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NEWS_API_URL =
  'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json';

const NewsTicker = () => {
  const [news, setNews] = useState<any[]>([]);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    fetch(NEWS_API_URL)
      .then(res => res.json())
      .then(data => {
        if (data.articles) {
          // Filter for medtech/medical technology/innovation/AI/robotics/healthcare keywords
          const medtechKeywords = [
            'medtech', 'medical technology', 'innovation', 'AI', 'robot', 'wearable', 'diagnostic', 'healthcare', 'device', 'monitor', 'surgical', 'biotech', 'telemedicine', 'remote', 'sensor', 'virtual', 'education', 'training', 'simulation', 'analytics', 'machine learning', 'data', 'digital', 'platform', 'startup', 'incubate', 'hackathon'
          ];
          const filtered = data.articles.filter((a: any) =>
            medtechKeywords.some(keyword =>
              (a.title && a.title.toLowerCase().includes(keyword)) ||
              (a.description && a.description.toLowerCase().includes(keyword))
            )
          );
          setNews(
            (filtered.length > 0 ? filtered : data.articles).map((a: any, i: number) => ({
              id: i,
              title: a.title,
              source: a.source.name,
              date: new Date(a.publishedAt).toLocaleDateString(),
              url: a.url
            }))
          );
        }
      })
      .catch(() => {
        // fallback to static news if API fails
        setNews([
          { id: 1, title: "AI System Detects Lung Cancer Earlier Than Radiologists", source: "MedTech Journal", date: "May 22, 2025", url: "#" },
          { id: 2, title: "New Wearable Device Continuously Monitors Blood Glucose Without Needles", source: "Healthcare Innovation", date: "May 20, 2025", url: "#" },
        ]);
      });
  }, []);

  useEffect(() => {
    if (news.length === 0) return;
    const rotateNews = () => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % news.length);
        setIsVisible(true);
      }, 500);
    };
    const intervalId = setInterval(rotateNews, 4000);
    return () => clearInterval(intervalId);
  }, [news]);

  if (news.length === 0) {
    // Show a loading spinner or fallback static news while loading
    return (
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 py-3 relative overflow-hidden scanner-line">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between relative z-10 min-h-8">
            <div className="flex items-center">
              <div className="flex items-center mr-3 bg-blue-500 text-white px-3 py-1 rounded">
                <span className="animate-pulse mr-2">●</span>
                <span className="font-bold text-sm">MEDTECH NEWS</span>
              </div>
              <div className="hidden md:block h-5 w-px bg-blue-400/30"></div>
            </div>
            <div className="flex-1 px-4 overflow-hidden h-8">
              <span className="text-white text-sm">Loading latest news...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentNews = news[currentNewsIndex];

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
                    <a href={currentNews.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {currentNews.title}
                    </a>
                  </p>
                  <div className="hidden md:flex items-center ml-4 text-blue-200 text-xs whitespace-nowrap">
                    <span>{currentNews.source}</span>
                    <span className="mx-2">•</span>
                    {/* <span>{currentNews.date}</span> */}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Indicator showing which news is active */}
          <div className="hidden md:flex space-x-1">
            {news.map((_, index) => (
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