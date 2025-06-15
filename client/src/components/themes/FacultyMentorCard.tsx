// client/src/components/themes/FacultyMentorCard.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FacultyMentor } from "@/data/facultyData";
import { RiArrowDownSLine, RiArrowUpSLine, RiMailLine, RiGlobalLine } from 'react-icons/ri';

interface FacultyMentorCardProps {
  mentor: FacultyMentor;
}

const FacultyMentorCard: React.FC<FacultyMentorCardProps> = ({ mentor }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <motion.div 
      layout
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
    >
      {/* Always Visible Header Part */}
      <div 
        className="flex flex-col md:flex-row items-start p-6 md:p-8 cursor-pointer" 
        onClick={toggleExpand}
      >
        <div className="flex-shrink-0 w-full md:w-auto md:mr-8 mb-4 md:mb-0 text-center md:text-left">
          <img 
            src={mentor.image} 
            alt={mentor.name} 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto md:mx-0 border-4 border-gray-200 dark:border-gray-700 shadow-md"
          />
        </div>
        <div className="flex-grow w-full md:w-auto">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{mentor.name}</h3>
              <p className="text-primary dark:text-blue-400 font-medium text-sm">{mentor.role}, {mentor.title}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{mentor.affiliation}</p>
            </div>
            <motion.div whileHover={{ scale: 1.1 }} className="ml-4 flex-shrink-0">
              {isExpanded ? 
                <RiArrowUpSLine className="text-3xl text-gray-500 dark:text-gray-300" /> : 
                <RiArrowDownSLine className="text-3xl text-gray-500 dark:text-gray-300" />}
            </motion.div>
          </div>
          {mentor.contact && (
            <a 
              href={`mailto:${mentor.contact}`}
              onClick={(e) => e.stopPropagation()} // Prevent card from toggling when clicking mail link
              className="inline-flex items-center mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline bg-blue-100 dark:bg-blue-900/50 px-3 py-1 rounded-md"
            >
              <RiMailLine className="mr-1.5" /> {mentor.contact}
            </a>
          )}
        </div>
      </div>

      {/* Collapsible Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.section
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="px-6 md:px-8 pb-6 md:pb-8 border-t border-gray-200 dark:border-gray-700 pt-4"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside content from re-toggling
          >
            {mentor.researchFocus && (
              <div className="mb-4">
                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-1">Research Focus</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{mentor.researchFocus}</p>
              </div>
            )}
            
            {mentor.researchArea && (
              <div className="mb-4">
                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-1">Research Area</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{mentor.researchArea}</p>
              </div>
            )}
            
            <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-1">Bio</h4>
            <div className="space-y-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
              {mentor.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {mentor.websiteUrl && (
              <a 
                href={mentor.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-white bg-primary hover:bg-primary-dark dark:bg-blue-600 dark:hover:bg-blue-700 px-4 py-2 rounded-md shadow-sm transition-colors"
              >
                <RiGlobalLine className="mr-1.5" /> Read More
              </a>
            )}
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FacultyMentorCard;
