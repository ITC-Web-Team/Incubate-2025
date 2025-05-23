import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
  isActive: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isActive, onClick }: FAQItemProps) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
      <button 
        className="faq-toggle w-full flex items-center justify-between p-6 text-left font-semibold focus:outline-none dark:text-white"
        onClick={onClick}
        aria-expanded={isActive}
        aria-controls={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span>{question}</span>
        <motion.i 
          className="ri-arrow-down-s-line text-xl text-gray-600 dark:text-gray-400"
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        ></motion.i>
      </button>
      
      <AnimatePresence>
        {isActive && (
          <motion.div 
            id={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-700 overflow-hidden"
          >
            <div className="p-6 pt-0 text-gray-600 dark:text-gray-300">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;
