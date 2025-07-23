import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Lock, FileText } from 'lucide-react';
import { Link } from 'wouter';

interface SubmissionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubmissionPopup: React.FC<SubmissionPopupProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Popup Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-gray-200 dark:border-gray-700"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <X className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Submit Your Solution
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Choose your preferred submission method
              </p>
            </div>

            {/* Submission Options */}
            <div className="space-y-4">
              {/* Authenticated Submission */}
              <Link href="/submission" onClick={onClose}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-2 border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600 rounded-xl p-4 cursor-pointer transition-all group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Lock className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                        Secure Submission Portal
                      </h3>
                      <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                        Use your provided credentials to access the submission form securely
                      </p>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                        <span className="text-sm font-medium">Access Portal</span>
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* Alternative Method */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/20 dark:to-gray-700/20 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gray-400 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                      Alternative Submission
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Contact organizers for alternative submission methods
                    </p>
                    <div className="text-gray-500 text-sm">
                      Available upon request
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-6 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                💡 <strong>Tip:</strong> Use the secure portal if you have credentials, or the direct form for quick access
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SubmissionPopup;
