import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-md p-6 mx-4 text-white bg-gray-800 border border-gray-700 rounded-lg shadow-xl"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
            aria-label="Close popup"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex items-center mb-4">
            
            <h2 className="text-xl font-bold">INCUBATE 2025 Updates</h2>
          </div>
          <div className="mb-6">
            <div className="bg-gray-700 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-green-400 mb-3">Registration Stats</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Total registrations:</span>
                  <span className="text-white font-bold">267</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <a
              href="https://forms.gle/D66ghgRHrDEqv11p9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full px-4 py-3 font-semibold text-center text-white transition-all bg-gradient-to-r from-blue-600 to-purple-600 rounded-md hover:from-blue-700 hover:to-purple-700 transform hover:scale-105"
            >
              To register click here
            </a>
            
          </div>
          
          <p className="text-xs text-gray-400 text-center mt-3">
            Don't miss out on India's premier MedTech hackathon!
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Popup;
