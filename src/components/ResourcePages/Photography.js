import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Moon, Sun, ExternalLink, Copy, ChevronDown, ChevronRight,
  Camera, Aperture, Image as ImageIcon, Video, Zap, BookOpen, 
  Youtube, Download, Star, TrendingUp, Menu, X, Filter, Eye,
  Layers, Settings, Lightbulb, Users, Award, Globe, Smartphone,
  Mountain, User, Baby, Sunset, Map, FileText, Play, Monitor
} from 'lucide-react';

const PhotographyResourceHub = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedSections, setExpandedSections] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState('');

  // Comprehensive photography resource database
  const resources = {
    fundamentals: {
      title: 'Photography Fundamentals',
      icon: Camera,
      color: '#3b82f6',
      sections: [
        {
          name: 'Beginner Courses & Tutorials',
          resources: [
            {
              name: 'Photography Life - Learn Photography',
              url: 'https://photographylife.com/learn-photography',
              type: 'course',
              description: 'Comprehensive free guide covering camera basics, exposure triangle, composition, and shooting techniques'
            },
            {
              name: 'Upskillist Photography for Beginners',
              url: 'https://www.upskillist.com',
              type: 'course',
              description: '32 hours of content with hands-on projects and certificates - $39.99/month after free trial'
            },
            {
              name: 'Coursera: Photography Basics & Beyond',
              url: 'https://www.coursera.org/specializations/photography-basics',
              type: 'course',
              description: 'Michigan State University 5-course program with peer feedback and portfolio building - Free to audit'
            },
            {
              name: 'Skillshare: DSLR Photography by Justin Bridges',
              url: 'https://www.skillshare.com',
              type: 'course',
              description: '1-hour course covering exposure triangle, manual settings, and editing basics - Free trial available'
            },
            {
              name: 'LinkedIn Learning: Photography Foundations',
              url: 'https://www.linkedin.com/learning',
              type: 'course',
              description: 'Ben Long\'s composition-focused course with practical exercises - $39.99/month'
            },
            {
              name: 'Indian Institute of Photography',
              url: 'https://www.indianinstituteofphotography.com',
              type: 'course',
              description: '3-month online foundation course - 28,000+ students certified from 40 countries since 2010'
            }
          ]
        },
        {
          name: 'Camera Settings & Exposure',
          resources: [
            {
              name: 'Cambridge in Colour',
              url: 'https://www.cambridgeincolour.com/tutorials.htm',
              type: 'resource',
              description: 'In-depth technical tutorials on exposure, aperture, shutter speed, and ISO'
            },
            {
              name: 'Photography Life: 25 Tips for Beginners',
              url: 'https://photographylife.com/photography-tips-for-beginners',
              type: 'resource',
              description: 'Essential tips covering camera settings, composition, lighting, and post-processing in 2025'
            },
            {
              name: 'Digital Photography School',
              url: 'https://digital-photography-school.com',
              type: 'resource',
              description: 'Free articles and tutorials on exposure triangle, metering modes, and camera techniques'
            },
            {
              name: 'Expert Photography',
              url: 'https://expertphotography.com',
              type: 'resource',
              description: 'Beginner to advanced guides on camera settings, composition, and photography genres'
            }
          ]
        },
        {
          name: 'Composition & Visual Theory',
          resources: [
            {
              name: 'Phlearn Composition Tutorials',
              url: 'https://phlearn.com',
              type: 'resource',
              description: 'Rule of thirds, leading lines, framing, and advanced composition techniques'
            },
            {
              name: 'The Art of Photography',
              url: 'https://www.youtube.com/@theartofphotography',
              type: 'youtube',
              description: 'Ted Forbes\' channel with 1M+ subscribers covering composition philosophy and visual theory'
            },
            {
              name: 'Composition Checklist',
              url: 'https://improvephotography.com/photography-basics/composition',
              type: 'resource',
              description: 'Comprehensive guide to compositional rules and when to break them'
            }
          ]
        }
      ]
    },
    editingSoftware: {
      title: 'Editing Software & Tools',
      icon: Layers,
      color: '#8b5cf6',
      sections: [
        {
          name: 'Professional Editing Software',
          resources: [
            {
              name: 'Adobe Lightroom Classic',
              url: 'https://www.adobe.com/products/photoshop-lightroom-classic.html',
              type: 'tool',
              description: 'Industry-standard RAW processor and photo organizer - $9.99/month with Photography Plan'
            },
            {
              name: 'Adobe Photoshop',
              url: 'https://www.adobe.com/products/photoshop.html',
              type: 'tool',
              description: 'Advanced image manipulation, retouching, and compositing - Included in Photography Plan'
            },
            {
              name: 'Capture One',
              url: 'https://www.captureone.com',
              type: 'tool',
              description: 'Professional RAW converter with superior color grading - $299/year or $19/month'
            },
            {
              name: 'Luminar Neo',
              url: 'https://skylum.com/luminar',
              type: 'tool',
              description: 'AI-powered editing with sky replacement and portrait enhancement - $99 one-time purchase'
            },
            {
              name: 'DxO PhotoLab',
              url: 'https://www.dxo.com/dxo-photolab',
              type: 'tool',
              description: 'Best-in-class noise reduction and lens corrections - $229 one-time'
            },
            {
              name: 'ON1 Photo RAW',
              url: 'https://www.on1.com',
              type: 'tool',
              description: 'All-in-one editor with non-destructive layers - $79.99 one-time purchase'
            }
          ]
        },
        {
          name: 'Free Editing Software',
          resources: [
            {
              name: 'Pixlr',
              url: 'https://pixlr.com',
              type: 'tool',
              description: 'Best free Photoshop alternative with layers, AI tools, and simple interface - Browser-based'
            },
            {
              name: 'Photopea',
              url: 'https://www.photopea.com',
              type: 'tool',
              description: 'Free online editor supporting PSD, XCF, Sketch files with Photoshop-like interface'
            },
            {
              name: 'GIMP',
              url: 'https://www.gimp.org',
              type: 'tool',
              description: 'Open-source image editor with advanced features - Windows, Mac, Linux'
            },
            {
              name: 'Darktable',
              url: 'https://www.darktable.org',
              type: 'tool',
              description: 'Open-source RAW developer and Lightroom alternative with non-destructive editing'
            },
            {
              name: 'RawTherapee',
              url: 'https://www.rawtherapee.com',
              type: 'tool',
              description: 'Powerful RAW converter with advanced color tools - Completely free'
            },
            {
              name: 'NCH PhotoPad',
              url: 'https://www.nchsoftware.com/photoeditor',
              type: 'tool',
              description: 'Feature-rich editor free for non-commercial use with AI upscaling - Windows, Mac, Android'
            }
          ]
        },
        {
          name: 'Mobile Editing Apps',
          resources: [
            {
              name: 'Adobe Lightroom Mobile',
              url: 'https://www.adobe.com/products/photoshop-lightroom.html',
              type: 'tool',
              description: 'Professional RAW editing on mobile with cloud sync - Free with premium features'
            },
            {
              name: 'VSCO',
              url: 'https://vsco.co',
              type: 'tool',
              description: 'Film-inspired presets and advanced editing tools - $29.99/year for full access'
            },
            {
              name: 'Snapseed',
              url: 'https://snapseed.online',
              type: 'tool',
              description: 'Google\'s powerful free mobile editor with selective adjustments and healing brush'
            },
            {
              name: 'Darkroom',
              url: 'https://darkroom.co',
              type: 'tool',
              description: 'iOS RAW editor with curves, color grading, and batch processing'
            }
          ]
        },
        {
          name: 'Editing Tutorials',
          resources: [
            {
              name: 'Phlearn',
              url: 'https://phlearn.com',
              type: 'youtube',
              description: 'Aaron Nace\'s Photoshop and Lightroom tutorials from beginner to advanced retouching'
            },
            {
              name: 'Anthony Morganti',
              url: 'https://www.youtube.com/@AnthonyMorganti',
              type: 'youtube',
              description: 'Lightroom Classic workflow tutorials and camera reviews - 500k+ subscribers'
            },
            {
              name: 'Serge Ramelli',
              url: 'https://www.youtube.com/@photoserge',
              type: 'youtube',
              description: 'Lightroom and Photoshop tutorials focusing on landscape and architectural photography'
            },
            {
              name: 'PiXimperfect',
              url: 'https://www.youtube.com/@PiXimperfect',
              type: 'youtube',
              description: 'Unmesh Dinda\'s step-by-step Photoshop tutorials - 3M+ subscribers'
            }
          ]
        }
      ]
    },
    genres: {
      title: 'Photography Genres & Specializations',
      icon: Mountain,
      color: '#10b981',
      sections: [
        {
          name: 'Landscape Photography',
          resources: [
            {
              name: 'Landscape Photography Masterclass',
              url: 'https://www.udemy.com/course/landscape-photography-masterclass',
              type: 'course',
              description: 'Complete guide to landscape composition, light, and post-processing techniques'
            },
            {
              name: 'Thomas Heaton',
              url: 'https://www.youtube.com/@ThomasHeatonPhotography',
              type: 'youtube',
              description: 'On-location landscape tutorials with gear reviews - 700k+ subscribers'
            },
            {
              name: 'Mads Peter Iversen',
              url: 'https://www.youtube.com/@MadsPeterIversen',
              type: 'youtube',
              description: 'Danish landscape photographer sharing composition and light techniques'
            },
            {
              name: 'Outdoor Photographer Magazine',
              url: 'https://www.outdoorphotographer.com',
              type: 'resource',
              description: 'Articles, gear reviews, and techniques for landscape and nature photography'
            }
          ]
        },
        {
          name: 'Portrait Photography',
          resources: [
            {
              name: 'Portrait Photography Course',
              url: 'https://www.udemy.com/topic/portrait-photography',
              type: 'course',
              description: 'Lighting setups, posing techniques, and retouching for professional portraits'
            },
            {
              name: 'Peter Hurley',
              url: 'https://www.peterhurley.com',
              type: 'resource',
              description: 'Headshot photographer teaching the "Hurley method" for jaw definition and expression'
            },
            {
              name: 'Jessica Kobeissi',
              url: 'https://www.youtube.com/@JessicaKobeissi',
              type: 'youtube',
              description: 'Portrait and fashion photography tutorials with creative concepts - 1M+ subscribers'
            },
            {
              name: 'Peter McKinnon',
              url: 'https://www.youtube.com/@PeterMcKinnon',
              type: 'youtube',
              description: 'Creative photography and videography with cinematic portrait techniques - 6M+ subscribers'
            }
          ]
        },
        {
          name: 'Street Photography',
          resources: [
            {
              name: 'Street Photography Course',
              url: 'https://www.udemy.com/topic/street-photography',
              type: 'course',
              description: 'Candid shooting techniques, composition, and overcoming street shooting fears'
            },
            {
              name: 'Sean Tucker',
              url: 'https://www.youtube.com/@seantucker',
              type: 'youtube',
              description: 'Philosophical approach to street and documentary photography - 1M+ subscribers'
            },
            {
              name: 'Street Photography Magazine',
              url: 'https://streetphotographymagazine.com',
              type: 'resource',
              description: 'Interviews, galleries, and techniques from international street photographers'
            }
          ]
        },
        {
          name: 'Wildlife & Nature Photography',
          resources: [
            {
              name: 'Wildlife Photography Workshop',
              url: 'https://www.udemy.com/topic/wildlife-photography',
              type: 'course',
              description: 'Animal behavior, long lens techniques, and field strategies for wildlife'
            },
            {
              name: 'Morten Hilmer',
              url: 'https://www.youtube.com/@MortenHilmer',
              type: 'youtube',
              description: 'Wildlife and landscape photography from Arctic to African safaris'
            },
            {
              name: 'National Geographic Photography',
              url: 'https://www.nationalgeographic.com/photography',
              type: 'resource',
              description: 'World-class photography inspiration, techniques, and competition opportunities'
            }
          ]
        },
        {
          name: 'Product & Commercial Photography',
          resources: [
            {
              name: 'Karl Taylor Education',
              url: 'https://karltayloreducation.com',
              type: 'course',
              description: 'Professional commercial, product, and studio photography courses - $29/month subscription'
            },
            {
              name: 'Photigy',
              url: 'https://www.photigy.com',
              type: 'course',
              description: 'Specialized product photography education with lighting diagrams and RAW files'
            },
            {
              name: 'Gavin Hoey',
              url: 'https://www.youtube.com/@GavinHoey',
              type: 'youtube',
              description: 'Adorama\'s product, macro, and creative photography tutorials - 500k+ subscribers'
            }
          ]
        },
        {
          name: 'Macro & Close-up Photography',
          resources: [
            {
              name: 'Macro Photography Tutorial',
              url: 'https://www.udemy.com/topic/macro-photography',
              type: 'course',
              description: 'Close-up techniques, focus stacking, and lighting for tiny subjects'
            },
            {
              name: 'Jamie Scott Photography',
              url: 'https://www.youtube.com/@jamiescottphoto',
              type: 'youtube',
              description: 'Wildlife macro and nature photography tutorials from UK photographer'
            }
          ]
        }
      ]
    },
    equipment: {
      title: 'Gear & Equipment',
      icon: Settings,
      color: '#f59e0b',
      sections: [
        {
          name: 'Camera Reviews & Comparisons',
          resources: [
            {
              name: 'DPReview',
              url: 'https://www.dpreview.com',
              type: 'resource',
              description: 'Comprehensive camera reviews, comparisons, and buying guides with studio tests'
            },
            {
              name: 'Camera Labs',
              url: 'https://www.cameralabs.com',
              type: 'resource',
              description: 'In-depth camera and lens reviews with real-world sample images'
            },
            {
              name: 'The Digital Picture',
              url: 'https://www.the-digital-picture.com',
              type: 'resource',
              description: 'Canon and lens reviews with ISO comparisons and image quality database'
            },
            {
              name: 'Imaging Resource',
              url: 'https://www.imaging-resource.com',
              type: 'resource',
              description: 'Camera reviews with sample galleries and technical measurements since 1998'
            }
          ]
        },
        {
          name: 'Lens Reviews & Guides',
          resources: [
            {
              name: 'Optical Bench',
              url: 'https://www.lensrentals.com/blog',
              type: 'resource',
              description: 'LensRentals\' technical lens testing and optical analysis by Roger Cicala'
            },
            {
              name: 'Lens Hero',
              url: 'https://www.lenshero.com',
              type: 'resource',
              description: 'Lens comparison tool with user reviews and sample image galleries'
            },
            {
              name: 'Christopher Frost Photography',
              url: 'https://www.youtube.com/@christopherfrostphotography',
              type: 'youtube',
              description: 'Detailed lens reviews with consistent testing methodology - 500k+ subscribers'
            },
            {
              name: 'LensRentals',
              url: 'https://www.lensrentals.com',
              type: 'resource',
              description: 'Rent lenses and cameras before buying - try gear for projects and travel'
            }
          ]
        },
        {
          name: 'Lighting & Studio Gear',
          resources: [
            {
              name: 'Adorama TV',
              url: 'https://www.youtube.com/@adorama',
              type: 'youtube',
              description: 'Lighting tutorials, gear reviews, and photography techniques - 400k+ subscribers'
            },
            {
              name: 'Strobist',
              url: 'https://strobist.blogspot.com',
              type: 'resource',
              description: 'David Hobby\'s legendary off-camera flash tutorials and lighting fundamentals'
            },
            {
              name: 'B&H Photo Learning Hub',
              url: 'https://www.bhphotovideo.com/explora',
              type: 'resource',
              description: 'Gear guides, lighting tutorials, and equipment buying advice'
            },
            {
              name: 'Westcott University',
              url: 'https://www.fjwestcott.com/westcott-university',
              type: 'resource',
              description: 'Free lighting education from modifiers to complete studio setups'
            }
          ]
        },
        {
          name: 'Tripods & Support',
          resources: [
            {
              name: 'Really Right Stuff',
              url: 'https://www.reallyrightstuff.com',
              type: 'resource',
              description: 'Premium tripods, ball heads, and L-brackets for professional photographers'
            },
            {
              name: 'Peak Design',
              url: 'https://www.peakdesign.com',
              type: 'resource',
              description: 'Innovative camera straps, travel tripods, and carry solutions'
            },
            {
              name: 'Center Column',
              url: 'https://thecentercolumn.com',
              type: 'resource',
              description: 'Scientific tripod testing and comprehensive stability comparisons'
            }
          ]
        }
      ]
    },
    learning: {
      title: 'Learning Platforms & Courses',
      icon: BookOpen,
      color: '#ec4899',
      sections: [
        {
          name: 'Comprehensive Learning Platforms',
          resources: [
            {
              name: 'Udemy Photography Courses',
              url: 'https://www.udemy.com/topic/photography',
              type: 'course',
              description: '5,000+ photography courses from $12.99 - lifetime access with frequent sales'
            },
            {
              name: 'Skillshare Photography',
              url: 'https://www.skillshare.com/browse/photography',
              type: 'course',
              description: 'Unlimited access to thousands of classes - $19/month with free trial'
            },
            {
              name: 'CreativeLive',
              url: 'https://www.creativelive.com/photography',
              type: 'course',
              description: 'Live workshops and on-demand classes from industry pros - $39/month Creator Pass'
            },
            {
              name: 'Fstoppers',
              url: 'https://fstoppers.com/store',
              type: 'course',
              description: 'Premium tutorials from working photographers on retouching, lighting, and business'
            },
            {
              name: 'KelbyOne',
              url: 'https://kelbyone.com',
              type: 'course',
              description: 'Photography and Lightroom training by Scott Kelby - $19.99/month'
            },
            {
              name: 'LinkedIn Learning Photography',
              url: 'https://www.linkedin.com/learning/topics/photography',
              type: 'course',
              description: '600+ photography courses included with $39.99/month subscription'
            }
          ]
        },
        {
          name: 'Free Learning Resources',
          resources: [
            {
              name: 'WDO Photo',
              url: 'https://wdophoto.com',
              type: 'resource',
              description: 'Free photography learning resources, tutorials, and guides for all levels'
            },
            {
              name: 'Pixel Photography',
              url: 'https://www.pixelphotography.info',
              type: 'course',
              description: 'Structured online courses from beginner to niche specializations'
            },
            {
              name: 'Pro Edu',
              url: 'https://proedu.com',
              type: 'course',
              description: 'Professional photography education with tutorials for beginners and pros in 2025'
            },
            {
              name: 'Improve Photography',
              url: 'https://improvephotography.com',
              type: 'resource',
              description: 'Free articles, podcast, and guides covering all photography aspects'
            }
          ]
        },
        {
          name: 'YouTube Education Channels',
          resources: [
            {
              name: 'Tony & Chelsea Northrup',
              url: 'https://www.youtube.com/@TonyAndChelsea',
              type: 'youtube',
              description: 'Comprehensive photography education and gear reviews - 1.5M+ subscribers'
            },
            {
              name: 'Jamie Windsor',
              url: 'https://www.youtube.com/@jamiewindsor',
              type: 'youtube',
              description: 'Thoughtful essays on photography philosophy, composition, and creativity'
            },
            {
              name: 'Nigel Danson',
              url: 'https://www.youtube.com/@NigelDanson',
              type: 'youtube',
              description: 'Landscape photography tutorials and on-location shooting - 800k+ subscribers'
            },
            {
              name: 'Mark Denney',
              url: 'https://www.youtube.com/@MarkDenney',
              type: 'youtube',
              description: 'Film photography, darkroom techniques, and alternative processes'
            }
          ]
        }
      ]
    },
    inspiration: {
      title: 'Inspiration & Galleries',
      icon: Eye,
      color: '#14b8a6',
      sections: [
        {
          name: 'Photo Sharing Platforms',
          resources: [
            {
              name: 'Flickr',
              url: 'https://www.flickr.com',
              type: 'inspiration',
              description: 'Long-standing photo community with groups, discussions, and unlimited storage - $8.25/month'
            },
            {
              name: '500px',
              url: 'https://500px.com',
              type: 'inspiration',
              description: 'Curated photography community showcasing high-quality images from global photographers'
            },
            {
              name: '1x.com',
              url: 'https://1x.com',
              type: 'inspiration',
              description: 'Highly curated fine art photography gallery with strict selection process'
            },
            {
              name: 'Photocrowd',
              url: 'https://www.photocrowd.com',
              type: 'inspiration',
              description: 'Photography competitions and community feedback platform'
            }
          ]
        },
        {
          name: 'Photography Magazines',
          resources: [
            {
              name: 'National Geographic',
              url: 'https://www.nationalgeographic.com/photography',
              type: 'resource',
              description: 'World\'s most prestigious photography publication - stories, techniques, contests'
            },
            {
              name: 'Outdoor Photographer',
              url: 'https://www.outdoorphotographer.com',
              type: 'resource',
              description: 'Landscape, nature, and wildlife photography magazine with gear reviews'
            },
            {
              name: 'Digital Photo Pro',
              url: 'https://www.digitalphotopro.com',
              type: 'resource',
              description: 'Professional photography techniques, gear, and industry insights'
            },
            {
              name: 'LensWork',
              url: 'https://www.lenswork.com',
              type: 'resource',
              description: 'Fine art photography magazine focused on creative vision and portfolios'
            }
          ]
        },
        {
          name: 'Photography Competitions',
          resources: [
            {
              name: 'World Photography Organisation',
              url: 'https://www.worldphoto.org',
              type: 'resource',
              description: 'Sony World Photography Awards - world\'s largest photography competition'
            },
            {
              name: 'International Photography Awards',
              url: 'https://www.photoawards.com',
              type: 'resource',
              description: 'Lucie Awards recognizing excellence in professional and non-professional photography'
            },
            {
              name: 'Wildlife Photographer of the Year',
              url: 'https://www.nhm.ac.uk/wpy',
              type: 'resource',
              description: 'Natural History Museum\'s prestigious annual wildlife photography contest'
            },
            {
              name: 'ViewBug',
              url: 'https://www.viewbug.com',
              type: 'inspiration',
              description: 'Photography contests with prizes, community feedback, and exhibition opportunities'
            }
          ]
        },
        {
          name: 'Art Photography Galleries',
          resources: [
            {
              name: 'Magnum Photos',
              url: 'https://www.magnumphotos.com',
              type: 'inspiration',
              description: 'Legendary photography cooperative featuring iconic documentary photographers'
            },
            {
              name: 'LensCulture',
              url: 'https://www.lensculture.com',
              type: 'inspiration',
              description: 'Contemporary photography magazine and competition platform'
            },
            {
              name: 'The Photo Argus',
              url: 'https://thephotoargus.com',
              type: 'inspiration',
              description: 'Curated selection of exceptional photography from around the world'
            }
          ]
        }
      ]
    },
    stockPhotography: {
      title: 'Stock Photography & Monetization',
      icon: Award,
      color: '#ef4444',
      sections: [
        {
          name: 'Stock Photography Platforms',
          resources: [
            {
              name: 'Shutterstock',
              url: 'https://www.shutterstock.com/contribute',
              type: 'resource',
              description: 'Leading stock platform - earn 15-40% commission on photo and video sales'
            },
            {
              name: 'Adobe Stock',
              url: 'https://contributor.stock.adobe.com',
              type: 'resource',
              description: 'Integrated with Creative Cloud - 33% commission with Adobe ecosystem reach'
            },
            {
              name: 'Getty Images',
              url: 'https://www.gettyimages.com/workwithus',
              type: 'resource',
              description: 'Premium stock agency with exclusive and royalty-free collections - application required'
            },
            {
              name: 'iStock by Getty',
              url: 'https://www.istockphoto.com',
              type: 'resource',
              description: 'Microstock platform with easier entry than Getty - 15-45% royalties'
            },
            {
              name: 'Alamy',
              url: 'https://www.alamy.com/contributor',
              type: 'resource',
              description: 'High commission rates up to 50% - no exclusivity required'
            },
            {
              name: '500px Licensing',
              url: 'https://500px.com/licensing',
              type: 'resource',
              description: 'Distribute through Getty, VCG, and Cavan - 60% exclusive, 30% non-exclusive'
            }
          ]
        },
        {
          name: 'Print-on-Demand Services',
          resources: [
            {
              name: 'Fine Art America',
              url: 'https://fineartamerica.com',
              type: 'resource',
              description: 'Sell prints, canvases, and products - they handle printing and shipping'
            },
            {
              name: 'Printful',
              url: 'https://www.printful.com',
              type: 'resource',
              description: 'Print-on-demand fulfillment integrating with your online store'
            },
            {
              name: 'Society6',
              url: 'https://society6.com',
              type: 'resource',
              description: 'Sell art prints and lifestyle products with built-in marketplace'
            },
            {
              name: 'SmugMug Pro',
              url: 'https://www.smugmug.com',
              type: 'resource',
              description: 'Portfolio website with e-commerce and print fulfillment - $33/month'
            }
          ]
        },
        {
          name: 'Photography Business Resources',
          resources: [
            {
              name: 'SLR Lounge',
              url: 'https://www.slrlounge.com',
              type: 'resource',
              description: 'Photography education with business, marketing, and pricing guides'
            },
            {
              name: 'Fstoppers Business',
              url: 'https://fstoppers.com/business',
              type: 'resource',
              description: 'Articles on running a photography business, pricing, and client management'
            },
            {
              name: 'PhotoShelter',
              url: 'https://www.photoshelter.com',
              type: 'tool',
              description: 'Website builder and client management platform for photographers - $10/month'
            },
            {
              name: 'ShootProof',
              url: 'https://www.shootproof.com',
              type: 'tool',
              description: 'Client galleries with online sales and print fulfillment - $10/month'
            }
          ]
        }
      ]
    },
    community: {
      title: 'Communities & Forums',
      icon: Users,
      color: '#a855f7',
      sections: [
        {
          name: 'Photography Forums',
          resources: [
            {
              name: 'Photography-on-the.net',
              url: 'https://photography-on-the.net/forum',
              type: 'community',
              description: 'Active community forum for all photography genres and technical discussions'
            },
            {
              name: 'Fred Miranda Forums',
              url: 'https://www.fredmiranda.com/forum',
              type: 'community',
              description: 'Established photography forum with gear classifieds and critique sections'
            },
            {
              name: 'DPReview Forums',
              url: 'https://www.dpreview.com/forums',
              type: 'community',
              description: 'Camera-specific forums and general photography discussions'
            },
            {
              name: 'Reddit r/photography',
              url: 'https://www.reddit.com/r/photography',
              type: 'community',
              description: '3M+ members discussing technique, gear, and sharing work'
            },
            {
              name: 'Reddit r/photoclass',
              url: 'https://www.reddit.com/r/photoclass',
              type: 'community',
              description: 'Structured photography lessons and beginner-friendly community'
            }
          ]
        },
        {
          name: 'Social Media Communities',
          resources: [
            {
              name: 'Instagram Photography',
              url: 'https://www.instagram.com',
              type: 'community',
              description: 'Visual platform for sharing work and discovering photographers - #photography 1B+ posts'
            },
            {
              name: 'Photography Facebook Groups',
              url: 'https://www.facebook.com',
              type: 'community',
              description: 'Genre-specific groups for critique, challenges, and local photography meetups'
            },
            {
              name: 'Photrio',
              url: 'https://www.photrio.com',
              type: 'community',
              description: 'Film photography community forum and marketplace'
            }
          ]
        },
        {
          name: 'Photography Podcasts',
          resources: [
            {
              name: 'The Candid Frame',
              url: 'https://www.candidframe.com',
              type: 'resource',
              description: 'In-depth interviews with photographers about their process and philosophy'
            },
            {
              name: 'This Week in Photo',
              url: 'https://thisweekinphoto.com',
              type: 'resource',
              description: 'Photography news, gear, and industry insights with expert guests'
            },
            {
              name: 'Improve Photography Podcast',
              url: 'https://improvephotography.com/podcast',
              type: 'resource',
              description: 'Weekly photography tips, techniques, and beginner-friendly advice'
            }
          ]
        }
      ]
    },
    tools: {
      title: 'Photography Tools & Apps',
      icon: Zap,
      color: '#06b6d4',
      sections: [
        {
          name: 'Planning & Location Tools',
          resources: [
            {
              name: 'PhotoPills',
              url: 'https://www.photopills.com',
              type: 'tool',
              description: 'Sun/moon planner, Milky Way tracker, and exposure calculator - $9.99 iOS/Android'
            },
            {
              name: 'The Photographer\'s Ephemeris',
              url: 'https://photoephemeris.com',
              type: 'tool',
              description: 'Sun, moon, and Milky Way visualization for location scouting - Free web, $9.99 app'
            },
            {
              name: 'Stellarium',
              url: 'https://stellarium.org',
              type: 'tool',
              description: 'Free planetarium software for planning astrophotography and night sky shots'
            },
            {
              name: 'Golden Hour',
              url: 'https://goldenhour.one',
              type: 'tool',
              description: 'Simple sunrise, sunset, and golden hour calculator'
            }
          ]
        },
        {
          name: 'Organization & Workflow',
          resources: [
            {
              name: 'Photo Mechanic',
              url: 'https://home.camerabits.com',
              type: 'tool',
              description: 'Fast image browser and culling tool for professionals - $150 one-time'
            },
            {
              name: 'Narrative Select',
              url: 'https://www.narrativeps.com',
              type: 'tool',
              description: 'AI-powered culling assistant eliminating blurred, duplicate, and closed-eye photos'
            },
            {
              name: 'Adobe Bridge',
              url: 'https://www.adobe.com/products/bridge.html',
              type: 'tool',
              description: 'Free file browser and metadata manager for organizing photos'
            }
          ]
        },
        {
          name: 'Specialty Tools',
          resources: [
            {
              name: 'Helicon Focus',
              url: 'https://www.heliconsoft.com/heliconsoft-products/helicon-focus',
              type: 'tool',
              description: 'Focus stacking software for macro and landscape photography - $30-$125'
            },
            {
              name: 'Starry Landscape Stacker',
              url: 'https://sites.google.com/site/starrylandscapestacker',
              type: 'tool',
              description: 'Free Mac app for stacking star trail and Milky Way images'
            },
            {
              name: 'Sequator',
              url: 'https://sites.google.com/view/sequator',
              type: 'tool',
              description: 'Free Windows app for star trail stacking and noise reduction'
            },
            {
              name: 'PTGui',
              url: 'https://www.ptgui.com',
              type: 'tool',
              description: 'Professional panorama stitching software - $109-$379'
            }
          ]
        }
      ]
    }
  };

  // Category navigation
  const categories = [
    { id: 'all', label: 'All Resources', icon: Camera },
    { id: 'fundamentals', label: 'Fundamentals', icon: BookOpen },
    { id: 'editingSoftware', label: 'Editing Software', icon: Layers },
    { id: 'genres', label: 'Genres', icon: Mountain },
    { id: 'equipment', label: 'Equipment', icon: Settings },
    { id: 'learning', label: 'Learning', icon: Play },
    { id: 'inspiration', label: 'Inspiration', icon: Eye },
    { id: 'stockPhotography', label: 'Stock & Business', icon: Award },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'tools', label: 'Tools & Apps', icon: Zap }
  ];

  // Resource type badges
  const getTypeBadge = (type) => {
    const badges = {
      tool: { icon: Zap, color: '#3b82f6', label: 'Tool' },
      course: { icon: BookOpen, color: '#10b981', label: 'Course' },
      youtube: { icon: Youtube, color: '#ef4444', label: 'YouTube' },
      resource: { icon: FileText, color: '#8b5cf6', label: 'Resource' },
      inspiration: { icon: Star, color: '#f59e0b', label: 'Inspiration' },
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
              <Camera className="w-7 h-7 text-[#f59e0b]" />
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Photography Resource Hub</h1>
                <p className={`text-xs mt-0.5 hidden sm:block ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                  Comprehensive photography learning directory
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
            { label: 'Total Resources', value: totalResources, icon: Camera },
            { label: 'Categories', value: Object.keys(resources).length, icon: Layers },
            { label: 'Free Resources', value: '85%', icon: TrendingUp },
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
                          const isExpanded = expandedSections[sectionKey] !== false;

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
              Last updated: November 2025 • {totalResources} curated photography resources
            </p>
            <div className="flex items-center gap-2 text-xs">
              <span className={darkMode ? 'text-gray-500' : 'text-gray-600'}>
                Built for photographers, by photographers
              </span>
              <Camera className="w-4 h-4 text-[#f59e0b]" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PhotographyResourceHub;
