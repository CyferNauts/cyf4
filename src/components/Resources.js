import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Resources = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const mockResources = [
    { id: 1, title: 'Advanced React Patterns', description: 'Learn advanced patterns for building scalable React applications.' },
    { id: 2, title: 'Node.js Best Practices', description: 'Comprehensive guide to writing efficient and secure Node.js code.' },
    { id: 3, title: 'Database Design Principles', description: 'Essential principles for designing robust database schemas.' },
    { id: 4, title: 'API Security Fundamentals', description: 'Protect your APIs with industry-standard security practices.' },
    { id: 5, title: 'Performance Optimization', description: 'Techniques to optimize web application performance.' },
    { id: 6, title: 'DevOps Essentials', description: 'Introduction to DevOps practices and tools.' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      if (code === 'demo123' || code === 'access') {
        setIsAuthenticated(true);
      } else {
        setError('Invalid access code');
      }
      setLoading(false);
    }, 800);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCode('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <AnimatePresence mode="wait">
        {!isAuthenticated ? (
          <motion.div
            key="auth"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="min-h-screen flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
              className="max-w-md w-full bg-[#141414] rounded-2xl shadow-2xl p-10 border border-[#1f1f1f]"
            >
              <div className="text-center mb-10">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <h2 className="text-3xl font-semibold text-white mb-3 tracking-tight">Access Required</h2>
                  <p className="text-[#878787] text-sm leading-relaxed">Enter your access code to view exclusive resources</p>
                </motion.div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <label htmlFor="code" className="block text-sm font-medium text-[#a3a3a3] mb-3">
                    Access Code
                  </label>
                  <input
                    type="password"
                    id="code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full px-5 py-4 bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl text-white placeholder-[#4a4a4a] focus:outline-none focus:border-[#4a4a4a] transition-colors duration-200"
                    placeholder="Enter code"
                    required
                  />
                </motion.div>

                <AnimatePresence mode="wait">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#ef4444] text-sm text-center overflow-hidden"
                    >
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.01 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="w-full bg-white hover:bg-[#f5f5f5] disabled:bg-[#2a2a2a] disabled:text-[#6a6a6a] text-black font-medium py-4 px-4 rounded-xl transition-colors duration-200 focus:outline-none"
                >
                  {loading ? 'Verifying...' : 'Access Resources'}
                </motion.button>
              </form>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xs text-[#5a5a5a] text-center mt-6"
              >
                Demo codes: <span className="text-[#7a7a7a]">demo123</span> or <span className="text-[#7a7a7a]">access</span>
              </motion.p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="resources"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="min-h-screen"
          >
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="flex flex-col md:flex-row md:justify-between md:items-center mb-16 gap-4"
              >
                <div>
                  <h1 className="text-4xl md:text-5xl font-semibold text-white mb-2 tracking-tight">Exclusive Resources</h1>
                  <p className="text-[#878787] text-sm">Premium content library</p>
                </div>
                <motion.button
                  onClick={handleLogout}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="bg-[#141414] hover:bg-[#1a1a1a] text-[#d1d1d1] border border-[#2a2a2a] font-medium py-3 px-6 rounded-xl transition-colors duration-200 focus:outline-none self-start md:self-auto"
                >
                  Logout
                </motion.button>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockResources.map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + index * 0.08,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    whileHover={{ y: -4 }}
                    className="bg-[#141414] rounded-2xl p-8 border border-[#1f1f1f] transition-shadow duration-300 hover:shadow-lg hover:shadow-black/20"
                  >
                    <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{resource.title}</h3>
                    <p className="text-[#878787] text-sm leading-relaxed mb-6">{resource.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      className="bg-white hover:bg-[#f5f5f5] text-black font-medium py-3 px-6 rounded-xl transition-colors duration-200 focus:outline-none text-sm"
                    >
                      View Resource
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Resources;