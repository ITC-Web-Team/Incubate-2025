import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Phone, Key, ExternalLink } from 'lucide-react';
import { validateCredentials, SUBMISSION_FORM_URL } from '@/data/authData';

// Tech particles background animation matching the homepage
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-blue-500 dark:bg-blue-400"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
    </div>
  );
};

const SubmissionAuthPage = () => {
  // Submissions are closed; no form logic needed

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 dark:from-gray-950 dark:via-blue-950 dark:to-gray-950 light:from-blue-50 light:via-blue-100 light:to-indigo-100 flex items-center justify-center px-4 py-8 relative overflow-hidden">
      <ParticleBackground />
      {/* Digital circuit lines matching homepage */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-10 dark:opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="#4f46e5" strokeWidth="0.2" />
          <path d="M0,50 L100,50" fill="none" stroke="#4f46e5" strokeWidth="0.2" />
          <path d="M50,0 L50,100" fill="none" stroke="#4f46e5" strokeWidth="0.2" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 dark:bg-white/5 light:bg-white/90 backdrop-blur-lg border border-white/20 dark:border-white/10 light:border-gray-200 rounded-xl p-6 sm:p-8 w-full max-w-md shadow-2xl relative z-10"
      >
        <div className="text-center mb-6 sm:mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </motion.div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white light:text-gray-900 mb-2">Submission Portal</h1>
          <p className="text-blue-200 dark:text-blue-300 light:text-gray-600 text-sm sm:text-base font-semibold">Submissions are now closed.</p>
        </div>
        <div className="mt-6 text-center">
          <p className="text-blue-300 dark:text-blue-400 light:text-gray-600 text-xs sm:text-sm">
            Thank you for your interest in Incubate. Stay tuned for updates!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SubmissionAuthPage;
