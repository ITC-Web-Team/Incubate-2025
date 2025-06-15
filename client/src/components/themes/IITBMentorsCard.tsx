import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { iitBombayMentors } from '@/data/facultyData';
import FacultyMentorCard from './FacultyMentorCard';
import { RiTeamLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

const IITBMentorsCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <motion.div 
      layout
      className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-xl overflow-hidden border border-blue-200 dark:border-blue-900 hover:shadow-glow relative scanner-line cursor-pointer h-full flex flex-col"
      initial={{ opacity: 0.9, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Digital noise effect */}
      <div className="absolute inset-0 digital-noise opacity-50"></div>
      
      {/* Clickable Header */}
      <div 
        className="relative p-6 flex items-center justify-between" 
        onClick={toggleExpand}
      >
        <div className="flex items-center">
          <div className={`h-16 w-16 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center rounded-lg mr-4 shadow-md`}>
            <RiTeamLine className="text-4xl text-white drop-shadow-lg" />
          </div>
          <motion.h3 
            className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400"
          >
            IIT Bombay Faculty Mentors
          </motion.h3>
        </div>
        <motion.div whileHover={{ scale: 1.1 }}>
          {isExpanded ? 
            <RiArrowUpSLine className="text-3xl text-gray-600 dark:text-gray-400" /> : 
            <RiArrowDownSLine className="text-3xl text-gray-600 dark:text-gray-400" />}
        </motion.div>
      </div>
      
      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="px-6 pb-6 pt-2"
          >
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-8">
              {iitBombayMentors.map((mentor, index) => (
                <FacultyMentorCard key={index} mentor={mentor} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default IITBMentorsCard;
