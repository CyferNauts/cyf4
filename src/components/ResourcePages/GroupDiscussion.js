import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Moon, Sun, ExternalLink, Copy, ChevronDown, ChevronRight,
  Users, MessageCircle, Brain, Target, Zap, BookOpen, Video, Download,
  Star, TrendingUp, Menu, X, Filter, Award, Globe, Lightbulb,
  CheckCircle, AlertCircle, Clock, BarChart, FileText, Youtube,
  Briefcase, GraduationCap, Mic, Volume2, Eye, ThumbsUp, Layers
} from 'lucide-react';

const GroupDiscussionHub = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedSections, setExpandedSections] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState('');

  // Comprehensive GD resource database
  const resources = {
    fundamentals: {
      title: 'GD Fundamentals',
      icon: BookOpen,
      color: '#3b82f6',
      sections: [
        {
          name: 'What is Group Discussion?',
          resources: [
            {
              name: 'GeekTonight - Complete GD Guide',
              url: 'https://www.geektonight.com/group-discussion',
              type: 'resource',
              description: 'Comprehensive guide covering GD objectives, types, prerequisites, and evaluation criteria'
            },
            {
              name: 'GraduatesFirst - GD Exercises 2025/26',
              url: 'https://www.graduatesfirst.com/assessment-day-2/group-discussion-exercises',
              type: 'resource',
              description: 'Full guide with 5 key ways to stand out in group discussions with practical examples'
            },
            {
              name: 'UniAthena - How to Prepare for GD',
              url: 'https://uniathena.com/how-to-prepare-for-a-group-discussion',
              type: 'resource',
              description: 'Step-by-step preparation guide covering research, current events, and listening skills'
            },
            {
              name: 'LinkedIn - Mastering GD Skills',
              url: 'https://www.linkedin.com/pulse/mastering-group-discussion-skills-key-professional-success-s-glmdc',
              type: 'resource',
              description: 'Professional success strategies focusing on composure, tone, and respectful interaction'
            }
          ]
        },
        {
          name: 'Evaluation Criteria',
          resources: [
            {
              name: 'Communication Skills Assessment',
              url: 'https://www.geektonight.com/group-discussion',
              type: 'resource',
              description: 'How assessors evaluate message delivery, body language, and listening skills'
            },
            {
              name: 'Analytical & Interpretative Skills',
              url: 'https://www.geektonight.com/group-discussion',
              type: 'resource',
              description: 'Evaluation of fact usage, problem analysis, and solution suggestions'
            },
            {
              name: 'Interpersonal Skills Evaluation',
              url: 'https://lis.academy/communication-skills/group-discussions-evaluation-key-criteria',
              type: 'resource',
              description: 'LIS Academy guide on key criteria evaluators look for in group interactions'
            },
            {
              name: 'Persuasive Skills Assessment',
              url: 'https://www.geektonight.com/group-discussion',
              type: 'resource',
              description: 'How influencing skills are measured: persuasion, conviction, and behavioral impact'
            }
          ]
        },
        {
          name: 'GD Types & Formats',
          resources: [
            {
              name: 'Factual Topics',
              url: 'https://www.groupdiscussionideas.com/gd-topics-factual',
              type: 'resource',
              description: 'Discussions based on facts, data, and objective information requiring knowledge'
            },
            {
              name: 'Controversial Topics',
              url: 'https://www.groupdiscussionideas.com/gd-topics-controversial',
              type: 'resource',
              description: 'Debatable subjects with multiple perspectives requiring balanced argumentation'
            },
            {
              name: 'Abstract Topics',
              url: 'https://www.groupdiscussionideas.com/gd-topics-abstract',
              type: 'resource',
              description: 'Philosophical themes requiring creative thinking and lateral interpretation'
            },
            {
              name: 'Case Study GDs',
              url: 'https://www.mbacrystalball.com/group-discussion/case-study',
              type: 'resource',
              description: 'Business scenarios requiring analytical problem-solving and decision-making'
            }
          ]
        }
      ]
    },
    preparation: {
      title: 'GD Preparation Strategy',
      icon: Target,
      color: '#10b981',
      sections: [
        {
          name: 'Top GD Tips',
          resources: [
            {
              name: 'Indeed - 15 Top GD Tips',
              url: 'https://in.indeed.com/career-advice/career-development/group-discussion-tips',
              type: 'resource',
              description: 'Practice strategies, speaking skills, confidence building, concise language, and example usage'
            },
            {
              name: 'Simplilearn - GD Best Practices',
              url: 'https://www.simplilearn.com/group-discussion-tips-article',
              type: 'resource',
              description: 'Top group discussion topics and interview best practices for 2025'
            },
            {
              name: 'PlanetSpark - GD Starting Lines',
              url: 'https://www.planetspark.in/communication-skills/group-discussion-starting-lines-examples',
              type: 'resource',
              description: 'Effective opening lines, templates, examples, and powerful tips with FAQs'
            },
            {
              name: 'Body Language & Eye Contact',
              url: 'https://www.planetspark.in/communication-skills/group-discussion-starting-lines-examples',
              type: 'resource',
              description: 'Maintain eye contact, sit upright, nod occasionally, use hand gestures wisely'
            }
          ]
        },
        {
          name: 'Communication Frameworks',
          resources: [
            {
              name: 'PEEL Method',
              url: 'https://www.planetspark.in/communication-skills/group-discussion-starting-lines-examples',
              type: 'resource',
              description: 'Point – Evidence – Explanation – Link framework for logical arguments'
            },
            {
              name: 'CAUSE-EFFECT-SOLUTION',
              url: 'https://www.planetspark.in/communication-skills/group-discussion-starting-lines-examples',
              type: 'resource',
              description: 'Structured approach analyzing problems, impacts, and solutions systematically'
            },
            {
              name: 'Past-Present-Future Analysis',
              url: 'https://www.planetspark.in/communication-skills/group-discussion-starting-lines-examples',
              type: 'resource',
              description: 'Temporal framework examining evolution, current state, and future projections'
            },
            {
              name: 'STAR Method for Examples',
              url: 'https://www.themuse.com/advice/star-interview-method',
              type: 'resource',
              description: 'Situation-Task-Action-Result structure for presenting compelling examples'
            }
          ]
        },
        {
          name: 'Active Listening Skills',
          resources: [
            {
              name: 'Don\'t Interrupt, Listen Actively',
              url: 'https://www.planetspark.in/communication-skills/group-discussion-starting-lines-examples',
              type: 'resource',
              description: 'Show genuine engagement with phrases like "I agree with your point, and I\'d like to add..."'
            },
            {
              name: 'MindTools - Active Listening',
              url: 'https://www.mindtools.com/CommSkll/ActiveListening.htm',
              type: 'resource',
              description: 'Critical skill guide for understanding and responding effectively in discussions'
            },
            {
              name: 'Building on Others\' Points',
              url: 'https://in.indeed.com/career-advice/career-development/group-discussion-tips',
              type: 'resource',
              description: 'Introduce different viewpoints that enhance understanding and demonstrate respect'
            }
          ]
        },
        {
          name: 'Role Strategies',
          resources: [
            {
              name: 'Being the Initiator',
              url: 'https://www.planetspark.in/communication-skills/group-discussion-starting-lines-examples',
              type: 'resource',
              description: 'Starting the discussion with strong opening lines and setting the tone'
            },
            {
              name: 'Being the Moderator',
              url: 'https://www.graduatesfirst.com/assessment-day-2/group-discussion-exercises',
              type: 'resource',
              description: 'Guiding discussion flow, giving opportunities, and maintaining focus'
            },
            {
              name: 'Being the Summarizer',
              url: 'https://www.planetspark.in/communication-skills/group-discussion-starting-lines-examples',
              type: 'resource',
              description: 'Recap main points with balanced conclusions reflecting listening and strategic thinking'
            },
            {
              name: 'Being the Contributor',
              url: 'https://in.indeed.com/career-advice/career-development/group-discussion-tips',
              type: 'resource',
              description: 'Regular engagement with fresh insights and relevant contributions'
            }
          ]
        }
      ]
    },
    topics: {
      title: 'GD Topics Database',
      icon: FileText,
      color: '#8b5cf6',
      sections: [
        {
          name: 'Current Affairs 2025',
          resources: [
            {
              name: 'GD Ideas - 234+ Current Affairs Topics',
              url: 'https://www.groupdiscussionideas.com/gd-topics-on-current-affairs-with-answers',
              type: 'resource',
              description: 'Global energy crisis, war crimes, Sri Lanka\'s economic crisis, rupee internationalization, ABG shipyard scam'
            },
            {
              name: 'The Hindu - Daily Current Affairs',
              url: 'https://www.thehindu.com',
              type: 'resource',
              description: 'Essential newspaper reading for factual and current affair GD topics'
            },
            {
              name: 'Economic Times - Business News',
              url: 'https://economictimes.indiatimes.com',
              type: 'resource',
              description: 'Stay updated on economic policies, market trends, and business developments'
            },
            {
              name: 'BBC News - Global Affairs',
              url: 'https://www.bbc.com/news',
              type: 'resource',
              description: 'International perspectives on global events and geopolitical issues'
            }
          ]
        },
        {
          name: 'MBA GD Topics 2025',
          resources: [
            {
              name: 'Jaro Education - 95 MBA GD Topics',
              url: 'https://www.jaroeducation.com/blog/top-group-discussion-topics-for-mba-aspirants',
              type: 'resource',
              description: 'Current Affairs, Business, Technology, Social Issues, Abstract Themes, Global Challenges'
            },
            {
              name: 'Climate Change Topics',
              url: 'https://www.jaroeducation.com/blog/top-group-discussion-topics-for-mba-aspirants',
              type: 'resource',
              description: 'Global Crisis or Local Responsibility, Green Energy, India\'s Net Zero Goals, sustainable fashion'
            },
            {
              name: 'Technology Topics',
              url: 'https://www.jaroeducation.com/blog/top-group-discussion-topics-for-mba-aspirants',
              type: 'resource',
              description: 'AI replacing jobs, automation, digital transformation, cybersecurity, blockchain'
            },
            {
              name: 'Politics & Governance',
              url: 'https://www.jaroeducation.com/blog/top-group-discussion-topics-for-mba-aspirants',
              type: 'resource',
              description: 'Democracy vs Autocracy, Uniform Civil Code, media freedom, youth in politics, electoral reforms'
            }
          ]
        },
        {
          name: 'Topic Categories',
          resources: [
            {
              name: 'Social Issues',
              url: 'https://www.simplilearn.com/group-discussion-tips-article',
              type: 'resource',
              description: 'Gender equality, education reform, healthcare access, unemployment, poverty'
            },
            {
              name: 'Economic Topics',
              url: 'https://www.simplilearn.com/group-discussion-tips-article',
              type: 'resource',
              description: 'Inflation, GDP growth, taxation policies, startup ecosystem, globalization'
            },
            {
              name: 'Abstract Topics',
              url: 'https://www.simplilearn.com/group-discussion-tips-article',
              type: 'resource',
              description: 'When the going gets tough, the tough get going; Red vs Blue; Circle of life'
            },
            {
              name: 'Environment & Sustainability',
              url: 'https://www.jaroeducation.com/blog/top-group-discussion-topics-for-mba-aspirants',
              type: 'resource',
              description: 'Single-use plastics ban, water scarcity, carbon credits, deforestation, circular economy'
            }
          ]
        },
        {
          name: 'Practice Topics',
          resources: [
            {
              name: 'IndiaBix - 1000+ GD Topics',
              url: 'https://www.indiabix.com/group-discussion',
              type: 'resource',
              description: 'Sample discussions across factual, controversial, and abstract categories'
            },
            {
              name: 'Career Anna - GD Topics',
              url: 'https://www.careeranna.com/group-discussion-topics',
              type: 'resource',
              description: 'Curated topics for MBA, banking, and corporate job interviews'
            },
            {
              name: 'MBA Crystal Ball - Topic Bank',
              url: 'https://www.mbacrystalball.com/group-discussion',
              type: 'resource',
              description: 'MBA admission GD preparation with strategies and evaluation criteria'
            }
          ]
        }
      ]
    },
    courses: {
      title: 'GD Training Courses',
      icon: GraduationCap,
      color: '#f59e0b',
      sections: [
        {
          name: 'Specialized GD Courses',
          resources: [
            {
              name: 'TCS iON - Stand Out in Group Discussion',
              url: 'https://www.tcsion.com/courses/interview-and-job-prep/stand-out-in-group-discussion',
              type: 'course',
              description: 'Comprehensive free course covering strategies, leadership, and evaluation parameters'
            },
            {
              name: 'Let\'s Talk - GD Techniques',
              url: 'https://www.letstalkpodcast.com/product/group-discussions-techniques',
              type: 'course',
              description: 'Complete CD/digital course covering GD preparation, types, strategies, mock sessions - ₹1,200'
            },
            {
              name: 'NIEL - GD & Personal Interview Skills',
              url: 'http://niel.in/g.d-personal-interview-skills.php',
              type: 'course',
              description: '3-decade experienced trainers offering practical GD sessions with personal feedback'
            },
            {
              name: 'VidyaBridge - Public Speaking & GD Training',
              url: 'https://vidyabridge.net/PublicSpeakingAndGroupDiscussion.aspx',
              type: 'course',
              description: 'Corporate training program combining public speaking with group discussion techniques'
            }
          ]
        },
        {
          name: 'Communication Skills Courses',
          resources: [
            {
              name: 'PlanetSpark - GD Mastery Program',
              url: 'https://www.planetspark.in',
              type: 'course',
              description: 'Train in every GD role from initiator to summarizer through debates and real-time practice'
            },
            {
              name: 'upGrad - Communication Fundamentals',
              url: 'https://www.upgrad.com/courses/communication-fundamentals',
              type: 'course',
              description: '1-hour crash course emphasizing clarity, confidence, and non-verbal cues - Free with certificate'
            },
            {
              name: 'Coursera - Business Communication',
              url: 'https://www.coursera.org/courses?query=business%20communication',
              type: 'course',
              description: 'University courses on professional communication and group interaction strategies'
            },
            {
              name: 'LinkedIn Learning - Team Communication',
              url: 'https://www.linkedin.com/learning/topics/team-communication',
              type: 'course',
              description: 'Courses on effective team interaction, conflict resolution, collaborative leadership - $39.99/month'
            }
          ]
        },
        {
          name: 'Soft Skills Development',
          resources: [
            {
              name: 'IBM - People & Soft Skills Specialization',
              url: 'https://www.coursera.org/specializations/people-soft-skills-professional-success',
              type: 'course',
              description: 'Professional soft skills including teamwork and collaboration from IBM on Coursera'
            },
            {
              name: 'Alison - Interpersonal Skills',
              url: 'https://alison.com/tag/interpersonal-skills',
              type: 'course',
              description: 'Free CPD-accredited courses on communication, teamwork, and conflict resolution'
            },
            {
              name: 'Udemy - Communication Skills Mastery',
              url: 'https://www.udemy.com/topic/communication-skills',
              type: 'course',
              description: 'Comprehensive communication courses from $12.99 covering verbal, non-verbal, and written skills'
            }
          ]
        }
      ]
    },
    practice: {
      title: 'Mock GD & Practice',
      icon: Users,
      color: '#ec4899',
      sections: [
        {
          name: 'Mock GD Platforms',
          resources: [
            {
              name: 'Zoom/Google Meet - Virtual GD Practice',
              url: 'https://zoom.us',
              type: 'tool',
              description: 'Organize online group discussion practice sessions with friends and mentors'
            },
            {
              name: 'Microsoft Teams - Collaboration',
              url: 'https://www.microsoft.com/microsoft-teams',
              type: 'tool',
              description: 'Virtual meeting platform for remote GD practice with recording features'
            },
            {
              name: 'Discord - Community Practice',
              url: 'https://discord.com',
              type: 'tool',
              description: 'Create dedicated servers for regular GD practice with peer groups'
            },
            {
              name: 'Whereby - Simple Video Meetings',
              url: 'https://whereby.com',
              type: 'tool',
              description: 'Browser-based video conferencing for quick GD practice sessions - Free tier available'
            }
          ]
        },
        {
          name: 'Recording & Self-Analysis',
          resources: [
            {
              name: 'Loom - Video Recording',
              url: 'https://www.loom.com',
              type: 'tool',
              description: 'Record your GD practice sessions to review body language and communication - Free 25 videos/month'
            },
            {
              name: 'OBS Studio - Screen Recording',
              url: 'https://obsproject.com',
              type: 'tool',
              description: 'Free open-source recording software for capturing practice sessions'
            },
            {
              name: 'Otter.ai - Transcription',
              url: 'https://otter.ai',
              type: 'tool',
              description: 'AI transcription to analyze speech patterns, word choice, and contribution frequency - Free 600 min/month'
            },
            {
              name: 'Descript - Audio/Video Editing',
              url: 'https://www.descript.com',
              type: 'tool',
              description: 'Edit and analyze recorded GD sessions with transcription and collaboration features'
            }
          ]
        },
        {
          name: 'Feedback & Improvement Tools',
          resources: [
            {
              name: 'Orai - AI Speech Coach',
              url: 'https://www.orai.com',
              type: 'tool',
              description: 'AI analysis of filler words, pace, energy, and clarity for private practice sessions'
            },
            {
              name: 'LikeSo - Filler Word Tracker',
              url: 'https://www.likeso.com',
              type: 'tool',
              description: 'Track and reduce filler words (um, like, so) with real-time feedback - $2.99'
            },
            {
              name: 'Speeko - Public Speaking Coach',
              url: 'https://www.speeko.co',
              type: 'tool',
              description: 'Mobile speech coach analyzing clarity, confidence, and communication patterns'
            }
          ]
        }
      ]
    },
    strategies: {
      title: 'Advanced Strategies',
      icon: Brain,
      color: '#14b8a6',
      sections: [
        {
          name: 'Content Strategies',
          resources: [
            {
              name: 'Support with Examples',
              url: 'https://in.indeed.com/career-advice/career-development/group-discussion-tips',
              type: 'resource',
              description: 'Use facts, statistics, real-world examples to demonstrate analytical skills and support points'
            },
            {
              name: 'Choose Relevant Points',
              url: 'https://in.indeed.com/career-advice/career-development/group-discussion-tips',
              type: 'resource',
              description: 'Focus on fresh insights rather than repetition, introduce different viewpoints'
            },
            {
              name: 'Use Concise Language',
              url: 'https://in.indeed.com/career-advice/career-development/group-discussion-tips',
              type: 'resource',
              description: 'Express ideas logically and structured, guide discussion back when off-topic'
            },
            {
              name: 'Balance Multiple Perspectives',
              url: 'https://www.graduatesfirst.com/assessment-day-2/group-discussion-exercises',
              type: 'resource',
              description: 'Present balanced views acknowledging strengths and weaknesses of different arguments'
            }
          ]
        },
        {
          name: 'Interpersonal Strategies',
          resources: [
            {
              name: 'Stay Calm Under Pressure',
              url: 'https://www.planetspark.in/communication-skills/group-discussion-starting-lines-examples',
              type: 'resource',
              description: 'Remain composed even when disagreed with or interrupted - reflects maturity and professionalism'
            },
            {
              name: 'Respectful Disagreement',
              url: 'https://www.linkedin.com/pulse/mastering-group-discussion-skills-key-professional-success-s-glmdc',
              type: 'resource',
              description: 'Keep tone positive, avoid defensiveness, focus on constructive dialogue'
            },
            {
              name: 'Collaborative Leadership',
              url: 'https://www.graduatesfirst.com/assessment-day-2/group-discussion-exercises',
              type: 'resource',
              description: 'Lead without dominating, encourage quieter members, build consensus'
            },
            {
              name: 'Conflict Resolution',
              url: 'https://www.mindtools.com/pages/article/newLDR_81.htm',
              type: 'resource',
              description: 'MindTools guide to managing disagreements and maintaining discussion flow'
            }
          ]
        },
        {
          name: 'Time Management',
          resources: [
            {
              name: 'Speak with Clarity and Pace',
              url: 'https://www.planetspark.in/communication-skills/group-discussion-starting-lines-examples',
              type: 'resource',
              description: 'Avoid speaking too fast or softly, enunciate well, maintain followable pace'
            },
            {
              name: 'Timely Interventions',
              url: 'https://www.graduatesfirst.com/assessment-day-2/group-discussion-exercises',
              type: 'resource',
              description: 'Know when to speak, when to listen, and when to guide discussion forward'
            },
            {
              name: 'Efficient Summarization',
              url: 'https://www.planetspark.in/communication-skills/group-discussion-starting-lines-examples',
              type: 'resource',
              description: 'Recap main points concisely, state balanced conclusions reflecting key themes'
            }
          ]
        }
      ]
    },
    bodyLanguage: {
      title: 'Body Language & Presence',
      icon: Eye,
      color: '#ef4444',
      sections: [
        {
          name: 'Non-Verbal Communication',
          resources: [
            {
              name: 'Body Language Essentials',
              url: 'https://www.planetspark.in/communication-skills/group-discussion-starting-lines-examples',
              type: 'resource',
              description: 'Maintain eye contact, sit upright, nod occasionally, use hand gestures to support points'
            },
            {
              name: 'Eye Contact Techniques',
              url: 'https://www.scienceofpeople.com/eye-contact',
              type: 'resource',
              description: 'Science of People guide to confident eye contact without staring or intimidation'
            },
            {
              name: 'Posture & Confidence',
              url: 'https://www.ted.com/talks/amy_cuddy_your_body_language_may_shape_who_you_are',
              type: 'youtube',
              description: 'Amy Cuddy\'s TED Talk on power poses and how body language shapes confidence'
            },
            {
              name: 'Avoid Nervous Habits',
              url: 'https://www.planetspark.in/communication-skills/group-discussion-starting-lines-examples',
              type: 'resource',
              description: 'Eliminate fidgeting, arm crossing, pen clicking, and other distracting behaviors'
            }
          ]
        },
        {
          name: 'Voice & Tone',
          resources: [
            {
              name: 'Voice Modulation Techniques',
              url: 'https://www.udemy.com/topic/voice-training',
              type: 'course',
              description: 'Professional voice coaching on pitch, tone, projection, and emphasis - From $12.99'
            },
            {
              name: 'Tone Management',
              url: 'https://www.linkedin.com/pulse/mastering-group-discussion-skills-key-professional-success-s-glmdc',
              type: 'resource',
              description: 'Keep tone positive, respectful, and assertive without aggression'
            },
            {
              name: 'Clear Articulation',
              url: 'https://www.engvid.com/english-resource/50-tongue-twisters',
              type: 'resource',
              description: '50 tongue twisters for improving articulation and speech clarity before GDs'
            }
          ]
        }
      ]
    },
    interview: {
      title: 'Interview & Assessment',
      icon: Briefcase,
      color: '#a855f7',
      sections: [
        {
          name: 'MBA Interview GDs',
          resources: [
            {
              name: 'MBA Crystal Ball - GD Prep',
              url: 'https://www.mbacrystalball.com/group-discussion',
              type: 'resource',
              description: 'MBA admission GD strategies, evaluation criteria, and expert tips'
            },
            {
              name: 'Pagalguy Forums - GD Section',
              url: 'https://www.pagalguy.com/group-discussion',
              type: 'community',
              description: 'Active MBA aspirant community discussing GD topics and sharing experiences'
            },
            {
              name: 'InsideIIM - GD WAT Experiences',
              url: 'https://www.insideiim.com/tag/group-discussion',
              type: 'resource',
              description: 'Real GD experiences from IIM and top B-school interviews'
            }
          ]
        },
        {
          name: 'Corporate Job GDs',
          resources: [
            {
              name: 'AmbitionBox - GD Resources',
              url: 'https://www.ambitionbox.com/info/group-discussion',
              type: 'resource',
              description: 'Company-specific GD topics and patterns with user-submitted experiences'
            },
            {
              name: 'Glassdoor - Interview Experiences',
              url: 'https://www.glassdoor.com/Interview',
              type: 'resource',
              description: 'Real interview questions and GD topics from 2M+ interviews across companies'
            },
            {
              name: 'Indeed - GD Interview Tips',
              url: 'https://in.indeed.com/career-advice/career-development/group-discussion-tips',
              type: 'resource',
              description: 'Professional guide to passing GD rounds and advancing to next stages'
            }
          ]
        },
        {
          name: 'Assessment Centers',
          resources: [
            {
              name: 'GraduatesFirst - Assessment Day Guide',
              url: 'https://www.graduatesfirst.com/assessment-day-2/group-discussion-exercises',
              type: 'resource',
              description: 'Complete guide to GD exercises in assessment centers with practical tips'
            },
            {
              name: 'AssessmentDay Practice',
              url: 'https://www.assessmentday.co.uk',
              type: 'tool',
              description: 'Online practice for assessment center exercises including group discussions'
            }
          ]
        }
      ]
    },
    communities: {
      title: 'Communities & Forums',
      icon: Users,
      color: '#06b6d4',
      sections: [
        {
          name: 'Online Communities',
          resources: [
            {
              name: 'r/interviews',
              url: 'https://www.reddit.com/r/interviews',
              type: 'community',
              description: 'Reddit community discussing interview techniques including group discussions'
            },
            {
              name: 'r/MBA',
              url: 'https://www.reddit.com/r/MBA',
              type: 'community',
              description: 'MBA aspirant community sharing GD experiences and preparation strategies'
            },
            {
              name: 'Pagalguy Community',
              url: 'https://www.pagalguy.com',
              type: 'community',
              description: 'Largest MBA preparation community in India with dedicated GD forums'
            },
            {
              name: 'Quora - GD Topics',
              url: 'https://www.quora.com/topic/Group-Discussion',
              type: 'community',
              description: 'Q&A platform with expert answers on GD preparation and strategies'
            }
          ]
        },
        {
          name: 'Practice Groups',
          resources: [
            {
              name: 'Toastmasters International',
              url: 'https://www.toastmasters.org',
              type: 'community',
              description: 'Find local clubs for communication practice and structured speaking - 16,000+ clubs globally'
            },
            {
              name: 'Meetup - Public Speaking Groups',
              url: 'https://www.meetup.com/topics/publicspeaking',
              type: 'community',
              description: 'Local groups organizing GD practice sessions and communication workshops'
            },
            {
              name: 'LinkedIn Groups - Communication Skills',
              url: 'https://www.linkedin.com/search/results/groups/?keywords=communication%20skills',
              type: 'community',
              description: 'Professional networking groups focused on business communication'
            }
          ]
        }
      ]
    },
    resources: {
      title: 'Books & Materials',
      icon: BookOpen,
      color: '#f97316',
      sections: [
        {
          name: 'Essential Reading',
          resources: [
            {
              name: 'How to Win Friends & Influence People',
              url: 'https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034',
              type: 'resource',
              description: 'Dale Carnegie\'s classic on interpersonal relationships and persuasive communication - 30M+ copies'
            },
            {
              name: 'Crucial Conversations',
              url: 'https://www.amazon.com/Crucial-Conversations-Talking-Stakes-Second/dp/0071771328',
              type: 'resource',
              description: 'Tools for handling high-stakes discussions with confidence and diplomacy'
            },
            {
              name: 'Never Split the Difference',
              url: 'https://www.amazon.com/Never-Split-Difference-Negotiating-Depended/dp/0062407805',
              type: 'resource',
              description: 'Chris Voss\' FBI negotiation tactics for effective communication and persuasion'
            },
            {
              name: 'The Charisma Myth',
              url: 'https://www.amazon.com/Charisma-Myth-Science-Personal-Magnetism/dp/1591845947',
              type: 'resource',
              description: 'Olivia Fox Cabane on developing presence, warmth, and influence'
            }
          ]
        },
        {
          name: 'GD Preparation Books',
          resources: [
            {
              name: 'Group Discussion & Personal Interview',
              url: 'https://www.amazon.in/s?k=group+discussion+personal+interview',
              type: 'resource',
              description: 'Specialized books on GD techniques, common topics, and interview strategies'
            },
            {
              name: 'The Quick and Easy Way to Effective Speaking',
              url: 'https://www.amazon.com/Quick-Easy-Way-Effective-Speaking/dp/067974095X',
              type: 'resource',
              description: 'Dale Carnegie on developing speaking confidence and audience engagement'
            }
          ]
        },
        {
          name: 'Online Resources',
          resources: [
            {
              name: 'Group Discussion Ideas',
              url: 'https://www.groupdiscussionideas.com',
              type: 'resource',
              description: 'Comprehensive website with 500+ GD topics, tips, and sample discussions'
            },
            {
              name: 'CrazyEngineers - GD Topics',
              url: 'https://www.crazyengineers.com/threads/group-discussion-topics.69318',
              type: 'resource',
              description: 'Engineering community forum with technical and general GD topics'
            },
            {
              name: 'Freshersworld - GD Guide',
              url: 'https://www.freshersworld.com/group-discussion-topics',
              type: 'resource',
              description: 'Fresher-focused GD preparation guide with campus placement topics'
            }
          ]
        }
      ]
    }
  };

  // Category navigation
  const categories = [
    { id: 'all', label: 'All Resources', icon: MessageCircle },
    { id: 'fundamentals', label: 'GD Fundamentals', icon: BookOpen },
    { id: 'preparation', label: 'Preparation', icon: Target },
    { id: 'topics', label: 'Topics Database', icon: FileText },
    { id: 'courses', label: 'Training Courses', icon: GraduationCap },
    { id: 'practice', label: 'Mock GD', icon: Users },
    { id: 'strategies', label: 'Strategies', icon: Brain },
    { id: 'bodyLanguage', label: 'Body Language', icon: Eye },
    { id: 'interview', label: 'Interview GDs', icon: Briefcase },
    { id: 'communities', label: 'Communities', icon: Users },
    { id: 'resources', label: 'Books & Materials', icon: BookOpen }
  ];

  // Resource type badges
  const getTypeBadge = (type) => {
    const badges = {
      tool: { icon: Zap, color: '#3b82f6', label: 'Tool' },
      course: { icon: GraduationCap, color: '#10b981', label: 'Course' },
      youtube: { icon: Youtube, color: '#ef4444', label: 'YouTube' },
      resource: { icon: FileText, color: '#8b5cf6', label: 'Resource' },
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
              <Users className="w-7 h-7 text-[#10b981]" />
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Group Discussion Mastery Hub</h1>
                <p className={`text-xs mt-0.5 hidden sm:block ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                  Complete GD preparation & communication excellence
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
                  className={`pl-10 pr-4 py-2 w-64 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#10b981] ${
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
              className={`w-full pl-10 pr-4 py-2 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#10b981] ${
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
            { label: 'Total Resources', value: totalResources, icon: MessageCircle },
            { label: 'Categories', value: Object.keys(resources).length, icon: Layers },
            { label: 'GD Topics', value: '1000+', icon: FileText },
            { label: 'Updated', value: 'Nov 2025', icon: Zap }
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border text-center ${
                darkMode ? 'bg-[#0f0f0f] border-[#1a1a1a]' : 'bg-white border-gray-200'
              }`}
            >
              <stat.icon className="w-5 h-5 mx-auto mb-2 text-[#10b981]" />
              <div className="text-xl sm:text-2xl font-semibold text-[#10b981]">{stat.value}</div>
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
                            ? 'bg-[#10b981]/10 text-[#10b981]'
                            : 'bg-green-50 text-green-600'
                          : darkMode
                            ? 'hover:bg-[#1a1a1a] text-gray-400'
                            : 'hover:bg-gray-50 text-gray-600'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium text-xs">{category.label}</span>
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
                                ? 'bg-[#10b981]/10 text-[#10b981]'
                                : 'bg-green-50 text-green-600'
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
                                  darkMode ? 'hover:text-[#10b981]' : 'hover:text-green-600'
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
                                                  darkMode ? 'group-hover:text-[#10b981]' : 'group-hover:text-green-600'
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
              Last updated: November 2025 • {totalResources} curated GD resources • 1000+ practice topics
            </p>
            <div className="flex items-center gap-2 text-xs">
              <span className={darkMode ? 'text-gray-500' : 'text-gray-600'}>
                Excel in every discussion, lead with confidence
              </span>
              <Users className="w-4 h-4 text-[#10b981]" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GroupDiscussionHub;
