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
                Phase 1 Submissions
              </span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">
            Now Open!
            </p>
            
            {/* Deadline Extension Notice */}
            <div className="my-3 p-2 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-500/50 rounded-lg flex items-center justify-center gap-2">
              <CalendarClock className="w-4 h-4 text-red-500 dark:text-red-400" />
              <p className="text-sm font-semibold text-red-700 dark:text-red-300">
                Deadline Extended: August 6th, 11:59 PM
              </p>
            </div>
            
            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
              Ready to showcase your innovative MedTech solution? Submit your Phase 1 proposal and take the first step towards revolutionizing healthcare technology.
            </p>
          </div>
          
          <div className="space-y-3">
            {/* Primary CTA */}
            <Link href="/submission" onClick={onClose}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 font-semibold text-center text-white transition-all bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
              >
                Submit Your Solution
              </motion.div>
            </Link>
          </div>
          
          {/* Footer note */}
          <div className="mt-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
            <p className="text-xs text-yellow-800 dark:text-yellow-200 text-center">
              <strong>Tip:</strong> Make sure to review the themes and guidelines before submission!
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Popup;