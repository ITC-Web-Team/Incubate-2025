import { motion } from "framer-motion";
import { Link } from "wouter";

interface ThemeCardProps {
  title: string;
  icon: string;
  color: string;
  description: string;
  slug?: string;
  clickable?: boolean;
}

const ThemeCard = ({
  title,
  icon,
  color,
  description,
  slug,
  clickable = false
}: ThemeCardProps) => {
  const cardContent = (
    <motion.div 
      className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-xl overflow-hidden border border-blue-200 dark:border-blue-900 hover:shadow-glow relative scanner-line cursor-pointer h-full flex flex-col"
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
        </div>
      </div>
      
      {/* Title and Description */}
      <div className="pt-6 px-6 pb-6 flex-grow flex flex-col">
        <motion.h3 
          className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
        
        <div className="space-y-3 pb-6 relative z-10 flex-grow">
          {/* Description */}
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {description}
            </p>
          </div>
        </div>
        {/* Video Coming Soon Placeholder */}
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            <i className="ri-movie-2-line mr-2"></i>Video coming soon
          </p>
        </div>
      </div>
    </motion.div>
  );

  if (clickable && slug) {
    return (
      <Link href={`/themes/${slug}`} className="block h-full">
        {cardContent}
      </Link>
    );
  }
  return cardContent;
};

export default ThemeCard;
