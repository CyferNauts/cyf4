import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Moon, Sun, ExternalLink, Copy, ChevronDown, ChevronRight,
  Layout, Eye, MousePointer, Users, Smartphone, Monitor, Layers,
  Target, Zap, BookOpen, Video, Download, Star, TrendingUp,
  Menu, X, Filter, Globe, Box, Palette, Code, FileText,
  Lightbulb, TestTube, BarChart, MessageSquare, Grid, Figma
} from 'lucide-react';

const UIUXResourceHub = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedSections, setExpandedSections] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState('');

  // Comprehensive UI/UX resource database
  const resources = {
    designTools: {
      title: 'Design & Prototyping Tools',
      icon: Figma,
      color: '#3b82f6',
      sections: [
        {
          name: 'Collaborative Design Platforms',
          resources: [
            {
              name: 'Figma',
              url: 'https://www.figma.com',
              type: 'tool',
              description: 'Industry-leading collaborative design with real-time editing, Dev Mode, and FigJam whiteboarding - Free tier + $12/month Pro'
            },
            {
              name: 'Sketch',
              url: 'https://www.sketch.com',
              type: 'tool',
              description: 'macOS vector editor with symbols, plugins, and shared libraries - $99/year with extensive plugin ecosystem'
            },
            {
              name: 'Adobe XD',
              url: 'https://www.adobe.com/products/xd.html',
              type: 'tool',
              description: 'Rapid prototyping with voice triggers, auto-animate, and design system management - Part of Creative Cloud'
            },
            {
              name: 'Framer',
              url: 'https://www.framer.com',
              type: 'tool',
              description: 'React-based interactive design with code components and production-ready websites'
            },
            {
              name: 'InVision',
              url: 'https://www.invisionapp.com',
              type: 'tool',
              description: 'Prototyping platform with Freehand whiteboarding and design handoff workflows'
            },
            {
              name: 'Penpot',
              url: 'https://penpot.app',
              type: 'tool',
              description: 'Free open-source Figma alternative using SVG native format with self-hosting options'
            }
          ]
        },
        {
          name: 'Wireframing & Lo-Fi Tools',
          resources: [
            {
              name: 'Balsamiq',
              url: 'https://balsamiq.com',
              type: 'tool',
              description: 'Low-fidelity wireframing for early-stage idea validation with hand-drawn aesthetic'
            },
            {
              name: 'Whimsical',
              url: 'https://whimsical.com',
              type: 'tool',
              description: 'Fast wireframes, flowcharts, and mind maps with real-time collaboration'
            },
            {
              name: 'Excalidraw',
              url: 'https://excalidraw.com',
              type: 'tool',
              description: 'Free hand-drawn style diagramming perfect for quick sketches and concepts'
            },
            {
              name: 'Miro',
              url: 'https://miro.com',
              type: 'tool',
              description: 'Unlimited whiteboarding for design thinking workshops and user journey mapping'
            }
          ]
        },
        {
          name: 'Advanced Prototyping',
          resources: [
            {
              name: 'UXPin',
              url: 'https://www.uxpin.com',
              type: 'tool',
              description: 'Code-based prototypes with realistic interactions and developer-ready workflows'
            },
            {
              name: 'ProtoPie',
              url: 'https://www.protopie.io',
              type: 'tool',
              description: 'High-fidelity prototypes with sensors, Arduino integration, and complex micro-interactions'
            },
            {
              name: 'Principle',
              url: 'https://principleformac.com',
              type: 'tool',
              description: 'Animation and interaction design for macOS with timeline-based workflows'
            },
            {
              name: 'Origami Studio',
              url: 'https://origami.design',
              type: 'tool',
              description: 'Facebook\'s prototyping tool with patch-based programming for mobile interactions'
            }
          ]
        },
        {
          name: 'AI-Powered Design Tools',
          resources: [
            {
              name: 'UXPilot AI',
              url: 'https://uxpilot.ai',
              type: 'tool',
              description: 'AI-generated wireframes, UI flows, and early research insights from prompts'
            },
            {
              name: 'Visily',
              url: 'https://www.visily.ai',
              type: 'tool',
              description: 'AI wireframes and prototypes for teams without dedicated designers'
            },
            {
              name: 'Magician for Figma',
              url: 'https://magician.design',
              type: 'tool',
              description: 'AI plugin generating UI designs, copy, illustrations, and icons inside Figma'
            },
            {
              name: 'Galileo AI',
              url: 'https://www.usegalileo.ai',
              type: 'tool',
              description: 'Text-to-design generating editable UI from natural language descriptions'
            }
          ]
        }
      ]
    },
    research: {
      title: 'UX Research & Testing',
      icon: TestTube,
      color: '#10b981',
      sections: [
        {
          name: 'User Testing Platforms',
          resources: [
            {
              name: 'Maze',
              url: 'https://maze.co',
              type: 'tool',
              description: 'Rapid prototype testing, usability tests, tree testing, and surveys with AI analysis'
            },
            {
              name: 'UserTesting',
              url: 'https://www.usertesting.com',
              type: 'tool',
              description: 'On-demand user feedback with video recordings and participant recruitment'
            },
            {
              name: 'Lookback',
              url: 'https://lookback.com',
              type: 'tool',
              description: 'Live user interviews and moderated usability testing with session recording'
            },
            {
              name: 'UXtweak',
              url: 'https://www.uxtweak.com',
              type: 'tool',
              description: 'Tree testing, card sorting, preference testing, and usability benchmarking suite'
            },
            {
              name: 'Optimal Workshop',
              url: 'https://www.optimalworkshop.com',
              type: 'tool',
              description: 'Information architecture tools - card sorting, tree testing, and first-click testing'
            }
          ]
        },
        {
          name: 'Feedback & Survey Tools',
          resources: [
            {
              name: 'Qualaroo',
              url: 'https://qualaroo.com',
              type: 'tool',
              description: 'Contextual in-product feedback with AI analysis and targeted survey nudges'
            },
            {
              name: 'Hotjar',
              url: 'https://www.hotjar.com',
              type: 'tool',
              description: 'Heatmaps, session recordings, and user feedback surveys for behavior analytics'
            },
            {
              name: 'Typeform',
              url: 'https://www.typeform.com',
              type: 'tool',
              description: 'Beautiful conversational surveys with logic jumps and custom branding'
            },
            {
              name: 'SurveyMonkey',
              url: 'https://www.surveymonkey.com',
              type: 'tool',
              description: 'Professional survey platform with audience panel and advanced analytics'
            }
          ]
        },
        {
          name: 'Analytics & Behavior Tracking',
          resources: [
            {
              name: 'Mixpanel',
              url: 'https://mixpanel.com',
              type: 'tool',
              description: 'Product analytics tracking user engagement, retention, and conversion funnels'
            },
            {
              name: 'Amplitude',
              url: 'https://amplitude.com',
              type: 'tool',
              description: 'Digital analytics with behavioral cohorts and predictive insights'
            },
            {
              name: 'FullStory',
              url: 'https://www.fullstory.com',
              type: 'tool',
              description: 'Session replay with frustration signals and automatic event tracking'
            },
            {
              name: 'Microsoft Clarity',
              url: 'https://clarity.microsoft.com',
              type: 'tool',
              description: 'Free heatmaps and session recordings with rage click detection'
            }
          ]
        },
        {
          name: 'Research Methods & Guides',
          resources: [
            {
              name: 'Maze UX Research Methods Guide',
              url: 'https://maze.co/guides/ux-research/methods',
              type: 'resource',
              description: '11 essential UX research techniques: interviews, testing, card sorting, and A/B testing'
            },
            {
              name: 'NN/g Research Methods',
              url: 'https://www.nngroup.com/articles/which-ux-research-methods',
              type: 'resource',
              description: 'Nielsen Norman Group\'s comprehensive guide to choosing research methods'
            },
            {
              name: 'User Interviews',
              url: 'https://www.userinterviews.com',
              type: 'tool',
              description: 'Recruit high-quality research participants from vetted panel of 2M+ users'
            },
            {
              name: 'dscout',
              url: 'https://dscout.com',
              type: 'tool',
              description: 'Deep qualitative diary studies and video feedback for longitudinal research'
            }
          ]
        }
      ]
    },
    designSystems: {
      title: 'Design Systems & Component Libraries',
      icon: Grid,
      color: '#8b5cf6',
      sections: [
        {
          name: 'Major Design Systems',
          resources: [
            {
              name: 'Material Design',
              url: 'https://material.io',
              type: 'resource',
              description: 'Google\'s comprehensive open-source design system with Material 3 components'
            },
            {
              name: 'Apple Human Interface Guidelines',
              url: 'https://developer.apple.com/design',
              type: 'resource',
              description: 'Official iOS, iPadOS, macOS, watchOS design principles and patterns'
            },
            {
              name: 'Fluent Design System',
              url: 'https://www.microsoft.com/design/fluent',
              type: 'resource',
              description: 'Microsoft\'s cross-platform design language for Windows and web'
            },
            {
              name: 'Carbon Design System',
              url: 'https://carbondesignsystem.com',
              type: 'resource',
              description: 'IBM\'s open-source design system with React, Vue, Angular components'
            },
            {
              name: 'Atlassian Design System',
              url: 'https://atlassian.design',
              type: 'resource',
              description: 'Comprehensive system powering Jira, Confluence, and Trello products'
            },
            {
              name: 'Shopify Polaris',
              url: 'https://polaris.shopify.com',
              type: 'resource',
              description: 'E-commerce focused design system with merchant admin patterns'
            }
          ]
        },
        {
          name: 'UI Component Libraries',
          resources: [
            {
              name: 'Ant Design',
              url: 'https://ant.design',
              type: 'resource',
              description: 'Enterprise-grade React UI library with 50+ components and dark mode'
            },
            {
              name: 'Chakra UI',
              url: 'https://chakra-ui.com',
              type: 'resource',
              description: 'Accessible React components with built-in dark mode and theming'
            },
            {
              name: 'shadcn/ui',
              url: 'https://ui.shadcn.com',
              type: 'resource',
              description: 'Beautifully designed React components built with Radix UI and Tailwind'
            },
            {
              name: 'MUI (Material-UI)',
              url: 'https://mui.com',
              type: 'resource',
              description: 'React components implementing Google Material Design with customization'
            },
            {
              name: 'Radix UI',
              url: 'https://www.radix-ui.com',
              type: 'resource',
              description: 'Unstyled, accessible components for building high-quality design systems'
            }
          ]
        },
        {
          name: 'Design System Resources',
          resources: [
            {
              name: 'Design Systems Handbook',
              url: 'https://www.designbetter.co/design-systems-handbook',
              type: 'resource',
              description: 'InVision\'s comprehensive guide covering tokens, accessibility, and governance'
            },
            {
              name: 'Atomic Design by Brad Frost',
              url: 'https://atomicdesign.bradfrost.com',
              type: 'resource',
              description: 'Methodology for creating scalable, modular interfaces with reusable components'
            },
            {
              name: 'Design System Checklist',
              url: 'https://www.designsystemchecklist.com',
              type: 'resource',
              description: 'Open-source checklist covering all aspects of building design systems'
            },
            {
              name: 'Adele Design Systems Repository',
              url: 'https://adele.uxpin.com',
              type: 'resource',
              description: 'Collection of 100+ publicly accessible design systems for reference'
            }
          ]
        },
        {
          name: 'Design Tokens & Documentation',
          resources: [
            {
              name: 'Style Dictionary',
              url: 'https://amzn.github.io/style-dictionary',
              type: 'tool',
              description: 'Amazon\'s build system for design tokens - transform to any platform format'
            },
            {
              name: 'Storybook',
              url: 'https://storybook.js.org',
              type: 'tool',
              description: 'Component explorer for UI development, testing, and documentation'
            },
            {
              name: 'zeroheight',
              url: 'https://zeroheight.com',
              type: 'tool',
              description: 'Design system documentation platform syncing with Figma and code'
            },
            {
              name: 'Supernova',
              url: 'https://www.supernova.io',
              type: 'tool',
              description: 'Design system platform with automated code generation and version control'
            }
          ]
        }
      ]
    },
    learning: {
      title: 'Learning & Education',
      icon: BookOpen,
      color: '#f59e0b',
      sections: [
        {
          name: 'Comprehensive Courses',
          resources: [
            {
              name: 'Google UX Design Certificate',
              url: 'https://www.coursera.org/google-certificates/ux-design-certificate',
              type: 'course',
              description: 'Free 6-month professional certificate covering full UX process with portfolio projects'
            },
            {
              name: 'Interaction Design Foundation',
              url: 'https://www.interaction-design.org',
              type: 'course',
              description: '40+ courses on UX, UI, psychology, research - industry-recognized certificates'
            },
            {
              name: 'Coursera UX/UI Specialization',
              url: 'https://www.coursera.org/specializations/ui-ux-design',
              type: 'course',
              description: 'CalArts 8-course specialization from research to high-fidelity prototyping'
            },
            {
              name: 'Learn UX',
              url: 'https://learnux.io',
              type: 'course',
              description: 'Video platform covering tools, careers, usability testing, and UX writing'
            },
            {
              name: 'UX Design Institute',
              url: 'https://www.uxdesigninstitute.com',
              type: 'course',
              description: 'Professional Diploma in UX Design - university credit-rated program'
            }
          ]
        },
        {
          name: 'YouTube Channels',
          resources: [
            {
              name: 'AJ&Smart',
              url: 'https://www.youtube.com/@AJSmart',
              type: 'youtube',
              description: 'UX fundamentals, design thinking workshops, and product design sprints'
            },
            {
              name: 'Mizko',
              url: 'https://www.youtube.com/@Mizko',
              type: 'youtube',
              description: '80k+ subscribers - Figma tutorials from basic to advanced techniques'
            },
            {
              name: 'Flux Academy',
              url: 'https://www.youtube.com/FluxAcademy',
              type: 'youtube',
              description: 'Web design, Figma workflows, and complete UX/UI project walkthroughs'
            },
            {
              name: 'DesignCourse (Gary Simon)',
              url: 'https://www.youtube.com/@DesignCourse',
              type: 'youtube',
              description: '1M+ subscribers - UI/UX design, Figma mastery, and frontend development'
            },
            {
              name: 'Juxtopposed',
              url: 'https://www.youtube.com/@juxtopposed',
              type: 'youtube',
              description: 'UI/UX design analysis, case studies, and design thinking breakdowns'
            },
            {
              name: 'Jesse Showalter',
              url: 'https://www.youtube.com/@JesseSchowalter',
              type: 'youtube',
              description: 'Design and code tutorials bridging design and frontend development'
            }
          ]
        },
        {
          name: 'Books & Reading',
          resources: [
            {
              name: 'Don\'t Make Me Think',
              url: 'https://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515',
              type: 'resource',
              description: 'Steve Krug\'s essential guide to web usability and intuitive navigation'
            },
            {
              name: 'The Design of Everyday Things',
              url: 'https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654',
              type: 'resource',
              description: 'Don Norman\'s foundational book on user-centered design principles'
            },
            {
              name: 'Refactoring UI',
              url: 'https://www.refactoringui.com',
              type: 'resource',
              description: 'Practical UI design tactics by Tailwind CSS creators - design for developers'
            },
            {
              name: 'Laws of UX',
              url: 'https://lawsofux.com',
              type: 'resource',
              description: 'Jon Yablonski\'s collection of psychological principles for designers'
            }
          ]
        },
        {
          name: 'Blogs & Publications',
          resources: [
            {
              name: 'Nielsen Norman Group',
              url: 'https://www.nngroup.com/articles',
              type: 'resource',
              description: 'Evidence-based UX research insights and usability guidelines since 1998'
            },
            {
              name: 'UX Collective',
              url: 'https://uxdesign.cc',
              type: 'resource',
              description: 'Medium publication with daily articles on design process and case studies'
            },
            {
              name: 'Smashing Magazine',
              url: 'https://www.smashingmagazine.com',
              type: 'resource',
              description: 'Web design and development articles, books, and conferences'
            },
            {
              name: 'A List Apart',
              url: 'https://alistapart.com',
              type: 'resource',
              description: 'In-depth articles on web standards, design, and development since 1998'
            }
          ]
        }
      ]
    },
    inspiration: {
      title: 'Design Inspiration & Patterns',
      icon: Eye,
      color: '#ec4899',
      sections: [
        {
          name: 'UI/UX Galleries',
          resources: [
            {
              name: 'Dribbble',
              url: 'https://dribbble.com',
              type: 'inspiration',
              description: 'Premier showcase for UI/UX work with 10M+ designs and hiring platform'
            },
            {
              name: 'Behance',
              url: 'https://www.behance.net',
              type: 'inspiration',
              description: 'Adobe portfolio platform featuring detailed UX case studies and projects'
            },
            {
              name: 'Awwwards',
              url: 'https://www.awwwards.com',
              type: 'inspiration',
              description: 'Award-winning web designs judged on design, usability, and creativity'
            },
            {
              name: 'Mobbin',
              url: 'https://mobbin.com',
              type: 'inspiration',
              description: '300k+ mobile and web app screens organized by patterns and flows'
            },
            {
              name: 'UI Movement',
              url: 'https://uimovement.com',
              type: 'inspiration',
              description: 'Animated UI design inspiration with micro-interactions and transitions'
            },
            {
              name: 'Refero',
              url: 'https://refero.design',
              type: 'inspiration',
              description: 'Curated web design inspiration with filtering by style and category'
            }
          ]
        },
        {
          name: 'Mobile & App Patterns',
          resources: [
            {
              name: 'Screenlane',
              url: 'https://screenlane.com',
              type: 'inspiration',
              description: 'Latest mobile design patterns categorized by screen type and interaction'
            },
            {
              name: 'Page Flows',
              url: 'https://pageflows.com',
              type: 'inspiration',
              description: 'User flow recordings showing onboarding, checkout, and key interactions'
            },
            {
              name: 'UI Sources',
              url: 'https://www.uisources.com',
              type: 'inspiration',
              description: 'Free design resources, UI kits, and interaction patterns for iOS and Android'
            },
            {
              name: 'Really Good UX',
              url: 'https://www.reallygoodux.io',
              type: 'inspiration',
              description: 'Annotated screenshots explaining what makes good UX with insights'
            }
          ]
        },
        {
          name: 'Web Design Inspiration',
          resources: [
            {
              name: 'SiteInspire',
              url: 'https://www.siteinspire.com',
              type: 'inspiration',
              description: 'Curated collection of beautiful websites organized by industry and style'
            },
            {
              name: 'Godly',
              url: 'https://godly.website',
              type: 'inspiration',
              description: 'Astronomically good web design with daily updates and style filters'
            },
            {
              name: 'Lapa Ninja',
              url: 'https://www.lapa.ninja',
              type: 'inspiration',
              description: '6,000+ landing page designs with conversion-focused patterns'
            },
            {
              name: 'Land-book',
              url: 'https://land-book.com',
              type: 'inspiration',
              description: 'Gallery of well-designed landing pages with color and industry filters'
            }
          ]
        },
        {
          name: 'Component & Pattern Libraries',
          resources: [
            {
              name: 'UI Garage',
              url: 'https://uigarage.net',
              type: 'inspiration',
              description: 'Specific UI components organized by type - forms, buttons, cards, navigation'
            },
            {
              name: 'Collect UI',
              url: 'http://collectui.com',
              type: 'inspiration',
              description: 'Daily UI inspiration categorized by component type with search'
            },
            {
              name: 'Details Matter',
              url: 'https://www.detailsmatter.design',
              type: 'inspiration',
              description: 'Gallery of finest micro-interactions and thoughtful UI details'
            },
            {
              name: 'UI Patterns',
              url: 'https://ui-patterns.com',
              type: 'inspiration',
              description: 'Library of recurring solutions to common design problems'
            }
          ]
        }
      ]
    },
    accessibility: {
      title: 'Accessibility & Inclusive Design',
      icon: Users,
      color: '#14b8a6',
      sections: [
        {
          name: 'Guidelines & Standards',
          resources: [
            {
              name: 'WCAG Guidelines',
              url: 'https://www.w3.org/WAI/WCAG21/quickref',
              type: 'resource',
              description: 'Web Content Accessibility Guidelines 2.1 - official W3C standards'
            },
            {
              name: 'A11y Project',
              url: 'https://www.a11yproject.com',
              type: 'resource',
              description: 'Community-driven checklist and resources for digital accessibility'
            },
            {
              name: 'Inclusive Design Principles',
              url: 'https://inclusivedesignprinciples.org',
              type: 'resource',
              description: '7 principles for designing inclusive products and services'
            },
            {
              name: 'Microsoft Inclusive Design',
              url: 'https://www.microsoft.com/design/inclusive',
              type: 'resource',
              description: 'Toolkit and methodologies for inclusive design thinking'
            }
          ]
        },
        {
          name: 'Testing & Audit Tools',
          resources: [
            {
              name: 'axe DevTools',
              url: 'https://www.deque.com/axe/devtools',
              type: 'tool',
              description: 'Browser extension for automated accessibility testing and guided audits'
            },
            {
              name: 'WAVE',
              url: 'https://wave.webaim.org',
              type: 'tool',
              description: 'WebAIM\'s web accessibility evaluation tool with visual feedback'
            },
            {
              name: 'Stark',
              url: 'https://www.getstark.co',
              type: 'tool',
              description: 'Figma plugin for contrast checking, vision simulation, and WCAG compliance'
            },
            {
              name: 'Colour Contrast Analyzer',
              url: 'https://www.tpgi.com/color-contrast-checker',
              type: 'tool',
              description: 'TPGi color contrast checker for WCAG AA and AAA compliance'
            }
          ]
        },
        {
          name: 'Color & Contrast Tools',
          resources: [
            {
              name: 'Contrast Checker',
              url: 'https://webaim.org/resources/contrastchecker',
              type: 'tool',
              description: 'WebAIM\'s simple tool to verify text and background contrast ratios'
            },
            {
              name: 'Who Can Use',
              url: 'https://www.whocanuse.com',
              type: 'tool',
              description: 'Visualize how color contrast affects people with different vision types'
            },
            {
              name: 'Colorblind Web Page Filter',
              url: 'https://www.toptal.com/designers/colorfilter',
              type: 'tool',
              description: 'Test websites for different types of color blindness'
            }
          ]
        },
        {
          name: 'Learning Resources',
          resources: [
            {
              name: 'Web Accessibility by Google',
              url: 'https://www.udacity.com/course/web-accessibility--ud891',
              type: 'course',
              description: 'Free Udacity course covering ARIA, screen readers, and semantic HTML'
            },
            {
              name: 'Deque University',
              url: 'https://dequeuniversity.com',
              type: 'course',
              description: 'Comprehensive accessibility training and certification programs'
            },
            {
              name: 'A11ycasts by Google',
              url: 'https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g',
              type: 'youtube',
              description: 'Video series on practical accessibility tips for developers and designers'
            }
          ]
        }
      ]
    },
    workflow: {
      title: 'Workflow & Collaboration',
      icon: Zap,
      color: '#ef4444',
      sections: [
        {
          name: 'Handoff & Developer Tools',
          resources: [
            {
              name: 'Zeplin',
              url: 'https://zeplin.io',
              type: 'tool',
              description: 'Design handoff with specs, assets, and style guides from Figma/Sketch'
            },
            {
              name: 'Avocode',
              url: 'https://avocode.com',
              type: 'tool',
              description: 'Design to code platform with version control and collaboration'
            },
            {
              name: 'Figma Dev Mode',
              url: 'https://www.figma.com/dev-mode',
              type: 'tool',
              description: 'Built-in developer workspace with code export and component mapping'
            },
            {
              name: 'Anima',
              url: 'https://www.animaapp.com',
              type: 'tool',
              description: 'Convert Figma designs to React, Vue, or HTML code automatically'
            }
          ]
        },
        {
          name: 'Version Control & Management',
          resources: [
            {
              name: 'Abstract',
              url: 'https://www.abstract.com',
              type: 'tool',
              description: 'Git-like version control for Sketch with branching and merging'
            },
            {
              name: 'Figma Version History',
              url: 'https://www.figma.com',
              type: 'tool',
              description: 'Built-in unlimited version history with branching and restore features'
            },
            {
              name: 'Plant',
              url: 'https://plantapp.io',
              type: 'tool',
              description: 'Version control for Sketch files with visual diffs and team collaboration'
            }
          ]
        },
        {
          name: 'Collaboration & Feedback',
          resources: [
            {
              name: 'Loom',
              url: 'https://www.loom.com',
              type: 'tool',
              description: 'Video messaging for async design reviews and walkthroughs'
            },
            {
              name: 'Notion',
              url: 'https://www.notion.so',
              type: 'tool',
              description: 'All-in-one workspace for documentation, specs, and project management'
            },
            {
              name: 'Airtable',
              url: 'https://www.airtable.com',
              type: 'tool',
              description: 'Database for tracking design systems, research, and project workflows'
            },
            {
              name: 'Linear',
              url: 'https://linear.app',
              type: 'tool',
              description: 'Modern issue tracking with Figma integration and keyboard shortcuts'
            }
          ]
        }
      ]
    },
    assets: {
      title: 'Assets & Resources',
      icon: Download,
      color: '#a855f7',
      sections: [
        {
          name: 'Icon Libraries',
          resources: [
            {
              name: 'Iconoir',
              url: 'https://iconoir.com',
              type: 'asset',
              description: '1,500+ minimal open-source SVG icons with consistent styling'
            },
            {
              name: 'Material Symbols',
              url: 'https://fonts.google.com/icons',
              type: 'asset',
              description: '2,500+ Google icons in outlined, rounded, and sharp styles'
            },
            {
              name: 'Heroicons',
              url: 'https://heroicons.com',
              type: 'asset',
              description: 'Beautiful hand-crafted SVG icons by Tailwind CSS creators'
            },
            {
              name: 'Feather Icons',
              url: 'https://feathericons.com',
              type: 'asset',
              description: 'Simply beautiful open-source icons with 24x24 grid'
            },
            {
              name: 'Phosphor Icons',
              url: 'https://phosphoricons.com',
              type: 'asset',
              description: '7,000+ flexible icons for web, mobile, and desktop in 6 weights'
            },
            {
              name: 'Lucide',
              url: 'https://lucide.dev',
              type: 'asset',
              description: 'Community-driven fork of Feather Icons with 1,000+ icons'
            }
          ]
        },
        {
          name: 'Illustrations & Graphics',
          resources: [
            {
              name: 'Undraw',
              url: 'https://undraw.co',
              type: 'asset',
              description: '4,000+ customizable SVG illustrations with color theming'
            },
            {
              name: 'Humaaans',
              url: 'https://www.humaaans.com',
              type: 'asset',
              description: 'Mix-and-match illustration library of human characters'
            },
            {
              name: 'Blush',
              url: 'https://blush.design',
              type: 'asset',
              description: 'Figma plugin with curated illustrations from global artists'
            },
            {
              name: 'Storyset',
              url: 'https://storyset.com',
              type: 'asset',
              description: 'Customizable animated illustrations for free download'
            }
          ]
        },
        {
          name: 'UI Kits & Templates',
          resources: [
            {
              name: 'Figma Community',
              url: 'https://www.figma.com/community',
              type: 'resource',
              description: 'Free UI kits, wireframe templates, and design system files'
            },
            {
              name: 'UI8',
              url: 'https://ui8.net',
              type: 'resource',
              description: 'Premium UI kits, icons, and design resources marketplace'
            },
            {
              name: 'Sketch App Sources',
              url: 'https://www.sketchappsources.com',
              type: 'resource',
              description: 'Free Sketch resources, UI kits, and wireframe templates'
            },
            {
              name: 'Uplabs',
              url: 'https://www.uplabs.com',
              type: 'resource',
              description: 'Community of designers sharing UI kits and resources'
            }
          ]
        },
        {
          name: 'Stock Photos & Mockups',
          resources: [
            {
              name: 'Unsplash',
              url: 'https://unsplash.com',
              type: 'asset',
              description: '4M+ high-resolution free stock photos from photographers'
            },
            {
              name: 'Pexels',
              url: 'https://www.pexels.com',
              type: 'asset',
              description: 'Free stock photos and videos with simple licensing'
            },
            {
              name: 'Mockupworld',
              url: 'https://www.mockupworld.co',
              type: 'asset',
              description: '2,000+ free mockup templates for devices and products'
            },
            {
              name: 'Smart Mockups',
              url: 'https://smartmockups.com',
              type: 'asset',
              description: 'Online mockup generator for devices, prints, and packaging'
            }
          ]
        }
      ]
    },
    community: {
      title: 'Communities & Networking',
      icon: MessageSquare,
      color: '#06b6d4',
      sections: [
        {
          name: 'Design Communities',
          resources: [
            {
              name: 'Designer Hangout',
              url: 'https://www.designerhangout.co',
              type: 'community',
              description: 'Private Slack community of 45k+ UX professionals with job boards'
            },
            {
              name: 'ADPList',
              url: 'https://adplist.org',
              type: 'community',
              description: 'Free 1:1 mentorship platform with 20k+ design mentors worldwide'
            },
            {
              name: 'UX Collective',
              url: 'https://uxdesign.cc',
              type: 'community',
              description: 'Medium publication with daily UX articles and 1M+ readers'
            },
            {
              name: 'IXDA',
              url: 'https://ixda.org',
              type: 'community',
              description: 'Interaction Design Association with local chapters globally'
            }
          ]
        },
        {
          name: 'Reddit & Forums',
          resources: [
            {
              name: 'r/userexperience',
              url: 'https://www.reddit.com/r/userexperience',
              type: 'community',
              description: 'Active Reddit community for UX professionals and learners'
            },
            {
              name: 'r/UI_Design',
              url: 'https://www.reddit.com/r/UI_Design',
              type: 'community',
              description: 'UI design showcase and feedback community'
            },
            {
              name: 'Designer News',
              url: 'https://www.designernews.co',
              type: 'community',
              description: 'Community where design community meets to discuss work'
            }
          ]
        },
        {
          name: 'Conferences & Events',
          resources: [
            {
              name: 'Config by Figma',
              url: 'https://config.figma.com',
              type: 'resource',
              description: 'Annual design conference with talks from industry leaders'
            },
            {
              name: 'An Event Apart',
              url: 'https://aneventapart.com',
              type: 'resource',
              description: 'Premier web design conference for UX and front-end professionals'
            },
            {
              name: 'Awwwards Conference',
              url: 'https://conference.awwwards.com',
              type: 'resource',
              description: 'Multi-city conference celebrating digital design excellence'
            }
          ]
        }
      ]
    }
  };

  // Category navigation
  const categories = [
    { id: 'all', label: 'All Resources', icon: Layers },
    { id: 'designTools', label: 'Design Tools', icon: Figma },
    { id: 'research', label: 'Research & Testing', icon: TestTube },
    { id: 'designSystems', label: 'Design Systems', icon: Grid },
    { id: 'learning', label: 'Learning', icon: BookOpen },
    { id: 'inspiration', label: 'Inspiration', icon: Eye },
    { id: 'accessibility', label: 'Accessibility', icon: Users },
    { id: 'workflow', label: 'Workflow', icon: Zap },
    { id: 'assets', label: 'Assets', icon: Download },
    { id: 'community', label: 'Community', icon: MessageSquare }
  ];

  // Resource type badges
  const getTypeBadge = (type) => {
    const badges = {
      tool: { icon: Zap, color: '#3b82f6', label: 'Tool' },
      course: { icon: BookOpen, color: '#10b981', label: 'Course' },
      youtube: { icon: Video, color: '#ef4444', label: 'YouTube' },
      resource: { icon: FileText, color: '#8b5cf6', label: 'Resource' },
      inspiration: { icon: Star, color: '#f59e0b', label: 'Inspiration' },
      asset: { icon: Download, color: '#ec4899', label: 'Asset' },
      community: { icon: Users, color: '#06b6d4', label: 'Community' }
    };
    return badges[type] || badges.resource;
  };

  // Filter resources
  const filteredResources = useMemo(() => {
    let filtered = activeCategory === 'all' 
      ? Object.entries(resources)
      : [[activeCategory, resources[activeCategory]]].filter(([key]) => resources[key]);

    if (searchQuery) {
      filtered = filtered.map(([key, category]) => {
        const filteredSections = category.sections
          .map(section => ({
            ...section,
            resources: section.resources.filter(resource =>
              resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              resource.description.toLowerCase().includes(searchQuery.toLowerCase())
            )
          }))
          .filter(section => section.resources.length > 0);

        return [key, { ...category, sections: filteredSections }];
      }).filter(([_, category]) => category.sections.length > 0);
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  // Toggle section
  const toggleSection = (categoryKey, sectionName) => {
    const key = `${categoryKey}-${sectionName}`;
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Copy URL
  const copyToClipboard = (url, name) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(name);
    setTimeout(() => setCopiedUrl(''), 2000);
  };

  // Calculate total resources
  const totalResources = Object.values(resources).reduce((total, category) => {
    return total + category.sections.reduce((sum, section) => sum + section.resources.length, 0);
  }, 0);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#0a0a0a] text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Sticky Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors ${
        darkMode ? 'bg-[#0a0a0a]/95 border-[#1a1a1a]' : 'bg-white/95 border-gray-200'
      }`}>
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo & Title */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  darkMode ? 'hover:bg-[#1a1a1a]' : 'hover:bg-gray-100'
                }`}
              >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <Layout className="w-7 h-7 text-[#0ea5e9]" />
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">UI/UX Resource Hub</h1>
                <p className={`text-xs mt-0.5 hidden sm:block ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                  Comprehensive user experience design directory
                </p>
              </div>
            </div>

            {/* Search & Theme Toggle */}
            <div className="flex items-center gap-3">
              <div className="relative hidden sm:block">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                  darkMode ? 'text-gray-500' : 'text-gray-400'
                }`} />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`pl-10 pr-4 py-2 w-64 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] ${
                    darkMode 
                      ? 'bg-[#141414] border-[#1a1a1a] placeholder-gray-600' 
                      : 'bg-white border-gray-200 placeholder-gray-400'
                  }`}
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2.5 rounded-lg border transition-colors ${
                  darkMode 
                    ? 'bg-[#141414] border-[#1a1a1a] hover:bg-[#1f1f1f]' 
                    : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="relative sm:hidden mt-3">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
              darkMode ? 'text-gray-500' : 'text-gray-400'
            }`} />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] ${
                darkMode 
                  ? 'bg-[#141414] border-[#1a1a1a] placeholder-gray-600' 
                  : 'bg-white border-gray-200 placeholder-gray-400'
              }`}
            />
          </div>
        </div>
      </header>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 py-6">
        {/* Stats Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
        >
          {[
            { label: 'Total Resources', value: totalResources, icon: Layers },
            { label: 'Categories', value: Object.keys(resources).length, icon: Grid },
            { label: 'Free Tools', value: '90%', icon: TrendingUp },
            { label: 'Updated', value: 'Nov 2025', icon: Zap }
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border text-center ${
                darkMode ? 'bg-[#0f0f0f] border-[#1a1a1a]' : 'bg-white border-gray-200'
              }`}
            >
              <stat.icon className="w-5 h-5 mx-auto mb-2 text-[#0ea5e9]" />
              <div className="text-xl sm:text-2xl font-semibold text-[#0ea5e9]">{stat.value}</div>
              <div className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="flex gap-6">
          {/* Sidebar - Desktop */}
          <aside className={`hidden lg:block w-64 flex-shrink-0 sticky top-24 self-start`}>
            <div className={`rounded-xl border p-4 ${
              darkMode ? 'bg-[#0f0f0f] border-[#1a1a1a]' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-sm font-semibold mb-3 flex items-center gap-2 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <Filter className="w-4 h-4" />
                Categories
              </h3>
              <nav className="space-y-1">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                        isActive
                          ? darkMode
                            ? 'bg-[#0ea5e9]/10 text-[#0ea5e9]'
                            : 'bg-cyan-50 text-cyan-600'
                          : darkMode
                            ? 'hover:bg-[#1a1a1a] text-gray-400'
                            : 'hover:bg-gray-50 text-gray-600'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{category.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Mobile Sidebar */}
          <AnimatePresence>
            {sidebarOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSidebarOpen(false)}
                  className="lg:hidden fixed inset-0 bg-black/50 z-40"
                />
                <motion.aside
                  initial={{ x: -280 }}
                  animate={{ x: 0 }}
                  exit={{ x: -280 }}
                  className={`lg:hidden fixed left-0 top-0 bottom-0 w-64 z-50 p-4 overflow-y-auto ${
                    darkMode ? 'bg-[#0a0a0a]' : 'bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Categories</h3>
                    <button
                      onClick={() => setSidebarOpen(false)}
                      className={`p-2 rounded-lg ${
                        darkMode ? 'hover:bg-[#1a1a1a]' : 'hover:bg-gray-100'
                      }`}
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <nav className="space-y-1">
                    {categories.map((category) => {
                      const Icon = category.icon;
                      const isActive = activeCategory === category.id;
                      return (
                        <button
                          key={category.id}
                          onClick={() => {
                            setActiveCategory(category.id);
                            setSidebarOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                            isActive
                              ? darkMode
                                ? 'bg-[#0ea5e9]/10 text-[#0ea5e9]'
                                : 'bg-cyan-50 text-cyan-600'
                              : darkMode
                                ? 'hover:bg-[#1a1a1a] text-gray-400'
                                : 'hover:bg-gray-50 text-gray-600'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span className="font-medium">{category.label}</span>
                        </button>
                      );
                    })}
                  </nav>
                </motion.aside>
              </>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="space-y-6">
              {filteredResources.length > 0 ? (
                filteredResources.map(([categoryKey, category], categoryIdx) => {
                  const CategoryIcon = category.icon;
                  
                  return (
                    <motion.div
                      key={categoryKey}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: categoryIdx * 0.05 }}
                      className={`rounded-2xl border overflow-hidden ${
                        darkMode ? 'bg-[#0f0f0f] border-[#1a1a1a]' : 'bg-white border-gray-200'
                      }`}
                    >
                      {/* Category Header */}
                      <div className={`px-6 py-5 border-b ${
                        darkMode ? 'border-[#1a1a1a]' : 'border-gray-200'
                      }`}>
                        <div className="flex items-center gap-4">
                          <div 
                            className="p-3 rounded-xl"
                            style={{ backgroundColor: `${category.color}15` }}
                          >
                            <CategoryIcon className="w-6 h-6" style={{ color: category.color }} />
                          </div>
                          <div>
                            <h2 className="text-xl font-semibold">{category.title}</h2>
                            <p className={`text-sm mt-0.5 ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                              {category.sections.reduce((sum, s) => sum + s.resources.length, 0)} resources
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Sections */}
                      <div className="p-6 space-y-6">
                        {category.sections.map((section, sectionIdx) => {
                          const sectionKey = `${categoryKey}-${section.name}`;
                          const isExpanded = expandedSections[sectionKey] !== false;

                          return (
                            <div key={sectionIdx}>
                              <button
                                onClick={() => toggleSection(categoryKey, section.name)}
                                className={`w-full flex items-center justify-between mb-4 group ${
                                  darkMode ? 'hover:text-[#0ea5e9]' : 'hover:text-cyan-600'
                                }`}
                              >
                                <h3 className="text-lg font-medium flex items-center gap-2">
                                  <motion.div
                                    animate={{ rotate: isExpanded ? 90 : 0 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <ChevronRight className="w-5 h-5" />
                                  </motion.div>
                                  {section.name}
                                  <span className={`text-xs px-2 py-1 rounded-full ${
                                    darkMode ? 'bg-[#1a1a1a] text-gray-500' : 'bg-gray-100 text-gray-600'
                                  }`}>
                                    {section.resources.length}
                                  </span>
                                </h3>
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
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      {section.resources.map((resource, resourceIdx) => {
                                        const typeBadge = getTypeBadge(resource.type);
                                        const TypeIcon = typeBadge.icon;

                                        return (
                                          <motion.div
                                            key={resourceIdx}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: resourceIdx * 0.03 }}
                                            className={`group p-4 rounded-xl border transition-all hover:shadow-lg ${
                                              darkMode 
                                                ? 'bg-[#141414] border-[#1f1f1f] hover:border-[#2a2a2a]' 
                                                : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                                            }`}
                                          >
                                            <div className="flex items-start justify-between mb-3">
                                              <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-2">
                                                  <span 
                                                    className="px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1"
                                                    style={{ 
                                                      backgroundColor: `${typeBadge.color}15`,
                                                      color: typeBadge.color
                                                    }}
                                                  >
                                                    <TypeIcon className="w-3 h-3" />
                                                    {typeBadge.label}
                                                  </span>
                                                </div>
                                                <h4 className={`font-medium text-sm mb-1 transition-colors truncate ${
                                                  darkMode ? 'group-hover:text-[#0ea5e9]' : 'group-hover:text-cyan-600'
                                                }`}>
                                                  {resource.name}
                                                </h4>
                                              </div>
                                              <div className="flex gap-2 ml-2">
                                                <motion.button
                                                  whileHover={{ scale: 1.1 }}
                                                  whileTap={{ scale: 0.9 }}
                                                  onClick={() => copyToClipboard(resource.url, resource.name)}
                                                  className={`p-1.5 rounded-md transition-colors ${
                                                    darkMode ? 'hover:bg-[#1f1f1f]' : 'hover:bg-gray-200'
                                                  }`}
                                                  title="Copy URL"
                                                >
                                                  <Copy className={`w-3.5 h-3.5 ${
                                                    copiedUrl === resource.name 
                                                      ? 'text-green-500' 
                                                      : darkMode ? 'text-gray-500' : 'text-gray-400'
                                                  }`} />
                                                </motion.button>
                                                <motion.a
                                                  whileHover={{ scale: 1.1 }}
                                                  whileTap={{ scale: 0.9 }}
                                                  href={resource.url}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className={`p-1.5 rounded-md transition-colors ${
                                                    darkMode ? 'hover:bg-[#1f1f1f]' : 'hover:bg-gray-200'
                                                  }`}
                                                  title="Open link"
                                                >
                                                  <ExternalLink className={`w-3.5 h-3.5 ${
                                                    darkMode ? 'text-gray-500' : 'text-gray-400'
                                                  }`} />
                                                </motion.a>
                                              </div>
                                            </div>
                                            <p className={`text-xs leading-relaxed ${
                                              darkMode ? 'text-gray-500' : 'text-gray-600'
                                            }`}>
                                              {resource.description}
                                            </p>
                                          </motion.div>
                                        );
                                      })}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`text-center py-16 rounded-2xl border ${
                    darkMode ? 'bg-[#0f0f0f] border-[#1a1a1a]' : 'bg-white border-gray-200'
                  }`}
                >
                  <Search className={`w-12 h-12 mx-auto mb-4 ${
                    darkMode ? 'text-gray-700' : 'text-gray-300'
                  }`} />
                  <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                    No resources found matching "{searchQuery}"
                  </p>
                </motion.div>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className={`border-t mt-16 ${darkMode ? 'border-[#1a1a1a] bg-[#0a0a0a]' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              Last updated: November 2025 • {totalResources} curated UI/UX resources
            </p>
            <div className="flex items-center gap-2 text-xs">
              <span className={darkMode ? 'text-gray-500' : 'text-gray-600'}>
                Built for designers, by designers
              </span>
              <Layout className="w-4 h-4 text-[#0ea5e9]" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UIUXResourceHub;
