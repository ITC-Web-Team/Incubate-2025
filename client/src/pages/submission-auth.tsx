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
  const [code, setCode] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate inputs
    if (!code.trim() || !phone.trim()) {
      setError('Please fill in both fields');
      setLoading(false);
      return;
    }

    // Validate credentials
    if (validateCredentials(code.trim().toUpperCase(), phone.trim())) {
      // Redirect to Google Form
      window.open(SUBMISSION_FORM_URL, '_blank');
      setLoading(false);
    } else {
      setError('Invalid code or phone number. Please check your credentials.');
      setLoading(false);
    }
  };

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
          <p className="text-blue-200 dark:text-blue-300 light:text-gray-600 text-sm sm:text-base">Enter your credentials to access the submission form</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          {/* Phone Number Field - Now First */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-blue-200 dark:text-blue-300 light:text-gray-700 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 dark:text-blue-400 light:text-gray-400 w-5 h-5" />
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 dark:bg-white/5 light:bg-white border border-white/20 dark:border-white/20 light:border-gray-300 rounded-lg text-white light:text-gray-900 placeholder-blue-300 dark:placeholder-blue-400 light:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          {/* Access Code Field - Now Second */}
          <div>
            <label htmlFor="code" className="block text-sm font-medium text-blue-200 dark:text-blue-300 light:text-gray-700 mb-2">
              Access Code
            </label>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 dark:text-blue-400 light:text-gray-400 w-5 h-5" />
              <input
                type="text"
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 dark:bg-white/5 light:bg-white border border-white/20 dark:border-white/20 light:border-gray-300 rounded-lg text-white light:text-gray-900 placeholder-blue-300 dark:placeholder-blue-400 light:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter your access code"
                required
              />
            </div>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-red-500/20 border border-red-500/30 text-red-200 light:text-red-700 light:bg-red-100 light:border-red-300 px-4 py-3 rounded-lg text-sm"
            >
              {error}
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 light:from-blue-600 light:to-blue-700 light:hover:from-blue-700 light:hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 text-sm sm:text-base"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span>Access Submission Form</span>
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              </>
            )}
          </motion.button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-blue-300 dark:text-blue-400 light:text-gray-600 text-xs sm:text-sm">
            Don't have credentials? Contact the event organizers.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SubmissionAuthPage;
