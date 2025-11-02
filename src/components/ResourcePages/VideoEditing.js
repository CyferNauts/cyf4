import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Moon, Sun, ExternalLink, Copy, ChevronDown, ChevronRight,
  Video, Film, Scissors, Palette, Music, Image as ImageIcon, Zap,
  Monitor, Play, Download, Star, TrendingUp, Menu, X, Filter,
  Layers, Sparkles, BookOpen, Youtube, Users, Package, Wand2,
  Settings, Globe, Award, MessageSquare, Headphones, FileVideo
} from 'lucide-react';

const VideoEditingResourceHub = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedSections, setExpandedSections] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState('');

  // Comprehensive video editing resource database
  const resources = {
    software: {
      title: 'Video Editing Software',
      icon: Video,
      color: '#3b82f6',
      sections: [
        {
          name: 'Professional Editing Software',
          resources: [
            {
              name: 'Adobe Premiere Pro',
              url: 'https://www.adobe.com/products/premiere.html',
              type: 'tool',
              description: 'Industry-standard NLE with multi-cam editing, color grading, VR support - $22.99/month Creative Cloud subscription'
            },
            {
              name: 'Final Cut Pro',
              url: 'https://www.apple.com/final-cut-pro',
              type: 'tool',
              description: 'Apple\'s magnetic timeline editor optimized for Mac with M-series chip acceleration - $299 one-time'
            },
            {
              name: 'DaVinci Resolve',
              url: 'https://www.blackmagicdesign.com/products/davinciresolve',
              type: 'tool',
              description: 'Hollywood-grade free editor with professional color grading, Fusion VFX, Fairlight audio - Studio $299'
            },
            {
              name: 'Avid Media Composer',
              url: 'https://www.avid.com/media-composer',
              type: 'tool',
              description: 'Film and TV industry standard with advanced trim tools and collaboration - $23.99/month or free First version'
            },
            {
              name: 'Vegas Pro',
              url: 'https://www.vegascreativesoftware.com',
              type: 'tool',
              description: 'Windows-exclusive with GPU acceleration, nested timelines, advanced audio - $399 perpetual license'
            },
            {
              name: 'Lightworks',
              url: 'https://www.lwks.com',
              type: 'tool',
              description: 'Free professional NLE used in Oscar-winning films - Pro version $25/month with expanded export formats'
            }
          ]
        },
        {
          name: 'Beginner-Friendly & Free Software',
          resources: [
            {
              name: 'CapCut',
              url: 'https://www.capcut.com',
              type: 'tool',
              description: 'Cross-platform free editor with AI tools, auto-captions, text-to-speech - $7.99/month Pro removes watermark'
            },
            {
              name: 'PowerDirector',
              url: 'https://www.cyberlink.com/products/powerdirector',
              type: 'tool',
              description: 'Fast rendering with AI motion tracking, green screen, speech-to-text - Free with watermark, $5/month premium'
            },
            {
              name: 'Clipchamp',
              url: 'https://clipchamp.com',
              type: 'tool',
              description: 'Microsoft\'s browser-based editor with templates, screen recording, brand kit - Free plan available'
            },
            {
              name: 'Shotcut',
              url: 'https://shotcut.org',
              type: 'tool',
              description: 'Open-source cross-platform editor with 4K support, wide codec compatibility - Completely free'
            },
            {
              name: 'OpenShot',
              url: 'https://www.openshot.org',
              type: 'tool',
              description: 'Simple open-source editor with drag-drop interface, 3D animations - Free on Windows, Mac, Linux'
            },
            {
              name: 'Kdenlive',
              url: 'https://kdenlive.org',
              type: 'tool',
              description: 'Open-source multi-track editor with effects, transitions, proxy editing - Free for all platforms'
            }
          ]
        },
        {
          name: 'Online & Mobile Editors',
          resources: [
            {
              name: 'Canva Video Editor',
              url: 'https://www.canva.com/video-editor',
              type: 'tool',
              description: 'Drag-and-drop online editor with templates, stock assets, brand kit - Free with Pro at $12.99/month'
            },
            {
              name: 'Adobe Express',
              url: 'https://www.adobe.com/express/feature/video/editor',
              type: 'tool',
              description: 'Quick online video creator with Adobe Stock integration and templates - Free tier available'
            },
            {
              name: 'Descript',
              url: 'https://www.descript.com',
              type: 'tool',
              description: 'Text-based video editing with AI filler word removal, transcription - $12/month for watermark-free 1080p'
            },
            {
              name: 'VEED.io',
              url: 'https://www.veed.io',
              type: 'tool',
              description: 'Browser-based editor with auto-subtitles, screen recording, collaboration tools'
            },
            {
              name: 'InShot',
              url: 'https://inshot.com',
              type: 'tool',
              description: 'Mobile-first editing for Instagram, TikTok, YouTube with effects and music'
            }
          ]
        },
        {
          name: 'Specialized & Niche Tools',
          resources: [
            {
              name: 'Blender',
              url: 'https://www.blender.org',
              type: 'tool',
              description: 'Free 3D software with built-in video sequence editor for motion graphics and VFX'
            },
            {
              name: 'HitFilm',
              url: 'https://fxhome.com/hitfilm',
              type: 'tool',
              description: 'VFX and editing combo with 190+ effects, 3D compositing - Free version available'
            },
            {
              name: 'Wondershare Filmora',
              url: 'https://filmora.wondershare.com',
              type: 'tool',
              description: 'Easy-to-use with AI features, transitions, built-in effects - $49.99/year subscription'
            },
            {
              name: 'VideoPad',
              url: 'https://www.nchsoftware.com/videopad',
              type: 'tool',
              description: 'Simple editor for home users with 50+ effects and transitions - Free for non-commercial'
            }
          ]
        }
      ]
    },
    motionGraphics: {
      title: 'Motion Graphics & VFX',
      icon: Wand2,
      color: '#8b5cf6',
      sections: [
        {
          name: 'Motion Graphics Software',
          resources: [
            {
              name: 'Adobe After Effects',
              url: 'https://www.adobe.com/products/aftereffects.html',
              type: 'tool',
              description: 'Industry-standard motion graphics and VFX compositing with expressions and plugins - $22.99/month'
            },
            {
              name: 'Cinema 4D',
              url: 'https://www.maxon.net/cinema-4d',
              type: 'tool',
              description: '3D modeling and motion graphics optimized for broadcast design workflows'
            },
            {
              name: 'Cavalry',
              url: 'https://cavalry.scenegroup.co',
              type: 'tool',
              description: 'Procedural 2D animation tool with real-time playback and generative design'
            },
            {
              name: 'Apple Motion',
              url: 'https://www.apple.com/final-cut-pro/motion',
              type: 'tool',
              description: 'Real-time motion graphics for Mac with 3D objects and effects - $49.99 one-time'
            }
          ]
        },
        {
          name: 'Templates & Presets',
          resources: [
            {
              name: 'Envato Elements',
              url: 'https://elements.envato.com/video-templates',
              type: 'asset',
              description: 'Unlimited downloads of After Effects templates, Premiere Pro presets - $16.50/month'
            },
            {
              name: 'Motion Array',
              url: 'https://motionarray.com',
              type: 'asset',
              description: 'All-in-one with templates, stock footage, music, plugins - $29.99/month unlimited'
            },
            {
              name: 'Videohive',
              url: 'https://videohive.net',
              type: 'asset',
              description: 'Individual purchase marketplace for video templates, lower thirds, intros'
            },
            {
              name: 'Mixkit',
              url: 'https://mixkit.co/free-video-templates',
              type: 'asset',
              description: 'Free After Effects and Premiere Pro templates with no attribution required'
            },
            {
              name: 'Motion Design School Templates',
              url: 'https://motiondesign.school/products/free-templates',
              type: 'asset',
              description: 'Professional-grade free templates from motion design educators'
            }
          ]
        },
        {
          name: 'Plugins & Extensions',
          resources: [
            {
              name: 'Video Copilot',
              url: 'https://www.videocopilot.net',
              type: 'asset',
              description: 'Element 3D and other essential After Effects plugins with free tutorials'
            },
            {
              name: 'Red Giant',
              url: 'https://www.maxon.net/red-giant',
              type: 'asset',
              description: 'Magic Bullet, Trapcode, Universe plugins for color, VFX, and motion graphics'
            },
            {
              name: 'Boris FX',
              url: 'https://borisfx.com',
              type: 'asset',
              description: 'Sapphire, Continuum, Mocha Pro for professional effects and tracking'
            },
            {
              name: 'AEJuice',
              url: 'https://aejuice.com',
              type: 'asset',
              description: 'Free pack of 300+ After Effects presets, transitions, and sound effects'
            }
          ]
        }
      ]
    },
    stockAssets: {
      title: 'Stock Footage & Media',
      icon: FileVideo,
      color: '#10b981',
      sections: [
        {
          name: 'Free Stock Footage',
          resources: [
            {
              name: 'Pexels Videos',
              url: 'https://www.pexels.com/videos',
              type: 'asset',
              description: 'Free HD and 4K stock videos with simple licensing - no attribution required'
            },
            {
              name: 'Pixabay Videos',
              url: 'https://pixabay.com/videos',
              type: 'asset',
              description: '2.7M+ free videos and animations for commercial use with no signup'
            },
            {
              name: 'Mixkit',
              url: 'https://mixkit.co/free-stock-video',
              type: 'asset',
              description: 'High-quality free video clips curated by editors - updated daily'
            },
            {
              name: 'Videvo',
              url: 'https://www.videvo.net',
              type: 'asset',
              description: '100k+ free stock footage and motion graphics with attribution option'
            },
            {
              name: 'Coverr',
              url: 'https://coverr.co',
              type: 'asset',
              description: 'Beautiful free videos for website backgrounds and hero sections'
            },
            {
              name: 'Life of Vids',
              url: 'https://www.lifeofvids.com',
              type: 'asset',
              description: 'Free video clips released weekly in 4K for personal and commercial use'
            }
          ]
        },
        {
          name: 'Premium Stock Libraries',
          resources: [
            {
              name: 'Storyblocks',
              url: 'https://www.storyblocks.com',
              type: 'asset',
              description: 'Unlimited downloads subscription - footage, templates, audio, images from $15/month'
            },
            {
              name: 'Artgrid',
              url: 'https://artgrid.io',
              type: 'asset',
              description: 'Cinematic stock footage from top creators with exclusive catalog - $39/month'
            },
            {
              name: 'Shutterstock',
              url: 'https://www.shutterstock.com/video',
              type: 'asset',
              description: '30M+ HD and 4K clips with flexible licensing and AI search - $49/month for 10 clips'
            },
            {
              name: 'Adobe Stock',
              url: 'https://stock.adobe.com/video',
              type: 'asset',
              description: 'Integrated with Creative Cloud apps, Premium collection, editorial content'
            },
            {
              name: 'Getty Images',
              url: 'https://www.gettyimages.com/footage',
              type: 'asset',
              description: 'Premium editorial and creative footage with rights-managed licensing'
            }
          ]
        },
        {
          name: 'Specialized Footage',
          resources: [
            {
              name: 'Monzoom',
              url: 'https://www.monzoom.com',
              type: 'asset',
              description: 'Free slow-motion and time-lapse stock videos in HD and 4K'
            },
            {
              name: 'Dissolve',
              url: 'https://dissolve.com',
              type: 'asset',
              description: 'Curated premium footage from award-winning cinematographers'
            },
            {
              name: 'Pond5',
              url: 'https://www.pond5.com',
              type: 'asset',
              description: 'Largest media marketplace with 25M+ clips, pay-per-clip model'
            }
          ]
        }
      ]
    },
    audio: {
      title: 'Music & Sound Effects',
      icon: Headphones,
      color: '#f59e0b',
      sections: [
        {
          name: 'Free Royalty-Free Music',
          resources: [
            {
              name: 'YouTube Audio Library',
              url: 'https://www.youtube.com/audiolibrary',
              type: 'asset',
              description: 'Free music and sound effects from YouTube with filtering by genre, mood, duration'
            },
            {
              name: 'Mixkit Music',
              url: 'https://mixkit.co/free-stock-music',
              type: 'asset',
              description: 'Royalty-free tracks across all genres - no attribution required, unlimited downloads'
            },
            {
              name: 'Free Music Archive',
              url: 'https://freemusicarchive.org',
              type: 'asset',
              description: 'Curated collection of high-quality, legal audio downloads with CC licenses'
            },
            {
              name: 'Incompetech',
              url: 'https://incompetech.com',
              type: 'asset',
              description: 'Kevin MacLeod\'s 2,000+ tracks - free with attribution or $50 blanket license'
            },
            {
              name: 'Bensound',
              url: 'https://www.bensound.com',
              type: 'asset',
              description: 'Free music for video with attribution or $5/track for commercial without credits'
            },
            {
              name: 'Purple Planet',
              url: 'https://www.purple-planet.com',
              type: 'asset',
              description: 'Free background music for content creators with attribution requirement'
            }
          ]
        },
        {
          name: 'Premium Music Libraries',
          resources: [
            {
              name: 'Artlist',
              url: 'https://artlist.io',
              type: 'asset',
              description: 'Unlimited music licensing for life even after cancellation - $9.99/month'
            },
            {
              name: 'Epidemic Sound',
              url: 'https://www.epidemicsound.com',
              type: 'asset',
              description: 'Commercial and personal licenses with YouTube monetization clearance - $15/month'
            },
            {
              name: 'Soundstripe',
              url: 'https://www.soundstripe.com',
              type: 'asset',
              description: 'Unlimited downloads with music and SFX included - $15/month Creator plan'
            },
            {
              name: 'AudioJungle',
              url: 'https://audiojungle.net',
              type: 'asset',
              description: 'Individual track purchases from $1-$40 with flexible licensing'
            },
            {
              name: 'PremiumBeat',
              url: 'https://www.premiumbeat.com',
              type: 'asset',
              description: 'Curated music library by Shutterstock with simple pricing per track'
            }
          ]
        },
        {
          name: 'Sound Effects',
          resources: [
            {
              name: 'Freesound',
              url: 'https://freesound.org',
              type: 'asset',
              description: 'Collaborative database of 600k+ CC-licensed sounds uploaded by community'
            },
            {
              name: 'Zapsplat',
              url: 'https://www.zapsplat.com',
              type: 'asset',
              description: 'Free sound effects library with 100k+ SFX - attribution required or $5/month'
            },
            {
              name: 'BBC Sound Effects',
              url: 'https://sound-effects.bbcrewind.co.uk',
              type: 'asset',
              description: '33,000+ BBC archive sound effects for personal, educational, research use'
            },
            {
              name: 'Soundly',
              url: 'https://getsoundly.com',
              type: 'tool',
              description: 'Cloud sound effects library app with Premiere/Final Cut integration'
            }
          ]
        }
      ]
    },
    colorGrading: {
      title: 'Color Grading & LUTs',
      icon: Palette,
      color: '#ec4899',
      sections: [
        {
          name: 'Color Grading Tools',
          resources: [
            {
              name: 'DaVinci Resolve',
              url: 'https://www.blackmagicdesign.com/products/davinciresolve',
              type: 'tool',
              description: 'Free industry-leading color grading with HDR, color wheels, curves, qualifiers'
            },
            {
              name: 'Lumetri Color (Premiere Pro)',
              url: 'https://helpx.adobe.com/premiere-pro/using/color-workflows.html',
              type: 'tool',
              description: 'Built-in Premiere Pro panel with HSL secondary, curves, LUT support'
            },
            {
              name: 'FilmConvert Nitrate',
              url: 'https://www.filmconvert.com/nitrate',
              type: 'tool',
              description: 'Film emulation plugin with grain, camera profiles for DSLR/cinema cameras'
            },
            {
              name: 'Magic Bullet Looks',
              url: 'https://www.maxon.net/red-giant/magic-bullet-looks',
              type: 'tool',
              description: 'Color grading suite with 200+ preset looks and customizable tools'
            }
          ]
        },
        {
          name: 'Free LUTs',
          resources: [
            {
              name: 'Free LUTs - FixThePhoto',
              url: 'https://fixthephoto.com/lut-color-grading',
              type: 'asset',
              description: '30 free cinematic LUTs in .CUBE and .LOOK formats for Premiere, FCPX, DaVinci'
            },
            {
              name: 'RocketStock Free LUTs',
              url: 'https://www.rocketstock.com/free-after-effects-templates/35-free-luts',
              type: 'asset',
              description: '35 professional LUTs pack compatible with all major editing software'
            },
            {
              name: 'Lutify.me Free Pack',
              url: 'https://lutify.me/free-luts',
              type: 'asset',
              description: 'Free cinematic color grading LUTs with film stock emulations'
            },
            {
              name: 'Ground Control Free LUTs',
              url: 'https://groundcontrolcolor.com/products/free-lut-downloads',
              type: 'asset',
              description: 'Professional colorist-created LUTs for download'
            }
          ]
        },
        {
          name: 'Premium LUT Packs',
          resources: [
            {
              name: 'SmallHD LUT Utility',
              url: 'https://www.smallhd.com/lut-utility',
              type: 'tool',
              description: 'Professional LUT management and conversion tool with preview'
            },
            {
              name: 'Dehancer',
              url: 'https://www.dehancer.com',
              type: 'tool',
              description: 'Film emulation plugin with accurate grain, halation, bloom effects'
            },
            {
              name: 'Color Finale',
              url: 'https://www.colorfinale.com',
              type: 'tool',
              description: 'Professional color grading toolset for Final Cut Pro X'
            }
          ]
        },
        {
          name: 'Learning Resources',
          resources: [
            {
              name: 'Color Grading Central',
              url: 'https://www.premiumbeat.com/blog/color-grading-tutorials',
              type: 'resource',
              description: 'Comprehensive tutorials on color theory, grading workflows, and LUT application'
            },
            {
              name: 'Cullen Kelly YouTube',
              url: 'https://www.youtube.com/@CullenKelly',
              type: 'youtube',
              description: 'Professional colorist sharing DaVinci Resolve tutorials and color theory'
            },
            {
              name: 'Waqas Qazi YouTube',
              url: 'https://www.youtube.com/@waqasqazi',
              type: 'youtube',
              description: 'Color grading techniques and cinematic looks breakdown'
            }
          ]
        }
      ]
    },
    learning: {
      title: 'Tutorials & Education',
      icon: BookOpen,
      color: '#14b8a6',
      sections: [
        {
          name: 'YouTube Channels - Beginner',
          resources: [
            {
              name: 'Peter McKinnon',
              url: 'https://www.youtube.com/@PeterMcKinnon',
              type: 'youtube',
              description: '6M+ subscribers - cinematography, photography, editing tutorials with energy'
            },
            {
              name: 'Premiere Gal',
              url: 'https://www.youtube.com/@PremiereGal',
              type: 'youtube',
              description: 'Step-by-step Premiere Pro tutorials for beginners to advanced effects'
            },
            {
              name: 'Justin Odisho',
              url: 'https://www.youtube.com/@JustinOdisho',
              type: 'youtube',
              description: 'Premiere Pro, After Effects, and DaVinci Resolve tutorials'
            },
            {
              name: 'Cinecom.net',
              url: 'https://www.youtube.com/@CinecomNet',
              type: 'youtube',
              description: 'Weekly filmmaking and video editing tutorials with creative effects'
            },
            {
              name: 'Filmora',
              url: 'https://www.youtube.com/@filmorawondershare',
              type: 'youtube',
              description: 'Official Filmora tutorials for quick and easy video editing'
            }
          ]
        },
        {
          name: 'YouTube Channels - Advanced',
          resources: [
            {
              name: 'Video Copilot',
              url: 'https://www.youtube.com/@videocopilot',
              type: 'youtube',
              description: 'Andrew Kramer\'s legendary After Effects tutorials and VFX breakdowns'
            },
            {
              name: 'Film Riot',
              url: 'https://www.youtube.com/@filmriot',
              type: 'youtube',
              description: '2M+ subscribers - filmmaking, VFX, and production techniques'
            },
            {
              name: 'Corridor Crew',
              url: 'https://www.youtube.com/@corridorcrew',
              type: 'youtube',
              description: 'VFX artists react, breakdown Hollywood effects, teach advanced techniques'
            },
            {
              name: 'Casey Faris',
              url: 'https://www.youtube.com/@CaseyFaris',
              type: 'youtube',
              description: 'DaVinci Resolve specialist with in-depth tutorials and workflows'
            },
            {
              name: 'Surfaced Studio',
              url: 'https://www.youtube.com/@SurfacedStudio',
              type: 'youtube',
              description: 'Advanced Premiere Pro tutorials and motion graphics techniques'
            }
          ]
        },
        {
          name: 'Online Courses',
          resources: [
            {
              name: 'LinkedIn Learning (Lynda)',
              url: 'https://www.linkedin.com/learning/topics/video-editing',
              type: 'course',
              description: 'Professional courses on all major editing software - $29.99/month'
            },
            {
              name: 'Skillshare Video Editing',
              url: 'https://www.skillshare.com/browse/video-editing',
              type: 'course',
              description: '1,000+ classes on editing, color grading, motion graphics - $32/month'
            },
            {
              name: 'Udemy Video Editing',
              url: 'https://www.udemy.com/topic/video-editing',
              type: 'course',
              description: 'Individual course purchases from $12.99 with lifetime access'
            },
            {
              name: 'Motion Design School',
              url: 'https://motiondesign.school',
              type: 'course',
              description: 'Professional motion graphics and animation courses from industry experts'
            },
            {
              name: 'School of Motion',
              url: 'https://www.schoolofmotion.com',
              type: 'course',
              description: 'Comprehensive motion design bootcamp with mentorship and portfolio projects'
            }
          ]
        },
        {
          name: 'Free Learning Platforms',
          resources: [
            {
              name: 'Adobe Creative Cloud Tutorials',
              url: 'https://helpx.adobe.com/premiere-pro/tutorials.html',
              type: 'resource',
              description: 'Official Adobe tutorials for Premiere Pro and After Effects from basics to advanced'
            },
            {
              name: 'Apple Final Cut Pro Resources',
              url: 'https://www.apple.com/final-cut-pro/resources',
              type: 'resource',
              description: 'Official guides, tutorials, and workflow documentation from Apple'
            },
            {
              name: 'DaVinci Resolve Training',
              url: 'https://www.blackmagicdesign.com/products/davinciresolve/training',
              type: 'resource',
              description: 'Free official certification courses from Blackmagic Design'
            },
            {
              name: 'Podcastle Blog',
              url: 'https://podcastle.ai/blog/how-to-edit-youtube-videos',
              type: 'resource',
              description: 'Step-by-step guides on editing for YouTube, TikTok, and social media'
            }
          ]
        }
      ]
    },
    specialized: {
      title: 'Specialized Tools',
      icon: Settings,
      color: '#ef4444',
      sections: [
        {
          name: 'AI Video Tools',
          resources: [
            {
              name: 'Runway ML',
              url: 'https://runwayml.com',
              type: 'tool',
              description: 'AI-powered video editing with magic tools, green screen removal, motion tracking'
            },
            {
              name: 'Topaz Video AI',
              url: 'https://www.topazlabs.com/topaz-video-ai',
              type: 'tool',
              description: 'AI upscaling, denoising, deinterlacing, frame interpolation - $299 perpetual'
            },
            {
              name: 'Descript',
              url: 'https://www.descript.com',
              type: 'tool',
              description: 'Text-based editing with AI voice cloning, filler word removal, Studio Sound'
            },
            {
              name: 'Captions',
              url: 'https://www.captions.ai',
              type: 'tool',
              description: 'AI-generated captions, dubbing, and eye contact correction for creators'
            }
          ]
        },
        {
          name: 'Screen Recording',
          resources: [
            {
              name: 'OBS Studio',
              url: 'https://obsproject.com',
              type: 'tool',
              description: 'Free open-source screen recorder and livestreaming software'
            },
            {
              name: 'Loom',
              url: 'https://www.loom.com',
              type: 'tool',
              description: 'Quick screen and cam recording with instant sharing - Free up to 25 videos'
            },
            {
              name: 'ScreenFlow',
              url: 'https://www.telestream.net/screenflow',
              type: 'tool',
              description: 'Mac screen recording with built-in editor and animations - $169 one-time'
            },
            {
              name: 'Camtasia',
              url: 'https://www.techsmith.com/video-editor.html',
              type: 'tool',
              description: 'Screen recording and video editing for tutorials and presentations - $249.99'
            }
          ]
        },
        {
          name: 'Transcription & Subtitles',
          resources: [
            {
              name: 'Rev',
              url: 'https://www.rev.com',
              type: 'tool',
              description: 'Professional transcription services and AI captions - $1.50/minute human, $0.25 AI'
            },
            {
              name: 'Otter.ai',
              url: 'https://otter.ai',
              type: 'tool',
              description: 'AI transcription with speaker identification - 300 free minutes/month'
            },
            {
              name: 'Happy Scribe',
              url: 'https://www.happyscribe.com',
              type: 'tool',
              description: 'Automatic transcription and subtitles in 120+ languages'
            },
            {
              name: 'SubtitleEdit',
              url: 'https://www.nikse.dk/subtitleedit',
              type: 'tool',
              description: 'Free open-source subtitle editor with timing, translation, and sync tools'
            }
          ]
        },
        {
          name: 'Conversion & Compression',
          resources: [
            {
              name: 'HandBrake',
              url: 'https://handbrake.fr',
              type: 'tool',
              description: 'Free open-source video transcoder for format conversion and compression'
            },
            {
              name: 'FFmpeg',
              url: 'https://ffmpeg.org',
              type: 'tool',
              description: 'Command-line multimedia framework for advanced video processing'
            },
            {
              name: 'Shutter Encoder',
              url: 'https://www.shutterencoder.com',
              type: 'tool',
              description: 'Professional video converter with batch processing and codec options'
            }
          ]
        }
      ]
    },
    community: {
      title: 'Communities & Resources',
      icon: Users,
      color: '#a855f7',
      sections: [
        {
          name: 'Forums & Communities',
          resources: [
            {
              name: 'r/VideoEditing',
              url: 'https://www.reddit.com/r/VideoEditing',
              type: 'community',
              description: '200k+ editors sharing tips, troubleshooting, and feedback on projects'
            },
            {
              name: 'Creative COW',
              url: 'https://www.creativecow.net',
              type: 'community',
              description: 'Professional forums for all major editing software with expert advice'
            },
            {
              name: 'Premiere Pro Discord',
              url: 'https://discord.gg/adobepremiere',
              type: 'community',
              description: 'Real-time help and community for Premiere Pro users'
            },
            {
              name: 'DaVinci Resolve Forum',
              url: 'https://forum.blackmagicdesign.com',
              type: 'community',
              description: 'Official Blackmagic forum with staff support and user community'
            }
          ]
        },
        {
          name: 'Blogs & Publications',
          resources: [
            {
              name: 'PremiumBeat Blog',
              url: 'https://www.premiumbeat.com/blog',
              type: 'resource',
              description: 'Filmmaking tutorials, gear reviews, and post-production tips'
            },
            {
              name: 'No Film School',
              url: 'https://nofilmschool.com',
              type: 'resource',
              description: 'Filmmaking news, tutorials, gear guides, and industry insights'
            },
            {
              name: 'Frame.io Blog',
              url: 'https://blog.frame.io',
              type: 'resource',
              description: 'Video collaboration, workflow tips, and industry trends'
            },
            {
              name: 'RocketStock',
              url: 'https://www.rocketstock.com/blog',
              type: 'resource',
              description: 'Free tutorials, templates, and filmmaking resources'
            }
          ]
        },
        {
          name: 'Inspiration & Showcases',
          resources: [
            {
              name: 'Vimeo Staff Picks',
              url: 'https://vimeo.com/channels/staffpicks',
              type: 'inspiration',
              description: 'Curated showcase of the best videos from independent creators'
            },
            {
              name: 'Behance Video',
              url: 'https://www.behance.net/galleries/motion-graphics',
              type: 'inspiration',
              description: 'Motion graphics and video editing portfolio showcase'
            },
            {
              name: 'The FWA',
              url: 'https://thefwa.com',
              type: 'inspiration',
              description: 'Award-winning digital work including video and motion design'
            }
          ]
        }
      ]
    }
  };

  // Category navigation
  const categories = [
    { id: 'all', label: 'All Resources', icon: Layers },
    { id: 'software', label: 'Editing Software', icon: Video },
    { id: 'motionGraphics', label: 'Motion Graphics', icon: Wand2 },
    { id: 'stockAssets', label: 'Stock Footage', icon: FileVideo },
    { id: 'audio', label: 'Music & Audio', icon: Headphones },
    { id: 'colorGrading', label: 'Color & LUTs', icon: Palette },
    { id: 'learning', label: 'Learning', icon: BookOpen },
    { id: 'specialized', label: 'Specialized Tools', icon: Settings },
    { id: 'community', label: 'Community', icon: Users }
  ];

  // Resource type badges
  const getTypeBadge = (type) => {
    const badges = {
      tool: { icon: Zap, color: '#3b82f6', label: 'Tool' },
      course: { icon: BookOpen, color: '#10b981', label: 'Course' },
      youtube: { icon: Youtube, color: '#ef4444', label: 'YouTube' },
      resource: { icon: Globe, color: '#8b5cf6', label: 'Resource' },
      asset: { icon: Download, color: '#f59e0b', label: 'Asset' },
      community: { icon: Users, color: '#06b6d4', label: 'Community' },
      inspiration: { icon: Star, color: '#ec4899', label: 'Inspiration' }
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
              <Film className="w-7 h-7 text-[#3b82f6]" />
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Video Editing Resource Hub</h1>
                <p className={`text-xs mt-0.5 hidden sm:block ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                  Comprehensive video production directory
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
                  className={`pl-10 pr-4 py-2 w-64 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#3b82f6] ${
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
              className={`w-full pl-10 pr-4 py-2 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#3b82f6] ${
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
            { label: 'Categories', value: Object.keys(resources).length, icon: Package },
            { label: 'Free Tools', value: '85%', icon: TrendingUp },
            { label: 'Updated', value: 'Nov 2025', icon: Zap }
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border text-center ${
                darkMode ? 'bg-[#0f0f0f] border-[#1a1a1a]' : 'bg-white border-gray-200'
              }`}
            >
              <stat.icon className="w-5 h-5 mx-auto mb-2 text-[#3b82f6]" />
              <div className="text-xl sm:text-2xl font-semibold text-[#3b82f6]">{stat.value}</div>
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
                            ? 'bg-[#3b82f6]/10 text-[#3b82f6]'
                            : 'bg-blue-50 text-blue-600'
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
                                ? 'bg-[#3b82f6]/10 text-[#3b82f6]'
                                : 'bg-blue-50 text-blue-600'
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
                                  darkMode ? 'hover:text-[#3b82f6]' : 'hover:text-blue-600'
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
                                                  darkMode ? 'group-hover:text-[#3b82f6]' : 'group-hover:text-blue-600'
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
              Last updated: November 2025 • {totalResources} curated video editing resources
            </p>
            <div className="flex items-center gap-2 text-xs">
              <span className={darkMode ? 'text-gray-500' : 'text-gray-600'}>
                Built for creators, by creators
              </span>
              <Film className="w-4 h-4 text-[#3b82f6]" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VideoEditingResourceHub;
