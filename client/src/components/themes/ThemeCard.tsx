import { motion } from "framer-motion";

interface ThemeCardProps {
  title: string;
  icon: string;
  color: string;
  description: string;
  mentors: string;
  outcomes: string;
  image?: string;
  challenges?: string[];
  resources?: string[];
  tags?: string[];
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
}

const ThemeCard = ({
  title,
  icon,
  color,
  description,
  mentors,
  outcomes,
  image,
  challenges = [],
  resources = [],
  tags = [],
  difficulty = "Intermediate"
}: ThemeCardProps) => {
  return (
    <motion.div 
      className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-xl overflow-hidden border border-blue-200 dark:border-blue-900 hover:shadow-glow relative scanner-line"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0.9, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Digital noise effect */}
      <div className="absolute inset-0 digital-noise"></div>
      
      {/* Header with image or icon */}
      <div className="relative">
        {image ? (
          <div className={`h-64 relative overflow-hidden`}>
            {/* Overlay with theme color */}
            <div className={`absolute inset-0 ${color} opacity-80 z-10`}></div>
            
            {/* Theme image */}
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
            
            {/* Theme icon floating above */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div
                className="bg-white/20 backdrop-blur-md p-4 rounded-full"
                animate={{ 
                  y: [0, -10, 0],
                  boxShadow: [
                    "0 0 20px rgba(255, 255, 255, 0.3)",
                    "0 0 30px rgba(255, 255, 255, 0.5)",
                    "0 0 20px rgba(255, 255, 255, 0.3)"
                  ]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <i className={`${icon} text-5xl text-white`}></i>
              </motion.div>
            </div>
            
            {/* Difficulty indicator */}
            <div className="absolute top-4 right-4 z-20 bg-black/50 text-white text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm">
              {difficulty}
            </div>
          </div>
        ) : (
          <div className={`h-48 ${color} flex items-center justify-center relative`}>
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <i className={`${icon} text-7xl text-white drop-shadow-lg`}></i>
            </motion.div>
            
            {/* Difficulty indicator */}
            <div className="absolute top-4 right-4 bg-black/50 text-white text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm">
              {difficulty}
            </div>
          </div>
        )}
      </div>
      
      {/* Title with gradient effect */}
      <div className="pt-6 px-6">
        <motion.h3 
          className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
        
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="space-y-5 pb-6 relative z-10">
          {/* Description */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Brief Description
            </h4>
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
          </div>
          
          {/* Challenge points */}
          {challenges.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Key Challenges
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                {challenges.map((challenge, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300 text-sm">{challenge}</li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Mentors */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Faculty Mentors
            </h4>
            <p className="text-gray-700 dark:text-gray-300">{mentors}</p>
          </div>
          
          {/* Outcomes */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Expected Outcomes
            </h4>
            <p className="text-gray-700 dark:text-gray-300">{outcomes}</p>
          </div>
          
          {/* Resources */}
          {resources.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Helpful Resources
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                {resources.map((resource, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300 text-sm">{resource}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ThemeCard;
