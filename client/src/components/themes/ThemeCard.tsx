import { motion } from "framer-motion";
import { Link } from "wouter";

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
  slug?: string;
  clickable?: boolean;
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
  difficulty = "Intermediate",
  slug,
  clickable = false
}: ThemeCardProps) => {
  const cardContent = (
    <motion.div 
      className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-xl overflow-hidden border border-blue-200 dark:border-blue-900 hover:shadow-glow relative scanner-line cursor-pointer"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0.9, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Digital noise effect */}
      <div className="absolute inset-0 digital-noise"></div>
      
      {/* Header with icon only, no image */}
      <div className="relative">
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

  return clickable && slug ? (
    <Link href={`/themes/${slug}`}>{cardContent}</Link>
  ) : cardContent;
};

export default ThemeCard;
