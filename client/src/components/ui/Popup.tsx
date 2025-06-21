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
            <i className="text-2xl text-purple-400 ri-discord-fill mr-3"></i>
            <h2 className="text-xl font-bold">Stay Updated!</h2>
          </div>
          <p className="text-gray-300">
            Join our Discord server to get the latest news, announcements, and connect with other participants.
          </p>
          <a
            href="https://discord.gg/rbFhtagR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full px-4 py-2 mt-6 font-semibold text-center text-white transition-colors bg-purple-600 rounded-md hover:bg-purple-700"
          >
            Join Discord Server
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Popup;
