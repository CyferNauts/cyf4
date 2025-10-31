import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Trophy, Brain, Palette, Cpu, Box, MessageCircle, Video, Pen, Camera } from 'lucide-react';

const Resources = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const resources = [
    { 
      id: 1, 
      title: 'Programming', 
      description: 'Master algorithms, data structures, and competitive coding', 
      gradient: 'from-[#7c3aed] via-[#a855f7] to-[#c084fc]',
      pattern: 'diagonal-lines',
      icon: Code,
      span: 'col-span-1 row-span-1'
    },
    { 
      id: 2, 
      title: 'Hackathon', 
      description: 'Win competitions with innovative solutions and teamwork', 
      gradient: 'from-[#0066FF] via-[#3b82f6] to-[#60a5fa]',
      pattern: 'dots',
      icon: Trophy,
      span: 'col-span-2 row-span-1'
    },
    { 
      id: 3, 
      title: 'Machine Learning', 
      description: 'Build intelligent systems with AI and deep learning', 
      gradient: 'from-[#c4f56e] via-[#d4ff8e] to-[#e4ffae]',
      pattern: 'grid',
      icon: Brain,
      span: 'col-span-1 row-span-1',
      darkText: true
    },
    { 
      id: 4, 
      title: 'UI/UX Design', 
      description: 'Create beautiful, intuitive user experiences', 
      gradient: 'from-[#0ea5e9] via-[#38bdf8] to-[#7dd3fc]',
      pattern: 'waves',
      icon: Palette,
      span: 'col-span-1 row-span-1'
    },
    { 
      id: 5, 
      title: 'Hardware', 
      description: 'Electronics, IoT, and embedded systems expertise', 
      gradient: 'from-[#06b6d4] via-[#22d3ee] to-[#67e8f9]',
      pattern: 'circles',
      icon: Cpu,
      span: 'col-span-1 row-span-1',
      darkText: true
    },
    { 
      id: 6, 
      title: '3D Modeling', 
      description: 'Design stunning 3D assets and visualizations', 
      gradient: 'from-[#1e40af] via-[#3b82f6] to-[#60a5fa]',
      pattern: 'hexagons',
      icon: Box,
      span: 'col-span-2 row-span-1'
    },
    { 
      id: 7, 
      title: 'Group Discussion', 
      description: 'Develop communication and leadership skills', 
      gradient: 'from-[#ec4899] via-[#f472b6] to-[#f9a8d4]',
      pattern: 'diagonal-lines',
      icon: MessageCircle,
      span: 'col-span-1 row-span-1'
    },
    { 
      id: 8, 
      title: 'Video Editing', 
      description: 'Master cinematic storytelling and post-production', 
      gradient: 'from-[#8b5cf6] via-[#a78bfa] to-[#c4b5fd]',
      pattern: 'dots',
      icon: Video,
      span: 'col-span-1 row-span-1'
    },
    { 
      id: 9, 
      title: 'Graphic Design', 
      description: 'Create impactful visuals and brand identities', 
      gradient: 'from-[#f59e0b] via-[#fbbf24] to-[#fcd34d]',
      pattern: 'waves',
      icon: Pen,
      span: 'col-span-1 row-span-1',
      darkText: true
    },
    { 
      id: 10, 
      title: 'Photography', 
      description: 'Capture moments with professional techniques', 
      gradient: 'from-[#c026d3] via-[#d946ef] to-[#e879f9]',
      pattern: 'circles',
      icon: Camera,
      span: 'col-span-1 row-span-1'
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

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

  const PatternOverlay = ({ pattern, darkText }) => {
    const patterns = {
      'diagonal-lines': (
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="20" y2="20" stroke={darkText ? "#000" : "#fff"} strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal)" />
        </svg>
      ),
      'dots': (
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="12" cy="12" r="2" fill={darkText ? "#000" : "#fff"}/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      ),
      'grid': (
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke={darkText ? "#000" : "#fff"} strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      ),
      'waves': (
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="waves" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 Q10 5 20 10 T40 10" fill="none" stroke={darkText ? "#000" : "#fff"} strokeWidth="1.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
      ),
      'circles': (
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="15" fill="none" stroke={darkText ? "#000" : "#fff"} strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circles)" />
        </svg>
      ),
      'hexagons': (
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="40" height="35" patternUnits="userSpaceOnUse">
              <path d="M20 0 L30 10 L30 25 L20 35 L10 25 L10 10 Z" fill="none" stroke={darkText ? "#000" : "#fff"} strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      )
    };
    return patterns[pattern] || null;
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
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

              <div className="space-y-6">
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
                    onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                    className="w-full px-5 py-4 bg-black border border-[#2a2a2a] rounded-xl text-white placeholder-[#4a4a4a] focus:outline-none focus:border-[#4a4a4a] transition-colors duration-200"
                    placeholder="Enter code"
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
                  onClick={handleSubmit}
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.01 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="w-full bg-white hover:bg-[#f5f5f5] disabled:bg-[#2a2a2a] disabled:text-[#6a6a6a] text-black font-medium py-4 px-4 rounded-xl transition-colors duration-200 focus:outline-none"
                >
                  {loading ? 'Verifying...' : 'Access Resources'}
                </motion.button>
              </div>

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
            className="min-h-screen bg-black"
          >
            {/* Header */}
            <div className="border-b border-[#1f1f1f]">
              <div className="max-w-[1400px] mx-auto px-6 py-6">
                <div className="flex justify-between items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1 className="text-2xl font-semibold text-white tracking-tight">Exclusive Resources</h1>
                    <p className="text-[#6a6a6a] text-xs mt-1">Premium content library</p>
                  </motion.div>
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={handleLogout}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#1a1a1a] hover:bg-[#252525] text-white border border-[#2a2a2a] font-medium py-2.5 px-5 rounded-lg transition-colors duration-200 text-sm"
                  >
                    Logout
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Vibrant Grid Layout */}
            <div className="max-w-[1400px] mx-auto px-6 py-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
                
                {resources.map((resource, index) => {
                  const Icon = resource.icon;
                  return (
                    <motion.a
                      key={resource.id}
                      href="#"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.05 * index }}
                      whileHover={{ 
                        y: -6,
                        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                      }}
                      whileTap={{ scale: 0.98 }}
                      className={`${resource.span} bg-gradient-to-br ${resource.gradient} rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 group relative`}
                      style={{ minHeight: '200px' }}
                    >
                      {/* Pattern Overlay */}
                      <PatternOverlay pattern={resource.pattern} darkText={resource.darkText} />
                      
                      {/* Hover Glow Effect */}
                      <motion.div 
                        className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"
                        initial={false}
                      />

                      {/* Content */}
                      <div className="relative h-full p-6 flex flex-col justify-between">
                        {/* Icon Badge */}
                        <motion.div 
                          className={`inline-flex items-center justify-center w-12 h-12 ${resource.darkText ? 'bg-black/10' : 'bg-white/10'} backdrop-blur-sm rounded-full self-start`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        >
                          <Icon className={`w-6 h-6 ${resource.darkText ? 'text-black/70' : 'text-white/90'}`} />
                        </motion.div>

                        {/* Text Content */}
                        <div>
                          <h3 className={`text-xl font-bold mb-2 ${resource.darkText ? 'text-black' : 'text-white'}`}>
                            {resource.title}
                          </h3>
                          <p className={`text-sm leading-relaxed mb-3 ${resource.darkText ? 'text-black/70' : 'text-white/80'}`}>
                            {resource.description}
                          </p>
                          
                          {/* Arrow Button */}
                          <motion.div 
                            className={`inline-flex items-center gap-2 ${resource.darkText ? 'text-black/80' : 'text-white/90'} text-sm font-medium`}
                            initial={{ x: 0 }}
                          >
                            <span>Explore</span>
                            <motion.div
                              animate={{ x: [0, 4, 0] }}
                              transition={{ 
                                duration: 1.5, 
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <ArrowRight className="w-5 h-5" />
                            </motion.div>
                          </motion.div>
                        </div>
                      </div>


                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        style={{ pointerEvents: 'none' }}
                      />
                    </motion.a>
                  );
                })}

              </div>

              {/* Footer Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12 text-center"
              >
                <p className="text-[#4a4a4a] text-xs">
                  Click any resource to access exclusive content and materials
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Resources;
