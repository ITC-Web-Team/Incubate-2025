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
            
            <h2 className="text-xl font-bold">Registrations Now Open!</h2>
          </div>
          <div className="mb-4">
            <p className="text-gray-300 mb-2">
               Ready to innovate in MedTech? Join INCUBATE 2025 - Where curiosity meets innovation!
            </p>
            {/* <div className="text-sm text-gray-400 space-y-1">
              <p>📅 <strong>Registration Deadline:</strong> Soon!</p>
              <p>💰 <strong>Prize Pool:</strong> ₹15,00,000+</p>
              <p>🏥 <strong>Focus:</strong> Healthcare Innovation</p>
            </div> */}
          </div>
          <a
            href="https://forms.gle/D66ghgRHrDEqv11p9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full px-4 py-2 mt-4 font-semibold text-center text-white transition-all bg-gradient-to-r from-blue-600 to-purple-600 rounded-md hover:from-blue-700 hover:to-purple-700 transform hover:scale-105"
          >
            Register Now!
          </a>
          <p className="text-xs text-gray-400 text-center mt-2">
            Secure your spot in India's premier MedTech hackathon
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Popup;
