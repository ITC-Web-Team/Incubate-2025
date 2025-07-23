import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { FileText, Sparkles } from 'lucide-react';

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
          className="relative max-w-lg p-8 mx-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full transition-colors"
            aria-label="Close popup"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="text-center">
            {/* Icon */}
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 relative">
              <FileText className="w-10 h-10 text-white" />
              <Sparkles className="w-6 h-6 text-yellow-300 absolute -top-1 -right-1 animate-pulse" />
            </div>
            
            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Phase 1 Submissions
              </span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
            Now Open!
            </p>
            
            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Ready to showcase your innovative MedTech solution? Submit your Phase 1 proposal and take the first step towards revolutionizing healthcare technology.
            </p>
          </div>
          
          <div className="space-y-4">
            {/* Primary CTA */}
            <Link href="/submission" onClick={onClose}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 font-semibold text-center text-white transition-all bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
              >
                Submit Your Solution
              </motion.div>
            </Link>
            
            {/* Secondary CTA
            <Link href="/themes" onClick={onClose}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 font-medium text-center text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all"
              >
                📚 View Themes First
              </motion.div>
            </Link> */}
          </div>
          
          {/* Footer note */}
          <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
            <p className="text-sm text-yellow-800 dark:text-yellow-200 text-center">
              <strong>Tip:</strong> Make sure to review the themes and guidelines before submission!
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Popup;