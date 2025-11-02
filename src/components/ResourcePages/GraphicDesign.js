import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Moon, Sun, ExternalLink, Copy, ChevronDown, ChevronRight,
  Palette, Type, Layout, Layers, Video, Code, Zap, Eye, 
  Monitor, Smartphone, Globe, Box, Sparkles, BookOpen, 
  Image as ImageIcon, Feather, Award, Users, Play, Download,
  Star, TrendingUp, Menu, X, Filter, Youtube
} from 'lucide-react';

const DesignResourceHub = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedSections, setExpandedSections] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState('');

  // Comprehensive design resource database
  const resources = {
    fundamentals: {
      title: 'Design Fundamentals',
      icon: BookOpen,
      color: '#3b82f6',
      sections: [
        {
          name: 'Color Theory & Psychology',
          resources: [
            {
              name: 'Flux Academy',
              url: 'https://www.youtube.com/FluxAcademy',
              type: 'youtube',
              description: 'How to choose colors - Easy 3-step process and comprehensive color theory lessons'
            },
            {
              name: 'Coolors.co',
              url: 'https://coolors.co',
              type: 'tool',
              description: 'Free color palette generator with advanced options and trending schemes'
            },
            {
              name: 'Adobe Color Wheel',
              url: 'https://color.adobe.com',
              type: 'tool',
              description: 'Interactive color scheme creator with harmony rules and accessibility tools'
            },
            {
              name: 'ColorHunt',
              url: 'https://colorhunt.co',
              type: 'tool',
              description: 'Curated collection of beautiful color palettes updated daily'
            }
          ]
        },
        {
          name: 'Typography & Font Pairing',
          resources: [
            {
              name: 'Google Fonts',
              url: 'https://fonts.google.com',
              type: 'tool',
              description: 'Free, open-source font library with 1,500+ typefaces and pairing guides'
            },
            {
              name: 'FontPair',
              url: 'https://fontpair.co',
              type: 'tool',
              description: 'AI-powered font pairing recommendations for perfect typography'
            },
            {
              name: 'The Futur',
              url: 'https://www.youtube.com/@thefutur',
              type: 'youtube',
              description: 'Typography strategy and brand applications by Chris Do'
            },
            {
              name: 'Satori Graphics',
              url: 'https://www.youtube.com/c/SatoriGraphics',
              type: 'youtube',
              description: 'Typography fundamentals and logo design principles'
            }
          ]
        },
        {
          name: 'Composition & Visual Balance',
          resources: [
            {
              name: 'Interaction Design Foundation',
              url: 'https://www.interaction-design.org/courses',
              type: 'course',
              description: 'Visual Design: The Ultimate Guide - comprehensive composition masterclass'
            },
            {
              name: 'DesignCourse',
              url: 'https://www.youtube.com/@DesignCourse',
              type: 'youtube',
              description: 'Layout principles, grid systems, and composition techniques by Gary Simon'
            }
          ]
        }
      ]
    },
    graphicDesign: {
      title: 'Graphic Design',
      icon: Palette,
      color: '#f59e0b',
      sections: [
        {
          name: 'Professional Design Software',
          resources: [
            {
              name: 'Adobe Photoshop',
              url: 'https://www.adobe.com/products/photoshop.html',
              type: 'tool',
              description: 'Industry standard for photo editing and digital design'
            },
            {
              name: 'Adobe Illustrator',
              url: 'https://www.adobe.com/products/illustrator.html',
              type: 'tool',
              description: 'Vector graphics and scalable design for logos, icons, and illustrations'
            },
            {
              name: 'Figma',
              url: 'https://www.figma.com',
              type: 'tool',
              description: 'Collaborative design and prototyping platform with real-time editing'
            },
            {
              name: 'Canva',
              url: 'https://www.canva.com',
              type: 'tool',
              description: 'Beginner-friendly design with 100M+ stock assets and AI-powered features'
            },
            {
              name: 'Affinity Designer',
              url: 'https://affinity.serif.com/designer',
              type: 'tool',
              description: 'Affordable professional vector design tool - one-time purchase'
            },
            {
              name: 'Penpot',
              url: 'https://penpot.app',
              type: 'tool',
              description: 'Free open-source Figma alternative using SVG native format'
            }
          ]
        },
        {
          name: 'Logo & Icon Design',
          resources: [
            {
              name: 'Satori Graphics - Logo Design Guide 2025',
              url: 'https://logodesignprocess.com',
              type: 'course',
              description: 'The ONLY Logo Design Guide you need - comprehensive process and principles'
            },
            {
              name: 'Zimri Mayfield',
              url: 'https://www.youtube.com/@ZimriMayfield',
              type: 'youtube',
              description: 'Energetic logo design tutorials and 3-style design challenges'
            },
            {
              name: 'Yes I\'m a Designer',
              url: 'https://www.youtube.com/@YesImADesigner',
              type: 'youtube',
              description: 'Will Paterson\'s logo redesign critiques and branding insights'
            },
            {
              name: 'Gareth David Studio',
              url: 'https://www.youtube.com/@GarethDavidStudio',
              type: 'youtube',
              description: '14+ years of professional logo and branding expertise'
            }
          ]
        },
        {
          name: 'YouTube Tutorials',
          resources: [
            {
              name: 'PiXimperfect',
              url: 'https://www.youtube.com/@PiXimperfect',
              type: 'youtube',
              description: 'Unmesh Dinda\'s step-by-step Photoshop and Lightroom editing mastery'
            },
            {
              name: 'Terry Lee White',
              url: 'https://www.youtube.com/terrylewhite',
              type: 'youtube',
              description: 'Adobe Creative Cloud workflow optimization and design tips'
            },
            {
              name: 'PANTER',
              url: 'https://www.youtube.com/@PanterVision',
              type: 'youtube',
              description: 'Over 1,000 Adobe Creative Cloud tutorials by Robert Matyas'
            },
            {
              name: 'Envato Tuts+',
              url: 'https://www.youtube.com/user/tutsenvato',
              type: 'youtube',
              description: 'Comprehensive software tutorials and design theory fundamentals'
            }
          ]
        }
      ]
    },
    uiux: {
      title: 'UI/UX Design',
      icon: Layout,
      color: '#ec4899',
      sections: [
        {
          name: 'UX Principles & User Flow',
          resources: [
            {
              name: 'AJ&Smart',
              url: 'https://www.youtube.com/@AJSmart',
              type: 'youtube',
              description: 'UX Design fundamentals and beginner guides with design thinking workshops'
            },
            {
              name: 'Google UX Design Certificate',
              url: 'https://www.coursera.org/google-certificates/ux-design-certificate',
              type: 'course',
              description: 'Free 4-week comprehensive introduction to user experience design'
            },
            {
              name: 'Mizko',
              url: 'https://www.youtube.com/@Mizko',
              type: 'youtube',
              description: '80k+ subscriber channel with in-depth UX tutorials and Figma mastery'
            },
            {
              name: 'Agata Sakowicz',
              url: 'https://www.youtube.com/@AgataSakowicz',
              type: 'youtube',
              description: 'How to learn UI/UX in 2025 without degree - 12+ years experience'
            }
          ]
        },
        {
          name: 'Wireframing & Prototyping Tools',
          resources: [
            {
              name: 'Figma',
              url: 'https://www.figma.com',
              type: 'tool',
              description: 'Collaborative design, prototyping, and handoff with Dev Mode'
            },
            {
              name: 'Adobe XD',
              url: 'https://www.adobe.com/products/xd.html',
              type: 'tool',
              description: 'Rapid prototyping and design handoff tools for UI/UX teams'
            },
            {
              name: 'Framer',
              url: 'https://www.framer.com',
              type: 'tool',
              description: 'React-based interactive design and code-component hybrid workflows'
            },
            {
              name: 'InVision',
              url: 'https://www.invisionapp.com',
              type: 'tool',
              description: 'Interactive prototyping platform with collaboration features'
            }
          ]
        },
        {
          name: 'Design Systems & UI Kits',
          resources: [
            {
              name: 'Figma Community',
              url: 'https://www.figma.com/community',
              type: 'resource',
              description: 'Free UI kits, design systems, and templates from the community'
            },
            {
              name: 'Material Design',
              url: 'https://material.io',
              type: 'resource',
              description: 'Google\'s comprehensive open-source design system'
            },
            {
              name: 'Apple Human Interface Guidelines',
              url: 'https://developer.apple.com/design',
              type: 'resource',
              description: 'Official iOS and Apple platform design principles and patterns'
            },
            {
              name: 'U.S. Web Design System',
              url: 'https://designsystem.digital.gov',
              type: 'resource',
              description: 'Government accessibility standards and WCAG 2.1 AA compliance examples'
            }
          ]
        }
      ]
    },
    webDesign: {
      title: 'Web Design',
      icon: Globe,
      color: '#10b981',
      sections: [
        {
          name: 'Web Design Fundamentals',
          resources: [
            {
              name: 'Flux Academy - Web Design Masterclass',
              url: 'https://www.flux-academy.com',
              type: 'course',
              description: '3 real-world projects, 8 weeks mentoring, lifetime access with certification'
            },
            {
              name: 'DesignCourse - Responsive Design',
              url: 'https://www.youtube.com/@DesignCourse',
              type: 'youtube',
              description: 'Most UX/UI Designers Are Bad at Responsive Design - complete workflows'
            },
            {
              name: 'CSS-Tricks',
              url: 'https://css-tricks.com',
              type: 'resource',
              description: 'Comprehensive CSS guides, tutorials, and modern layout techniques'
            },
            {
              name: 'Smashing Magazine',
              url: 'https://www.smashingmagazine.com',
              type: 'resource',
              description: 'Web design trends, techniques, and professional articles'
            }
          ]
        },
        {
          name: 'Webflow & No-Code',
          resources: [
            {
              name: 'Webflow',
              url: 'https://webflow.com',
              type: 'tool',
              description: 'Visual web design with clean code generation, CMS, and built-in hosting'
            },
            {
              name: 'Webflow University',
              url: 'https://university.webflow.com',
              type: 'course',
              description: 'Official comprehensive tutorials and web design courses'
            },
            {
              name: 'Framer',
              url: 'https://www.framer.com',
              type: 'tool',
              description: 'AI-powered website builder with React components and SEO features'
            }
          ]
        },
        {
          name: 'HTML/CSS for Designers',
          resources: [
            {
              name: 'MDN Web Docs',
              url: 'https://developer.mozilla.org',
              type: 'resource',
              description: 'Official web standards documentation for HTML, CSS, and JavaScript'
            },
            {
              name: 'Kevin Powell',
              url: 'https://www.youtube.com/@KevinPowell',
              type: 'youtube',
              description: 'CSS and responsive design specialist with modern techniques'
            }
          ]
        }
      ]
    },
    motion3d: {
      title: '3D & Motion Design',
      icon: Box,
      color: '#8b5cf6',
      sections: [
        {
          name: '3D Software',
          resources: [
            {
              name: 'Blender',
              url: 'https://www.blender.org',
              type: 'tool',
              description: 'Free open-source 3D software - modeling, sculpting, rigging, animation, VFX'
            },
            {
              name: 'Cinema 4D',
              url: 'https://www.maxon.net/cinema-4d',
              type: 'tool',
              description: 'Motion graphics and design optimization for professional workflows'
            },
            {
              name: 'Unreal Engine 5',
              url: 'https://www.unrealengine.com',
              type: 'tool',
              description: 'Real-time 3D rendering engine for games and architectural visualization'
            }
          ]
        },
        {
          name: 'Blender Learning',
          resources: [
            {
              name: 'Blender Official',
              url: 'https://www.youtube.com/BlenderOfficial',
              type: 'youtube',
              description: 'Official Blender tutorials covering features, workflows, and techniques'
            },
            {
              name: 'CG Cookie',
              url: 'https://cgcookie.com',
              type: 'course',
              description: 'Comprehensive Blender courses for modeling, animation, and rendering'
            },
            {
              name: 'Polyfjord',
              url: 'https://www.youtube.com/@Polyfjord',
              type: 'youtube',
              description: 'Motion graphics and procedural design with Blender'
            }
          ]
        },
        {
          name: 'Motion Graphics',
          resources: [
            {
              name: 'Adobe After Effects',
              url: 'https://www.adobe.com/products/aftereffects.html',
              type: 'tool',
              description: 'Industry standard motion graphics and visual effects compositing'
            },
            {
              name: 'Motion Design School',
              url: 'https://motiondesign.school',
              type: 'course',
              description: 'Professional motion graphics education and advanced animation techniques'
            },
            {
              name: 'SonduckFilm',
              url: 'https://www.youtube.com/@SonduckFilm',
              type: 'youtube',
              description: 'Blender to After Effects workflow and VFX tutorials'
            }
          ]
        }
      ]
    },
    inspiration: {
      title: 'Inspiration & Showcases',
      icon: Eye,
      color: '#06b6d4',
      sections: [
        {
          name: 'Design Portfolios',
          resources: [
            {
              name: 'Behance',
              url: 'https://www.behance.net',
              type: 'inspiration',
              description: 'Adobe\'s creative hub with 50M+ creators showcasing portfolios and case studies'
            },
            {
              name: 'Dribbble',
              url: 'https://dribbble.com',
              type: 'inspiration',
              description: 'Popular platform for discovering UI/UX designs with 100k+ projects'
            },
            {
              name: 'Awwwards',
              url: 'https://www.awwwards.com',
              type: 'inspiration',
              description: 'Award-winning website designs and innovative UI from around the world'
            }
          ]
        },
        {
          name: 'UI/UX Patterns',
          resources: [
            {
              name: 'Mobbin',
              url: 'https://mobbin.com',
              type: 'inspiration',
              description: 'Comprehensive collection of mobile design patterns from top apps'
            },
            {
              name: 'UI Movement',
              url: 'https://uimovement.com',
              type: 'inspiration',
              description: 'Curated interactive and animated UI design collections'
            },
            {
              name: 'Collect UI',
              url: 'http://collectui.com',
              type: 'inspiration',
              description: 'Daily inspiration from user-submitted UI designs and patterns'
            },
            {
              name: 'Details Matter',
              url: 'https://www.detailsmatter.design',
              type: 'inspiration',
              description: 'Gallery of the finest micro-interactions and UI details'
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
              description: 'Curated collection of elegant and polished web design inspiration'
            },
            {
              name: 'Godly Website',
              url: 'https://godly.website',
              type: 'inspiration',
              description: 'Striking and visually impressive web designs updated daily'
            },
            {
              name: 'One Page Love',
              url: 'https://onepagelove.com',
              type: 'inspiration',
              description: 'Exceptional single-page website designs and templates'
            },
            {
              name: 'Lapa Ninja',
              url: 'https://www.lapa.ninja',
              type: 'inspiration',
              description: 'Landing page gallery emphasizing conversion-driven designs'
            }
          ]
        }
      ]
    },
    assets: {
      title: 'Assets & Resources',
      icon: ImageIcon,
      color: '#ef4444',
      sections: [
        {
          name: 'Stock Photos & Videos',
          resources: [
            {
              name: 'Unsplash',
              url: 'https://unsplash.com',
              type: 'asset',
              description: '4M+ high-resolution free stock photos from photographers worldwide'
            },
            {
              name: 'Pexels',
              url: 'https://www.pexels.com',
              type: 'asset',
              description: 'Curated royalty-free stock images and videos updated daily'
            },
            {
              name: 'Pixabay',
              url: 'https://pixabay.com',
              type: 'asset',
              description: '2.6M+ free photos, vectors, and illustrations'
            },
            {
              name: 'Freepik',
              url: 'https://www.freepik.com',
              type: 'asset',
              description: '30M+ design assets - free with attribution or premium subscription'
            }
          ]
        },
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
              description: '2,500+ Google design system icons in multiple styles'
            },
            {
              name: 'The Noun Project',
              url: 'https://thenounproject.com',
              type: 'asset',
              description: '8M+ SVG and PNG icons with ethical AI policy'
            },
            {
              name: 'Icons8',
              url: 'https://icons8.com',
              type: 'asset',
              description: '10k+ visually consistent icons, illustrations, and design assets'
            },
            {
              name: 'Streamline',
              url: 'https://www.streamlinehq.com',
              type: 'asset',
              description: '5,600+ free vector icons and illustrations'
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
              description: 'Mix-and-match customizable human character illustrations'
            },
            {
              name: 'Envato Elements',
              url: 'https://elements.envato.com',
              type: 'asset',
              description: 'Unlimited downloads subscription - templates, graphics, fonts, photos'
            }
          ]
        },
        {
          name: 'Mockup Generators',
          resources: [
            {
              name: 'Mockupworld',
              url: 'https://www.mockupworld.co',
              type: 'asset',
              description: '2,000+ free professional mockup templates for all devices'
            },
            {
              name: 'Smart Mockups',
              url: 'https://smartmockups.com',
              type: 'asset',
              description: 'Drag-and-drop mockup creation for product and app designs'
            },
            {
              name: 'Mockey AI',
              url: 'https://mockey.ai',
              type: 'asset',
              description: 'AI-powered 3D mockup generator with instant results'
            }
          ]
        }
      ]
    },
    branding: {
      title: 'Branding & Identity',
      icon: Award,
      color: '#f97316',
      sections: [
        {
          name: 'Brand Strategy',
          resources: [
            {
              name: 'The Futur',
              url: 'https://www.youtube.com/@thefutur',
              type: 'youtube',
              description: 'Chris Do\'s 2.5M subscriber channel - branding strategy and creative entrepreneurship'
            },
            {
              name: 'Zimri Mayfield',
              url: 'https://www.youtube.com/@ZimriMayfield',
              type: 'youtube',
              description: 'Brand analysis, logo design, and visual identity development'
            }
          ]
        },
        {
          name: 'Style Guides & Guidelines',
          resources: [
            {
              name: 'Brand.ai',
              url: 'https://brand.ai',
              type: 'tool',
              description: 'AI-powered brand guideline generation and management'
            },
            {
              name: 'Frontify',
              url: 'https://www.frontify.com',
              type: 'tool',
              description: 'Brand management platform for guidelines and asset libraries'
            }
          ]
        }
      ]
    },
    learning: {
      title: 'Courses & Education',
      icon: BookOpen,
      color: '#14b8a6',
      sections: [
        {
          name: 'Free Comprehensive Courses',
          resources: [
            {
              name: 'Google UX Design Certificate',
              url: 'https://www.coursera.org/google-certificates/ux-design-certificate',
              type: 'course',
              description: 'Free 4-week comprehensive UX fundamentals from Google on Coursera'
            },
            {
              name: 'Great Learning Academy',
              url: 'https://www.mygreatlearning.com/academy',
              type: 'course',
              description: 'UX/UI for Beginners - 1 hour crash course with certification'
            },
            {
              name: 'LearnUX.io',
              url: 'https://learnux.io',
              type: 'course',
              description: 'Video platform covering tools, careers, and usability testing'
            }
          ]
        },
        {
          name: 'Premium Programs',
          resources: [
            {
              name: 'Flux Academy',
              url: 'https://www.flux-academy.com',
              type: 'course',
              description: 'Web Design Masterclass - 3 projects, 8 weeks mentoring, lifetime access'
            },
            {
              name: 'Interaction Design Foundation',
              url: 'https://www.interaction-design.org/courses',
              type: 'course',
              description: '10+ specialized courses including Visual Design and Gestalt Psychology'
            },
            {
              name: 'AJ&Smart Courses',
              url: 'https://ajsmart.com/courses',
              type: 'course',
              description: 'UX/Product Design courses and design thinking workshops'
            }
          ]
        },
        {
          name: 'YouTube Education Channels',
          resources: [
            {
              name: 'DesignCourse (Gary Simon)',
              url: 'https://www.youtube.com/@DesignCourse',
              type: 'youtube',
              description: '1.08M subscribers - UI/UX, web design, Figma, and development tools'
            },
            {
              name: 'Flux Academy',
              url: 'https://www.youtube.com/FluxAcademy',
              type: 'youtube',
              description: 'Web design, Figma mastery, Webflow, and complete layout guides'
            },
            {
              name: 'Mizko',
              url: 'https://www.youtube.com/@Mizko',
              type: 'youtube',
              description: '80k+ subscribers - in-depth Figma tutorials from basic to advanced'
            },
            {
              name: 'Envato Tuts+',
              url: 'https://www.youtube.com/user/tutsenvato',
              type: 'youtube',
              description: 'Design tools, software tutorials, and theory fundamentals'
            }
          ]
        }
      ]
    },
    community: {
      title: 'Communities & Networking',
      icon: Users,
      color: '#a855f7',
      sections: [
        {
          name: 'Designer Communities',
          resources: [
            {
              name: 'Designer Hangout',
              url: 'https://www.designerhangout.co',
              type: 'community',
              description: 'Private community for product designers with job boards and resources'
            },
            {
              name: 'ADPList',
              url: 'https://adplist.org',
              type: 'community',
              description: 'Free mentorship from 20k+ design professionals worldwide'
            },
            {
              name: 'UX Collective',
              url: 'https://uxdesign.cc',
              type: 'community',
              description: 'Articles, discussions, and insights on design and UX'
            },
            {
              name: 'Reddit r/Design',
              url: 'https://www.reddit.com/r/Design',
              type: 'community',
              description: 'Design discussion, feedback, and community support'
            }
          ]
        },
        {
          name: 'Collaboration Platforms',
          resources: [
            {
              name: 'Miro',
              url: 'https://miro.com',
              type: 'tool',
              description: 'Unlimited whiteboarding for design thinking and workshops'
            },
            {
              name: 'Notion',
              url: 'https://www.notion.so',
              type: 'tool',
              description: 'All-in-one workspace for documentation and project management'
            },
            {
              name: 'Discord Communities',
              url: 'https://discord.com',
              type: 'community',
              description: 'Real-time design collaboration and community channels'
            }
          ]
        }
      ]
    }
  };

  // Category navigation
  const categories = [
    { id: 'all', label: 'All Resources', icon: Sparkles },
    { id: 'fundamentals', label: 'Fundamentals', icon: BookOpen },
    { id: 'graphicDesign', label: 'Graphic Design', icon: Palette },
    { id: 'uiux', label: 'UI/UX', icon: Layout },
    { id: 'webDesign', label: 'Web Design', icon: Globe },
    { id: 'motion3d', label: '3D & Motion', icon: Box },
    { id: 'inspiration', label: 'Inspiration', icon: Eye },
    { id: 'assets', label: 'Assets', icon: ImageIcon },
    { id: 'branding', label: 'Branding', icon: Award },
    { id: 'learning', label: 'Learning', icon: BookOpen },
    { id: 'community', label: 'Community', icon: Users }
  ];

  // Resource type badges
  const getTypeBadge = (type) => {
    const badges = {
      youtube: { icon: Youtube, color: '#ef4444', label: 'YouTube' },
      tool: { icon: Zap, color: '#3b82f6', label: 'Tool' },
      course: { icon: BookOpen, color: '#10b981', label: 'Course' },
      resource: { icon: Download, color: '#8b5cf6', label: 'Resource' },
      inspiration: { icon: Star, color: '#f59e0b', label: 'Inspiration' },
      asset: { icon: ImageIcon, color: '#ec4899', label: 'Asset' },
      community: { icon: Users, color: '#06b6d4', label: 'Community' }
    };
    return badges[type] || badges.resource;
  };

  // Filter resources based on search and category
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

  // Toggle section expansion
  const toggleSection = (categoryKey, sectionName) => {
    const key = `${categoryKey}-${sectionName}`;
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Copy URL to clipboard
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
              <Palette className="w-7 h-7 text-[#f59e0b]" />
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Design Resource Hub</h1>
                <p className={`text-xs mt-0.5 hidden sm:block ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                  Comprehensive design learning directory
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
                  className={`pl-10 pr-4 py-2 w-64 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#f59e0b] ${
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
              className={`w-full pl-10 pr-4 py-2 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#f59e0b] ${
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
            { label: 'Total Resources', value: totalResources, icon: Sparkles },
            { label: 'Categories', value: Object.keys(resources).length, icon: Layout },
            { label: 'Free Tools', value: '95%', icon: TrendingUp },
            { label: 'Updated', value: 'Nov 2025', icon: Zap }
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border text-center ${
                darkMode ? 'bg-[#0f0f0f] border-[#1a1a1a]' : 'bg-white border-gray-200'
              }`}
            >
              <stat.icon className="w-5 h-5 mx-auto mb-2 text-[#f59e0b]" />
              <div className="text-xl sm:text-2xl font-semibold text-[#f59e0b]">{stat.value}</div>
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
                            ? 'bg-[#f59e0b]/10 text-[#f59e0b]'
                            : 'bg-orange-50 text-orange-600'
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
                                ? 'bg-[#f59e0b]/10 text-[#f59e0b]'
                                : 'bg-orange-50 text-orange-600'
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
                          const isExpanded = expandedSections[sectionKey] !== false; // Default expanded

                          return (
                            <div key={sectionIdx}>
                              <button
                                onClick={() => toggleSection(categoryKey, section.name)}
                                className={`w-full flex items-center justify-between mb-4 group ${
                                  darkMode ? 'hover:text-[#f59e0b]' : 'hover:text-orange-600'
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
                                                  darkMode ? 'group-hover:text-[#f59e0b]' : 'group-hover:text-orange-600'
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
              Last updated: November 2025 • {totalResources} curated design resources
            </p>
            <div className="flex items-center gap-2 text-xs">
              <span className={darkMode ? 'text-gray-500' : 'text-gray-600'}>
                Built for designers, by designers
              </span>
              <Palette className="w-4 h-4 text-[#f59e0b]" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DesignResourceHub;
