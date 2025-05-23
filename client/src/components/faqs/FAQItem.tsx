import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
  isActive: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isActive, onClick }: FAQItemProps) => {
  return (
    <motion.div 
      className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-lg overflow-hidden border border-blue-200 dark:border-blue-900 hover:shadow-glow relative scanner-line"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0.9, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Digital noise effect */}
      <div className="absolute inset-0 digital-noise"></div>
      
      <div className="relative z-10">
        <button 
          className="faq-toggle w-full flex items-center justify-between p-6 text-left font-semibold focus:outline-none dark:text-white"
          onClick={onClick}
          aria-expanded={isActive}
          aria-controls={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
        >
          <span className={`${isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600' : ''}`}>
            {question}
          </span>
          <motion.div 
            className={`w-6 h-6 flex items-center justify-center rounded-full ${isActive ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-200 dark:bg-gray-700'}`}
            animate={{ rotate: isActive ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke={isActive ? "white" : "currentColor"} 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </motion.div>
        </button>
        
        <AnimatePresence>
          {isActive && (
            <motion.div 
              id={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0 text-gray-600 dark:text-gray-300 border-t border-blue-100 dark:border-blue-900/30">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default FAQItem;
