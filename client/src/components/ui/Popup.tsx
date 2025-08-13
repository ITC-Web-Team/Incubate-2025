import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { FileText, Sparkles, CalendarClock } from 'lucide-react';

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-md p-6 mx-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full transition-colors"
            aria-label="Close popup"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="text-center">
            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 relative">
              <FileText className="w-8 h-8 text-white" />
              <Sparkles className="w-5 h-5 text-yellow-300 absolute -top-1 -right-1 animate-pulse" />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Incubate 2025
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
              Thank you for your interest in the Incubate Hackathon.<br/>
              Registration is now closed.<br/>
              Stay tuned for updates and announcements!
            </p>
            <div className="mt-2 flex justify-center">
              <span className="text-xs font-semibold text-yellow-700 bg-yellow-100 dark:text-yellow-200 dark:bg-yellow-900/40 rounded px-2 py-0.5 shadow-sm" style={{letterSpacing:'0.5px'}}>
                Registration Closed
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Popup;