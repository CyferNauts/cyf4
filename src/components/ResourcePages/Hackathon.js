import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Sun, Moon, ExternalLink, Copy, ChevronDown, ChevronUp,
  Trophy, Code, Palette, Users, Lightbulb, Rocket, Award, 
  BookOpen, Video, Wrench, MessageSquare, FileText, Clock,
  CheckCircle, TrendingUp, Zap, Github, Figma as FigmaIcon,
  Terminal, Layout, Database, Box, Globe, Sparkles
} from 'lucide-react';

const HackathonResourcePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const [expandedSections, setExpandedSections] = useState({});
  const [copiedUrl, setCopiedUrl] = useState('');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(''), 2000);
  };

  const resources = {
    platforms: {
      title: "Hackathon Platforms",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      items: [
        { name: "Devpost", url: "https://devpost.com", desc: "Find hackathons worldwide & submit projects", tags: ["discovery", "submission"] },
        { name: "Major League Hacking (MLH)", url: "https://mlh.io", desc: "Official student hackathon events & seasons", tags: ["student", "community"] },
        { name: "Hackathon.com", url: "https://www.hackathon.com", desc: "Global hackathon directory & resources", tags: ["discovery", "global"] },
        { name: "AngelHack", url: "https://angelhack.com", desc: "International hackathons with startup focus", tags: ["startup", "global"] },
        { name: "HackerEarth", url: "https://www.hackerearth.com/hackathon", desc: "Technical hackathons with coding challenges", tags: ["technical", "enterprise"] },
        { name: "Hack Club", url: "https://hackclub.com", desc: "Student-led hackathon community", tags: ["student", "community"] },
        { name: "All Hackathons", url: "https://reskilll.com/allhacks", desc: "Comprehensive listing of upcoming hackathons", tags: ["discovery", "calendar"] },
        { name: "Eventornado", url: "https://eventornado.com", desc: "Virtual & hybrid hackathon platform", tags: ["platform", "virtual"] }
      ]
    },
    learning: {
      title: "Learning Resources",
      icon: BookOpen,
      color: "from-purple-500 to-pink-500",
      items: [
        { name: "freeCodeCamp", url: "https://www.freecodecamp.org", desc: "Comprehensive coding bootcamp - totally free", tags: ["coding", "beginner"] },
        { name: "The Odin Project", url: "https://www.theodinproject.com", desc: "Full-stack web development curriculum", tags: ["fullstack", "beginner"] },
        { name: "W3Schools", url: "https://www.w3schools.com", desc: "Web development tutorials & references", tags: ["web", "reference"] },
        { name: "Google AI Hub", url: "https://ai.google/education", desc: "Machine learning & AI education resources", tags: ["ai", "ml"] },
        { name: "Hugging Face", url: "https://huggingface.co", desc: "AI/ML models, datasets & community", tags: ["ai", "ml", "models"] },
        { name: "GitHub Explore", url: "https://github.com/explore", desc: "Discover open source projects & contribute", tags: ["opensource", "git"] },
        { name: "Placement Preparation", url: "https://www.placementpreparation.io", desc: "Technical interview & hackathon prep", tags: ["interview", "practice"] }
      ]
    },
    development: {
      title: "Development Tools",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      items: [
        { name: "Replit", url: "https://replit.com", desc: "Browser-based IDE with instant deployment", tags: ["ide", "cloud"] },
        { name: "CodeSandbox", url: "https://codesandbox.io", desc: "Online code editor for rapid prototyping", tags: ["ide", "prototyping"] },
        { name: "GitHub Copilot", url: "https://github.com/features/copilot", desc: "AI-powered code completion assistant", tags: ["ai", "coding"] },
        { name: "Glitch", url: "https://glitch.com", desc: "Build & deploy full-stack web apps instantly", tags: ["deployment", "fullstack"] },
        { name: "AWS Cloud9", url: "https://aws.amazon.com/cloud9", desc: "Cloud-based IDE with AWS integration", tags: ["ide", "cloud", "aws"] },
        { name: "VS Code", url: "https://code.visualstudio.com", desc: "Powerful local code editor with extensions", tags: ["ide", "local"] },
        { name: "Postman", url: "https://www.postman.com", desc: "API development & testing platform", tags: ["api", "testing"] },
        { name: "Vercel", url: "https://vercel.com", desc: "Deploy frontend apps in seconds", tags: ["deployment", "frontend"] },
        { name: "Railway", url: "https://railway.app", desc: "Deploy backend services with ease", tags: ["deployment", "backend"] },
        { name: "Supabase", url: "https://supabase.com", desc: "Open source Firebase alternative", tags: ["database", "backend"] }
      ]
    },
    design: {
      title: "Design & UI/UX",
      icon: Palette,
      color: "from-orange-500 to-red-500",
      items: [
        { name: "Figma", url: "https://figma.com", desc: "Collaborative interface design tool", tags: ["design", "ui"] },
        { name: "Canva", url: "https://canva.com", desc: "Graphic design & presentation maker", tags: ["graphics", "presentation"] },
        { name: "Dribbble", url: "https://dribbble.com", desc: "Design inspiration & showcase platform", tags: ["inspiration", "community"] },
        { name: "UI8", url: "https://ui8.net", desc: "Premium UI kits & design resources", tags: ["assets", "templates"] },
        { name: "Freepik", url: "https://freepik.com", desc: "Free vectors, photos & illustrations", tags: ["assets", "free"] },
        { name: "Coolors", url: "https://coolors.co", desc: "Color palette generator & explorer", tags: ["colors", "palette"] },
        { name: "Icons8", url: "https://icons8.com", desc: "Icons, illustrations & design assets", tags: ["icons", "assets"] },
        { name: "Excalidraw", url: "https://excalidraw.com", desc: "Hand-drawn style diagrams & wireframes", tags: ["diagrams", "wireframes"] },
        { name: "Lunacy", url: "https://icons8.com/lunacy", desc: "Free native design tool for Windows/Mac", tags: ["design", "free"] }
      ]
    },
    collaboration: {
      title: "Collaboration Tools",
      icon: Users,
      color: "from-cyan-500 to-blue-500",
      items: [
        { name: "Notion", url: "https://notion.so", desc: "All-in-one workspace for notes & docs", tags: ["documentation", "workspace"] },
        { name: "Discord", url: "https://discord.com", desc: "Voice, video & text communication", tags: ["communication", "community"] },
        { name: "Slack", url: "https://slack.com", desc: "Professional team messaging platform", tags: ["communication", "enterprise"] },
        { name: "Trello", url: "https://trello.com", desc: "Kanban-style project management", tags: ["project", "kanban"] },
        { name: "Miro", url: "https://miro.com", desc: "Online collaborative whiteboard", tags: ["whiteboard", "collaboration"] },
        { name: "GitHub", url: "https://github.com", desc: "Version control & code collaboration", tags: ["git", "code"] },
        { name: "Google Meet", url: "https://meet.google.com", desc: "Video conferencing for teams", tags: ["video", "meeting"] },
        { name: "Airtable", url: "https://airtable.com", desc: "Spreadsheet-database hybrid tool", tags: ["database", "organization"] },
        { name: "HackMD", url: "https://hackmd.io", desc: "Collaborative markdown documentation", tags: ["documentation", "markdown"] }
      ]
    },
    presentation: {
      title: "Presentation Tools",
      icon: Award,
      color: "from-yellow-500 to-orange-500",
      items: [
        { name: "Pitch", url: "https://pitch.com", desc: "Beautiful collaborative presentations", tags: ["presentation", "collaboration"] },
        { name: "Beautiful.ai", url: "https://beautiful.ai", desc: "AI-powered presentation design", tags: ["presentation", "ai"] },
        { name: "Tome", url: "https://tome.app", desc: "AI storytelling & presentation tool", tags: ["presentation", "ai", "storytelling"] },
        { name: "Canva Presentations", url: "https://canva.com/presentations", desc: "Design stunning pitch decks", tags: ["presentation", "design"] },
        { name: "Gamma", url: "https://gamma.app", desc: "New medium for presenting ideas", tags: ["presentation", "modern"] },
        { name: "Loom", url: "https://loom.com", desc: "Quick video demos & screen recording", tags: ["video", "demo"] }
      ]
    },
    inspiration: {
      title: "Idea & Inspiration",
      icon: Lightbulb,
      color: "from-pink-500 to-rose-500",
      items: [
        { name: "Product Hunt", url: "https://producthunt.com", desc: "Discover new tech products daily", tags: ["products", "inspiration"] },
        { name: "FutureTools", url: "https://futuretools.io", desc: "Comprehensive AI tools directory", tags: ["ai", "tools"] },
        { name: "There's An AI For That", url: "https://theresanaiforthat.com", desc: "AI tool database & discovery", tags: ["ai", "directory"] },
        { name: "Devpost Projects", url: "https://devpost.com/software", desc: "Winning hackathon projects showcase", tags: ["showcase", "winners"] },
        { name: "Indie Hackers", url: "https://indiehackers.com", desc: "Learn from successful founders", tags: ["startup", "community"] },
        { name: "Hacker News", url: "https://news.ycombinator.com", desc: "Tech news & startup discussions", tags: ["news", "tech"] }
      ]
    },
    video: {
      title: "Video Tutorials",
      icon: Video,
      color: "from-red-500 to-pink-500",
      items: [
        { name: "freeCodeCamp YouTube", url: "https://youtube.com/c/freecodecamp", desc: "Full coding courses & tutorials", tags: ["youtube", "coding"] },
        { name: "Traversy Media", url: "https://youtube.com/c/TraversyMedia", desc: "Web development crash courses", tags: ["youtube", "web"] },
        { name: "Fireship", url: "https://youtube.com/c/Fireship", desc: "Fast-paced tech tutorials in 100 seconds", tags: ["youtube", "quick"] },
        { name: "The Futur", url: "https://youtube.com/c/thefutur", desc: "Design, business & creative strategy", tags: ["youtube", "design", "business"] },
        { name: "Web Dev Simplified", url: "https://youtube.com/c/WebDevSimplified", desc: "Clear web development explanations", tags: ["youtube", "web"] },
        { name: "DesignCourse", url: "https://youtube.com/c/DesignCourse", desc: "UI/UX design tutorials & tips", tags: ["youtube", "design"] },
        { name: "Dev Ed", url: "https://youtube.com/c/DevEd", desc: "Creative coding & design tutorials", tags: ["youtube", "creative"] },
        { name: "Slidebean - Pitch Guide", url: "https://youtube.com/watch?v=Hla1jzhan78", desc: "How to pitch in 3 minutes", tags: ["youtube", "pitching"] },
        { name: "Y Combinator - Demo Tips", url: "https://youtube.com/watch?v=EjK1c2x3rU4", desc: "Startup demo day best practices", tags: ["youtube", "pitching", "startup"] }
      ]
    },
    utilities: {
      title: "Utilities & Productivity",
      icon: Wrench,
      color: "from-indigo-500 to-purple-500",
      items: [
        { name: "Zapier", url: "https://zapier.com", desc: "Automate workflows between apps", tags: ["automation", "productivity"] },
        { name: "Clockify", url: "https://clockify.me", desc: "Free time tracking for teams", tags: ["time", "productivity"] },
        { name: "Pomofocus", url: "https://pomofocus.io", desc: "Pomodoro timer for focus sessions", tags: ["time", "focus"] },
        { name: "Readme.so", url: "https://readme.so", desc: "Simple README markdown editor", tags: ["documentation", "markdown"] },
        { name: "Read.cv", url: "https://read.cv", desc: "Beautiful developer portfolios", tags: ["portfolio", "developers"] },
        { name: "Carbon", url: "https://carbon.now.sh", desc: "Create beautiful code screenshots", tags: ["code", "screenshots"] },
        { name: "Responsively", url: "https://responsively.app", desc: "Test responsive designs simultaneously", tags: ["testing", "responsive"] }
      ]
    }
  };

  const tips = [
    {
      category: "Pre-Hackathon",
      icon: Clock,
      tips: [
        "Research the theme and problem statements thoroughly before the event",
        "Set up your development environment and test all tools beforehand",
        "Join hackathon Discord communities to find teammates early",
        "Create reusable templates and boilerplates to save time",
        "Practice your elevator pitch and presentation skills"
      ]
    },
    {
      category: "Team Formation",
      icon: Users,
      tips: [
        "Build a balanced team: developer, designer, presenter, strategist",
        "Choose teammates with complementary skills, not duplicates",
        "Establish clear roles and responsibilities from the start",
        "Set up communication channels and project management tools",
        "Have a backup plan if team members drop out"
      ]
    },
    {
      category: "During Hackathon",
      icon: Rocket,
      tips: [
        "Spend first 2-3 hours brainstorming and planning, not coding",
        "Build a working MVP first, then add features if time permits",
        "Commit code frequently and use version control properly",
        "Take short breaks every 2 hours to avoid burnout",
        "Keep judges informed of your progress through updates"
      ]
    },
    {
      category: "Technical Strategy",
      icon: Code,
      tips: [
        "Use frameworks and libraries you already know well",
        "Leverage APIs and existing services instead of building from scratch",
        "Focus on frontend polish - first impressions matter to judges",
        "Deploy early and often to catch deployment issues",
        "Have a backup demo video in case of technical difficulties"
      ]
    },
    {
      category: "Presentation",
      icon: Award,
      tips: [
        "Structure: Problem → Solution → Demo → Impact → Tech Stack",
        "Practice your pitch multiple times before the final presentation",
        "Keep slides minimal - 5-7 slides maximum for a 3-minute pitch",
        "Show a working demo, not just screenshots or mockups",
        "Prepare for Q&A by anticipating technical and business questions"
      ]
    },
    {
      category: "Winning Mindset",
      icon: Trophy,
      tips: [
        "Focus on solving a real problem, not building cool tech",
        "Make your solution scalable and practical for real-world use",
        "Highlight social impact or business viability in your pitch",
        "Network with mentors, sponsors, and other participants",
        "Winning isn't everything - focus on learning and connections"
      ]
    }
  ];

  const commonThemes = [
    { name: "AI/ML & Data Science", icon: Sparkles, desc: "Predictive tools, automation, generative AI" },
    { name: "Web & App Development", icon: Layout, desc: "SaaS platforms, productivity tools, web apps" },
    { name: "Sustainability & Environment", icon: Globe, desc: "Climate tech, green solutions, eco-innovation" },
    { name: "HealthTech", icon: CheckCircle, desc: "Smart diagnostics, wellness apps, medical AI" },
    { name: "EdTech", icon: BookOpen, desc: "Learning platforms, classroom tools, accessibility" },
    { name: "FinTech", icon: TrendingUp, desc: "Payments, finance tracking, blockchain & crypto" }
  ];

  const filteredResources = Object.entries(resources).reduce((acc, [key, section]) => {
    if (searchQuery.trim() === '') {
      acc[key] = section;
      return acc;
    }
    
    const query = searchQuery.toLowerCase();
    const filteredItems = section.items.filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query) ||
      item.tags.some(tag => tag.toLowerCase().includes(query))
    );
    
    if (filteredItems.length > 0) {
      acc[key] = { ...section, items: filteredItems };
    }
    
    return acc;
  }, {});

  const filteredTips = tips.filter(section =>
    searchQuery.trim() === '' ||
    section.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.tips.some(tip => tip.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#0a0a0a]' : 'bg-gray-50'}`}>
      {/* Fixed Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 border-b backdrop-blur-xl ${
          darkMode 
            ? 'bg-black/80 border-[#1a1a1a]' 
            : 'bg-white/80 border-gray-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl"
              >
                <Trophy className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Hackathon Resource Hub
                </h1>
                <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                  Everything you need to win hackathons
                </p>
              </div>
            </div>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 rounded-xl transition-colors ${
                darkMode 
                  ? 'bg-[#1a1a1a] hover:bg-[#252525] text-yellow-400' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
          </div>

          {/* Search Bar */}
          <div className="mt-4 relative">
            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
              darkMode ? 'text-gray-500' : 'text-gray-400'
            }`} />
            <input
              type="text"
              placeholder="Search resources, tools, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-12 pr-4 py-3 rounded-xl border transition-colors outline-none ${
                darkMode 
                  ? 'bg-[#141414] border-[#2a2a2a] text-white placeholder-gray-600 focus:border-blue-500' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500'
              }`}
            />
          </div>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Common Themes Section */}
        {searchQuery.trim() === '' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Popular Hackathon Themes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {commonThemes.map((theme, index) => (
                <motion.div
                  key={theme.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`p-5 rounded-xl border transition-all ${
                    darkMode 
                      ? 'bg-[#141414] border-[#2a2a2a] hover:border-[#3a3a3a]' 
                      : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${
                      darkMode ? 'bg-[#1a1a1a]' : 'bg-gray-100'
                    }`}>
                      <theme.icon className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {theme.name}
                      </h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                        {theme.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Resource Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            {Object.entries(filteredResources).map(([key, section], sectionIndex) => {
              const Icon = section.icon;
              const isExpanded = expandedSections[key] !== false;
              
              return (
                <motion.section
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: sectionIndex * 0.1 }}
                  className={`rounded-2xl border overflow-hidden ${
                    darkMode 
                      ? 'bg-[#141414] border-[#2a2a2a]' 
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <button
                    onClick={() => toggleSection(key)}
                    className={`w-full p-6 flex items-center justify-between transition-colors ${
                      darkMode ? 'hover:bg-[#1a1a1a]' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl bg-gradient-to-br ${section.color}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-left">
                        <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {section.title}
                        </h2>
                        <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                          {section.items.length} resources
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className={`w-5 h-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 gap-3">
                          {section.items.map((item, index) => (
                            <motion.div
                              key={item.url}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.03 }}
                              whileHover={{ scale: 1.02 }}
                              className={`group relative p-4 rounded-xl border transition-all ${
                                darkMode 
                                  ? 'bg-[#1a1a1a] border-[#2a2a2a] hover:border-[#3a3a3a]' 
                                  : 'bg-gray-50 border-gray-200 hover:border-gray-300 hover:shadow-sm'
                              }`}
                            >
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <a
                                  href={item.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`font-semibold transition-colors flex items-center gap-2 ${
                                    darkMode 
                                      ? 'text-white hover:text-blue-400' 
                                      : 'text-gray-900 hover:text-blue-600'
                                  }`}
                                >
                                  {item.name}
                                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => copyToClipboard(item.url)}
                                  className={`p-1 rounded transition-colors ${
                                    darkMode 
                                      ? 'hover:bg-[#252525]' 
                                      : 'hover:bg-gray-200'
                                  }`}
                                  title="Copy URL"
                                >
                                  {copiedUrl === item.url ? (
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                  ) : (
                                    <Copy className={`w-4 h-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                                  )}
                                </motion.button>
                              </div>
                              <p className={`text-sm mb-3 ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                                {item.desc}
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {item.tags.map(tag => (
                                  <span
                                    key={tag}
                                    className={`text-xs px-2 py-1 rounded-md ${
                                      darkMode 
                                        ? 'bg-[#252525] text-gray-400' 
                                        : 'bg-gray-200 text-gray-600'
                                    }`}
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.section>
              );
            })}
          </div>

          {/* Sidebar - Tips & Strategies */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`rounded-2xl border p-6 sticky top-24 ${
                darkMode 
                  ? 'bg-[#141414] border-[#2a2a2a]' 
                  : 'bg-white border-gray-200'
              }`}
            >
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-yellow-500" />
                <h2 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Pro Tips & Strategies
                </h2>
              </div>

              <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-2 custom-scrollbar">
                {filteredTips.map((section, index) => {
                  const Icon = section.icon;
                  const isExpanded = expandedSections[`tip-${index}`] !== false;
                  
                  return (
                    <div key={section.category}>
                      <button
                        onClick={() => toggleSection(`tip-${index}`)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                          darkMode 
                            ? 'bg-[#1a1a1a] hover:bg-[#252525]' 
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-blue-500" />
                          <span className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {section.category}
                          </span>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className={`w-4 h-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-2 space-y-2 overflow-hidden"
                          >
                            {section.tips.map((tip, tipIndex) => (
                              <motion.li
                                key={tipIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: tipIndex * 0.02 }}
                                className={`flex gap-2 text-sm p-2 rounded ${
                                  darkMode 
                                    ? 'text-gray-400 hover:bg-[#1a1a1a]' 
                                    : 'text-gray-600 hover:bg-gray-50'
                                }`}
                              >
                                <span className="text-blue-500 mt-1">•</span>
                                <span>{tip}</span>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* No Results Message */}
        {Object.keys(filteredResources).length === 0 && filteredTips.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-center py-16 rounded-2xl border ${
              darkMode 
                ? 'bg-[#141414] border-[#2a2a2a]' 
                : 'bg-white border-gray-200'
            }`}
          >
            <Search className={`w-12 h-12 mx-auto mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
            <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              No results found
            </h3>
            <p className={`${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              Try different keywords or clear your search
            </p>
          </motion.div>
        )}
      </main>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: ${darkMode ? '#1a1a1a' : '#f1f1f1'};
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: ${darkMode ? '#3a3a3a' : '#c1c1c1'};
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: ${darkMode ? '#4a4a4a' : '#a1a1a1'};
        }
      `}</style>
    </div>
  );
};

export default HackathonResourcePage;
