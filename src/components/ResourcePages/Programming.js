import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Code, BookOpen, ExternalLink, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programming = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <div className="border-b border-[#1f1f1f]">
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <div className="flex items-center gap-4">
            <Link to="/resources">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#252525] text-white border border-[#2a2a2a] font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Resources
              </motion.button>
            </Link>
            <div>
              <h1 className="text-2xl font-semibold text-white tracking-tight flex items-center gap-3">
                <Code className="w-6 h-6 text-[#7c3aed]" />
                Programming
              </h1>
              <p className="text-[#6a6a6a] text-xs mt-1">Master algorithms, data structures, and competitive coding</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#141414] rounded-2xl p-8 border border-[#1f1f1f]"
            >
              <h2 className="text-xl font-semibold mb-4 text-white">Overview</h2>
              <p className="text-[#a3a3a3] leading-relaxed mb-4">
                Programming is the foundation of computer science and software development. It involves writing code to solve problems,
                automate tasks, and build applications. Whether you're a beginner or an experienced developer, mastering programming
                fundamentals is essential for success in the tech industry.
              </p>
              <p className="text-[#a3a3a3] leading-relaxed">
                This resource covers everything from basic syntax to advanced algorithms, with practical examples and real-world applications.
              </p>
            </motion.section>

            {/* Key Concepts */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#141414] rounded-2xl p-8 border border-[#1f1f1f]"
            >
              <h2 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Key Concepts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Data Structures (Arrays, Linked Lists, Trees, Graphs)',
                  'Algorithms (Sorting, Searching, Dynamic Programming)',
                  'Object-Oriented Programming',
                  'Functional Programming',
                  'Time & Space Complexity Analysis',
                  'Problem-Solving Techniques',
                  'Debugging & Testing',
                  'Version Control (Git)'
                ].map((concept, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-center gap-3 p-3 bg-[#1a1a1a] rounded-lg"
                  >
                    <div className="w-2 h-2 bg-[#7c3aed] rounded-full"></div>
                    <span className="text-[#a3a3a3] text-sm">{concept}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Tips */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#141414] rounded-2xl p-8 border border-[#1f1f1f]"
            >
              <h2 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Tips & Best Practices
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#1a1a1a] rounded-lg">
                  <h3 className="font-medium text-white mb-2">Start Small</h3>
                  <p className="text-[#a3a3a3] text-sm">Begin with simple problems and gradually increase complexity. Focus on understanding fundamentals before moving to advanced topics.</p>
                </div>
                <div className="p-4 bg-[#1a1a1a] rounded-lg">
                  <h3 className="font-medium text-white mb-2">Practice Regularly</h3>
                  <p className="text-[#a3a3a3] text-sm">Consistent coding practice is key. Solve problems daily on platforms like LeetCode, HackerRank, or CodeChef.</p>
                </div>
                <div className="p-4 bg-[#1a1a1a] rounded-lg">
                  <h3 className="font-medium text-white mb-2">Learn Multiple Languages</h3>
                  <p className="text-[#a3a3a3] text-sm">Start with Python for beginners, then learn JavaScript, Java, or C++. Each language has unique strengths and use cases.</p>
                </div>
                <div className="p-4 bg-[#1a1a1a] rounded-lg">
                  <h3 className="font-medium text-white mb-2">Focus on Problem-Solving</h3>
                  <p className="text-[#a3a3a3] text-sm">Programming is about solving problems efficiently. Learn to break down complex problems into smaller, manageable parts.</p>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Resources */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#141414] rounded-2xl p-6 border border-[#1f1f1f]"
            >
              <h2 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Resources
              </h2>
              <div className="space-y-3">
                {[
                  { name: 'LeetCode', url: 'https://leetcode.com', desc: 'Practice coding problems' },
                  { name: 'freeCodeCamp', url: 'https://freecodecamp.org', desc: 'Free coding tutorials' },
                  { name: 'MDN Web Docs', url: 'https://developer.mozilla.org', desc: 'Web development docs' },
                  { name: 'GeeksforGeeks', url: 'https://geeksforgeeks.org', desc: 'CS fundamentals' },
                  { name: 'HackerRank', url: 'https://hackerrank.com', desc: 'Coding challenges' },
                  { name: 'Codecademy', url: 'https://codecademy.com', desc: 'Interactive learning' }
                ].map((resource, index) => (
                  <motion.a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ scale: 1.02 }}
                    className="block p-3 bg-[#1a1a1a] rounded-lg hover:bg-[#252525] transition-colors duration-200"
                  >
                    <div className="font-medium text-white text-sm">{resource.name}</div>
                    <div className="text-[#a3a3a3] text-xs">{resource.desc}</div>
                  </motion.a>
                ))}
              </div>
            </motion.section>

            {/* Quick Stats */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-[#7c3aed] via-[#a855f7] to-[#c084fc] rounded-2xl p-6 text-white"
            >
              <h2 className="text-lg font-semibold mb-4">Quick Stats</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm opacity-90">Difficulty Level</span>
                  <span className="font-medium">Beginner to Advanced</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm opacity-90">Time Commitment</span>
                  <span className="font-medium">Daily Practice</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm opacity-90">Prerequisites</span>
                  <span className="font-medium">None</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm opacity-90">Career Impact</span>
                  <span className="font-medium">High</span>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programming;
