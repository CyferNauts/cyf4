import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Moon, Sun, ExternalLink, Copy, ChevronDown, ChevronRight,
  Box, Boxes, Layers, Zap, BookOpen, Video, Download, Star,
  TrendingUp, Menu, X, Filter, Eye, Users, Award, Globe,
  Settings, Lightbulb, Play, FileText, Cpu, Palette, Grid,
  Package, Film, Gamepad2, Building, Sparkles, Code, Youtube
} from 'lucide-react';

const ThreeDModelingHub = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedSections, setExpandedSections] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState('');

  // Comprehensive 3D modeling resource database
  const resources = {
    software: {
      title: '3D Modeling Software',
      icon: Box,
      color: '#3b82f6',
      sections: [
        {
          name: 'Free & Open Source Software',
          resources: [
            {
              name: 'Blender',
              url: 'https://www.blender.org',
              type: 'tool',
              description: 'Industry-standard open-source 3D suite - modeling, sculpting, animation, rendering, VFX, and game development - Completely free'
            },
            {
              name: 'FreeCAD',
              url: 'https://www.freecad.org',
              type: 'tool',
              description: 'Open-source parametric 3D CAD modeler for mechanical engineering and product design'
            },
            {
              name: 'Wings 3D',
              url: 'http://www.wings3d.com',
              type: 'tool',
              description: 'Subdivision modeler with intuitive interface - perfect for beginners learning polygon modeling'
            },
            {
              name: 'Dust3D',
              url: 'https://dust3d.org',
              type: 'tool',
              description: 'Quick 3D modeling software for game development with node-based workflow'
            },
            {
              name: 'MeshLab',
              url: 'https://www.meshlab.net',
              type: 'tool',
              description: 'Open-source system for processing and editing 3D triangular meshes and point clouds'
            }
          ]
        },
        {
          name: 'Professional 3D Software',
          resources: [
            {
              name: 'Autodesk Maya',
              url: 'https://www.autodesk.com/products/maya',
              type: 'tool',
              description: 'Industry-standard for animation, VFX, and film - advanced character rigging and simulation - $245/month'
            },
            {
              name: '3ds Max',
              url: 'https://www.autodesk.com/products/3ds-max',
              type: 'tool',
              description: 'Architectural visualization, game design, complex scenes - Arnold rendering - $245/month Windows only'
            },
            {
              name: 'Cinema 4D',
              url: 'https://www.maxon.net/cinema-4d',
              type: 'tool',
              description: 'Motion graphics powerhouse - intuitive interface, procedural workflow - $94/month subscription'
            },
            {
              name: 'Houdini',
              url: 'https://www.sidefx.com',
              type: 'tool',
              description: 'Node-based procedural 3D - VFX, simulations, destruction effects - Free Apprentice license available'
            },
            {
              name: 'Modo',
              url: 'https://www.foundry.com/products/modo',
              type: 'tool',
              description: 'Advanced polygon and subdivision surface modeling with powerful rendering - $67/month'
            },
            {
              name: 'LightWave 3D',
              url: 'https://www.lightwave3d.com',
              type: 'tool',
              description: 'Complete 3D solution for modeling, rendering, and animation - $995 perpetual license'
            }
          ]
        },
        {
          name: 'Digital Sculpting Software',
          resources: [
            {
              name: 'ZBrush',
              url: 'https://www.maxon.net/zbrush',
              type: 'tool',
              description: 'Industry-leading digital sculpting - millions of polygons, character creation - $39.95/month or $895 perpetual'
            },
            {
              name: 'Sculptris',
              url: 'https://www.sculpteo.com/en/glossary/sculptris-definition',
              type: 'tool',
              description: 'Free digital sculpting tool from Pixologic - perfect for beginners learning sculpting basics'
            },
            {
              name: 'Mudbox',
              url: 'https://www.autodesk.com/products/mudbox',
              type: 'tool',
              description: 'Autodesk digital painting and sculpting software - $10/month subscription'
            },
            {
              name: 'Nomad Sculpt',
              url: 'https://nomadsculpt.com',
              type: 'tool',
              description: 'Mobile sculpting app for iPad and Android - $19.99 one-time purchase with desktop version'
            }
          ]
        },
        {
          name: 'CAD & Parametric Modeling',
          resources: [
            {
              name: 'Fusion 360',
              url: 'https://www.autodesk.com/products/fusion-360',
              type: 'tool',
              description: 'Cloud-based CAD/CAM/CAE - product design, mechanical engineering - Free for hobbyists and startups'
            },
            {
              name: 'SketchUp',
              url: 'https://www.sketchup.com',
              type: 'tool',
              description: 'Intuitive 3D modeling for architecture and interior design - Free web version, Pro from $149/year'
            },
            {
              name: 'Rhino',
              url: 'https://www.rhino3d.com',
              type: 'tool',
              description: 'NURBS-based 3D modeler for industrial design, architecture, jewelry - $995 one-time'
            },
            {
              name: 'SolidWorks',
              url: 'https://www.solidworks.com',
              type: 'tool',
              description: 'Professional CAD for mechanical design and engineering - $3,995+ one-time with maintenance'
            },
            {
              name: 'Creo Parametric',
              url: 'https://www.ptc.com/en/products/creo',
              type: 'tool',
              description: 'Precision mechanical design with robust simulation tools - Enterprise pricing'
            }
          ]
        },
        {
          name: 'Specialized 3D Tools',
          resources: [
            {
              name: 'Marvelous Designer',
              url: 'https://www.marvelousdesigner.com',
              type: 'tool',
              description: 'Realistic 3D clothing and fabric simulation for character design - $39/month'
            },
            {
              name: 'SpeedTree',
              url: 'https://speedtree.com',
              type: 'tool',
              description: 'Procedural vegetation modeling for games and film - Cinema from $19/month'
            },
            {
              name: 'Substance 3D Modeler',
              url: 'https://www.adobe.com/products/substance3d-modeler.html',
              type: 'tool',
              description: 'Clay-like 3D sculpting in VR and desktop - Part of Substance 3D Collection $49.99/month'
            }
          ]
        }
      ]
    },
    learning: {
      title: 'Learning & Tutorials',
      icon: BookOpen,
      color: '#10b981',
      sections: [
        {
          name: 'Blender Learning Resources',
          resources: [
            {
              name: 'Blender Official Tutorials',
              url: 'https://www.blender.org/support/tutorials',
              type: 'course',
              description: 'Official Blender Foundation tutorials covering all aspects from beginner to advanced'
            },
            {
              name: 'Blender Guru',
              url: 'https://www.youtube.com/@blenderguru',
              type: 'youtube',
              description: 'Andrew Price\'s legendary donut tutorial and comprehensive Blender education - 2.5M+ subscribers'
            },
            {
              name: 'CG Cookie - Blender Course',
              url: 'https://www.youtube.com/playlist?list=PL3GeP3YLZn5hhfaGRSmRia0OwPPMfJu0V',
              type: 'course',
              description: 'Complete Blender fundamentals playlist - modeling, texturing, lighting, rendering'
            },
            {
              name: 'Ducky 3D',
              url: 'https://www.youtube.com/@TheDucky3D',
              type: 'youtube',
              description: 'Motion graphics and geometry nodes tutorials - stylized abstract animations'
            },
            {
              name: 'Grant Abbitt',
              url: 'https://www.youtube.com/@grabbitt',
              type: 'youtube',
              description: 'Game asset creation, low poly modeling, and complete beginner series'
            },
            {
              name: 'CG Fast Track',
              url: 'https://www.youtube.com/@CGFastTrack',
              type: 'youtube',
              description: 'Beginner-friendly Blender tutorials with project-based learning'
            },
            {
              name: 'Default Cube',
              url: 'https://www.youtube.com/@DefaultCube',
              type: 'youtube',
              description: 'Geometry nodes tutorials and procedural modeling techniques'
            }
          ]
        },
        {
          name: 'Comprehensive Online Courses',
          resources: [
            {
              name: 'Udemy: Complete Blender Creator',
              url: 'https://www.udemy.com/topic/blender',
              type: 'course',
              description: 'Learn 3D modeling by creating games - 50+ hours of content from $12.99'
            },
            {
              name: 'LinkedIn Learning: 3D Modeling',
              url: 'https://www.linkedin.com/learning/topics/3d-modeling',
              type: 'course',
              description: 'Professional courses in Blender, Maya, 3ds Max - $39.99/month subscription'
            },
            {
              name: 'Coursera: 3D Animation & Modeling',
              url: 'https://www.coursera.org/courses?query=3d%20modeling',
              type: 'course',
              description: 'University-level courses with certificates from accredited institutions'
            },
            {
              name: 'Pluralsight: 3D Modeling Paths',
              url: 'https://www.pluralsight.com',
              type: 'course',
              description: 'Skill paths for Maya, Blender, and game development - $29/month'
            },
            {
              name: 'Skillshare: 3D Design Classes',
              url: 'https://www.skillshare.com/browse/3d-design',
              type: 'course',
              description: 'Project-based learning from industry professionals - Free trial available'
            }
          ]
        },
        {
          name: 'Specialized Learning Platforms',
          resources: [
            {
              name: 'CG Cookie',
              url: 'https://cgcookie.com',
              type: 'course',
              description: 'Blender-focused learning platform with structured paths - $19/month'
            },
            {
              name: 'FlippedNormals',
              url: 'https://flippednormals.com/learn',
              type: 'course',
              description: 'AAA game and film tutorials from industry professionals'
            },
            {
              name: 'Gnomon Workshop',
              url: 'https://www.thegnomonworkshop.com',
              type: 'course',
              description: 'Premium tutorials from Hollywood VFX artists - $49/month subscription'
            },
            {
              name: 'Digital Tutors (Pluralsight)',
              url: 'https://www.pluralsight.com/browse/creative-professional',
              type: 'course',
              description: 'Professional 3D training for Maya, ZBrush, and production pipelines'
            },
            {
              name: 'Learn Squared',
              url: 'https://www.learnsquared.com',
              type: 'course',
              description: 'Mentorship-based courses from entertainment industry leaders'
            }
          ]
        },
        {
          name: 'YouTube Education Channels',
          resources: [
            {
              name: 'Polygon Runway',
              url: 'https://www.youtube.com/@polygonrunway',
              type: 'youtube',
              description: 'Hard surface modeling and product visualization tutorials'
            },
            {
              name: 'Josh Gambrell',
              url: 'https://www.youtube.com/@JoshGambrell',
              type: 'youtube',
              description: 'Vehicle modeling and automotive visualization in Blender'
            },
            {
              name: 'Ryan King Art',
              url: 'https://www.youtube.com/@RyanKingArt',
              type: 'youtube',
              description: 'Procedural texturing and material creation masterclasses'
            },
            {
              name: 'Southern Shotty',
              url: 'https://www.youtube.com/@SouthernShotty',
              type: 'youtube',
              description: 'Character design and stylized 3D character creation'
            },
            {
              name: 'CrossMind Studio',
              url: 'https://www.youtube.com/@CrossMindStudio',
              type: 'youtube',
              description: 'Character creation tutorials and 3D modeling techniques'
            },
            {
              name: 'Ian Hubert',
              url: 'https://www.youtube.com/@mrdodobird',
              type: 'youtube',
              description: 'Lazy tutorials - quick efficient techniques for world building'
            }
          ]
        }
      ]
    },
    rendering: {
      title: 'Rendering & Visualization',
      icon: Eye,
      color: '#8b5cf6',
      sections: [
        {
          name: 'Rendering Engines',
          resources: [
            {
              name: 'Cycles (Blender)',
              url: 'https://www.cycles-renderer.org',
              type: 'tool',
              description: 'Physically-based path tracer built into Blender - GPU/CPU rendering'
            },
            {
              name: 'Eevee (Blender)',
              url: 'https://docs.blender.org/manual/en/latest/render/eevee',
              type: 'tool',
              description: 'Real-time rendering engine in Blender for fast viewport previews'
            },
            {
              name: 'Arnold',
              url: 'https://www.arnoldrenderer.com',
              type: 'tool',
              description: 'Advanced Monte Carlo ray tracer for Maya and 3ds Max - Used in film VFX'
            },
            {
              name: 'V-Ray',
              url: 'https://www.chaos.com/vray',
              type: 'tool',
              description: 'Industry-standard renderer for architectural visualization - $80/month'
            },
            {
              name: 'Redshift',
              url: 'https://www.maxon.net/redshift',
              type: 'tool',
              description: 'GPU-accelerated biased renderer for production rendering - $50/month'
            },
            {
              name: 'Octane Render',
              url: 'https://home.otoy.com/render/octane-render',
              type: 'tool',
              description: 'GPU rendering with real-time viewport - $19.99/month subscription'
            },
            {
              name: 'Corona Renderer',
              url: 'https://corona-renderer.com',
              type: 'tool',
              description: 'Photorealistic renderer for 3ds Max and Cinema 4D - $42/month'
            }
          ]
        },
        {
          name: 'Real-Time Rendering',
          resources: [
            {
              name: 'Unreal Engine 5',
              url: 'https://www.unrealengine.com',
              type: 'tool',
              description: 'Real-time 3D creation tool with Nanite and Lumen - Free with 5% royalty on revenue'
            },
            {
              name: 'Unity',
              url: 'https://unity.com',
              type: 'tool',
              description: 'Real-time 3D development platform with HDRP - Free for revenue under $100k/year'
            },
            {
              name: 'Marmoset Toolbag',
              url: 'https://marmoset.co/toolbag',
              type: 'tool',
              description: 'Real-time rendering and baking suite for game assets - $199 one-time'
            },
            {
              name: 'KeyShot',
              url: 'https://www.keyshot.com',
              type: 'tool',
              description: 'Real-time ray tracing for product visualization - $99/month'
            }
          ]
        },
        {
          name: 'Lighting & Materials',
          resources: [
            {
              name: 'HDRI Haven',
              url: 'https://hdri-haven.com',
              type: 'resource',
              description: '100% free high-resolution HDRIs for realistic lighting and reflections'
            },
            {
              name: 'Poly Haven',
              url: 'https://polyhaven.com',
              type: 'resource',
              description: 'Free HDRIs, textures, and 3D models - CC0 licensed for commercial use'
            },
            {
              name: 'HDRI Link',
              url: 'https://hdrilink.com',
              type: 'resource',
              description: 'Free and premium HDRI environments for 3D lighting'
            }
          ]
        }
      ]
    },
    texturing: {
      title: 'Texturing & Materials',
      icon: Palette,
      color: '#f59e0b',
      sections: [
        {
          name: 'Texturing Software',
          resources: [
            {
              name: 'Substance 3D Painter',
              url: 'https://www.adobe.com/products/substance3d-painter.html',
              type: 'tool',
              description: 'Industry-standard 3D painting - smart materials and brushes - $19.99/month'
            },
            {
              name: 'Substance 3D Designer',
              url: 'https://www.adobe.com/products/substance3d-designer.html',
              type: 'tool',
              description: 'Node-based procedural texture creation - Part of Substance Collection'
            },
            {
              name: 'Quixel Mixer',
              url: 'https://quixel.com/mixer',
              type: 'tool',
              description: 'Free texture mixing and creation tool with Megascans integration'
            },
            {
              name: 'Mari',
              url: 'https://www.foundry.com/products/mari',
              type: 'tool',
              description: 'VFX-industry texturing for ultra-high resolution - $299/month'
            },
            {
              name: 'ArmorPaint',
              url: 'https://armorpaint.org',
              type: 'tool',
              description: 'Open-source 3D PBR texture painting software - $19 one-time'
            }
          ]
        },
        {
          name: 'Texture Libraries',
          resources: [
            {
              name: 'Quixel Megascans',
              url: 'https://quixel.com/megascans',
              type: 'resource',
              description: 'Photoscanned PBR textures and assets - Free for Unreal Engine users'
            },
            {
              name: 'Poliigon',
              url: 'https://www.poliigon.com',
              type: 'resource',
              description: 'High-quality PBR textures, models, and HDRIs - Free tier available'
            },
            {
              name: 'Textures.com',
              url: 'https://www.textures.com',
              type: 'resource',
              description: 'Massive library with 200k+ textures - 15 free credits daily'
            },
            {
              name: 'Ambient CG',
              url: 'https://ambientcg.com',
              type: 'resource',
              description: 'Free CC0 PBR materials with physically accurate properties'
            },
            {
              name: 'CC0 Textures',
              url: 'https://cc0textures.com',
              type: 'resource',
              description: 'Public domain PBR textures completely free for any purpose'
            },
            {
              name: '3D Textures',
              url: 'https://3dtextures.me',
              type: 'resource',
              description: 'Free seamless PBR textures for commercial and personal projects'
            }
          ]
        },
        {
          name: 'Material Resources',
          resources: [
            {
              name: 'Material Maker',
              url: 'https://www.materialmaker.org',
              type: 'tool',
              description: 'Open-source procedural texture creation tool - node-based workflow'
            },
            {
              name: 'Blender Market Materials',
              url: 'https://blendermarket.com/categories/materials-and-shaders',
              type: 'resource',
              description: 'Premium shader packs and procedural material libraries'
            }
          ]
        }
      ]
    },
    assets: {
      title: '3D Assets & Models',
      icon: Package,
      color: '#ec4899',
      sections: [
        {
          name: 'Free 3D Model Libraries',
          resources: [
            {
              name: 'Poly Haven',
              url: 'https://polyhaven.com/models',
              type: 'resource',
              description: 'Free CC0 3D models with textures and HDRIs - no sign-up required'
            },
            {
              name: 'Sketchfab',
              url: 'https://sketchfab.com',
              type: 'resource',
              description: 'Largest 3D model platform with downloadable free models and marketplace'
            },
            {
              name: 'Free3D',
              url: 'https://free3d.com',
              type: 'resource',
              description: 'Free 3D models in various formats - OBJ, FBX, Blend, STL'
            },
            {
              name: 'CGTrader Free',
              url: 'https://www.cgtrader.com/free-3d-models',
              type: 'resource',
              description: 'Professional marketplace with 1M+ models - free and premium options'
            },
            {
              name: 'TurboSquid Free',
              url: 'https://www.turbosquid.com/Search/3D-Models/free',
              type: 'resource',
              description: 'Industry-leading 3D model marketplace with quality-checked assets'
            },
            {
              name: 'BlendSwap',
              url: 'https://www.blendswap.com',
              type: 'resource',
              description: 'Community-driven Blender file sharing with CC licenses'
            }
          ]
        },
        {
          name: 'Premium 3D Marketplaces',
          resources: [
            {
              name: 'Blender Market',
              url: 'https://blendermarket.com',
              type: 'resource',
              description: 'Premium Blender assets, add-ons, courses, and materials'
            },
            {
              name: 'ArtStation Marketplace',
              url: 'https://www.artstation.com/marketplace',
              type: 'resource',
              description: 'Professional game-ready assets from industry artists'
            },
            {
              name: 'Unreal Engine Marketplace',
              url: 'https://www.unrealengine.com/marketplace',
              type: 'resource',
              description: 'Optimized 3D assets, environments, and tools for Unreal Engine'
            },
            {
              name: 'Unity Asset Store',
              url: 'https://assetstore.unity.com',
              type: 'resource',
              description: '3D models, textures, and complete project kits for Unity'
            }
          ]
        },
        {
          name: 'Photogrammetry & Scans',
          resources: [
            {
              name: 'Quixel Megascans',
              url: 'https://quixel.com/megascans/library',
              type: 'resource',
              description: 'World\'s largest photogrammetry asset library - 16k+ assets'
            },
            {
              name: 'Polycam',
              url: 'https://poly.cam',
              type: 'tool',
              description: 'Mobile LiDAR and photogrammetry scanning app - free tier available'
            },
            {
              name: 'RealityScan',
              url: 'https://www.unrealengine.com/realityscan',
              type: 'tool',
              description: 'Free mobile 3D scanning app from Epic Games'
            }
          ]
        }
      ]
    },
    specializations: {
      title: 'Specializations & Industries',
      icon: Award,
      color: '#14b8a6',
      sections: [
        {
          name: 'Game Development',
          resources: [
            {
              name: 'Unreal Engine Documentation',
              url: 'https://docs.unrealengine.com',
              type: 'resource',
              description: 'Complete guides for game asset creation and optimization'
            },
            {
              name: 'Unity Learn',
              url: 'https://learn.unity.com',
              type: 'course',
              description: 'Free courses on 3D game asset creation and optimization'
            },
            {
              name: 'Stylized Station',
              url: 'https://www.youtube.com/@StylizedStation',
              type: 'youtube',
              description: 'Stylized game art tutorials and low poly modeling'
            },
            {
              name: 'Game Art Development',
              url: 'https://www.udemy.com/topic/game-art',
              type: 'course',
              description: 'Udemy courses on game asset creation for Unity and Unreal'
            }
          ]
        },
        {
          name: 'Architectural Visualization',
          resources: [
            {
              name: 'Chaos Enscape',
              url: 'https://enscape3d.com',
              type: 'tool',
              description: 'Real-time rendering for architecture integrated with CAD - $89/month'
            },
            {
              name: 'Twinmotion',
              url: 'https://www.unrealengine.com/twinmotion',
              type: 'tool',
              description: 'Real-time architectural visualization powered by Unreal - $445/year'
            },
            {
              name: 'Lumion',
              url: 'https://lumion.com',
              type: 'tool',
              description: 'Intuitive architectural rendering software - $1,499+ one-time'
            },
            {
              name: 'ArchiCGI',
              url: 'https://www.youtube.com/@archicgi',
              type: 'youtube',
              description: 'Architectural visualization tutorials and portfolio showcases'
            }
          ]
        },
        {
          name: 'Character Design & Animation',
          resources: [
            {
              name: 'Character Creator 4',
              url: 'https://www.reallusion.com/character-creator',
              type: 'tool',
              description: 'Full character creation pipeline with auto-rigging - $199 one-time'
            },
            {
              name: 'Mixamo',
              url: 'https://www.mixamo.com',
              type: 'resource',
              description: 'Free character rigging and animation library from Adobe'
            },
            {
              name: 'YanSculpts',
              url: 'https://www.youtube.com/@yansculpts',
              type: 'youtube',
              description: 'Stylized character sculpting in ZBrush and Blender'
            },
            {
              name: 'PIXXO 3D',
              url: 'https://www.youtube.com/@PIXXO3D',
              type: 'youtube',
              description: 'Character creation and stylized 3D modeling tutorials'
            }
          ]
        },
        {
          name: 'VFX & Motion Graphics',
          resources: [
            {
              name: 'InLight VFX',
              url: 'https://www.youtube.com/@InLightVFX',
              type: 'youtube',
              description: 'Blender VFX tutorials from compositing to destruction simulations'
            },
            {
              name: 'CG Matter',
              url: 'https://www.youtube.com/@CGMatter',
              type: 'youtube',
              description: 'Quick Blender VFX tricks and geometry nodes tutorials'
            },
            {
              name: 'Xan3D',
              url: 'https://www.youtube.com/@Xan3D',
              type: 'youtube',
              description: 'Geometry nodes mastery and procedural VFX in Blender'
            },
            {
              name: 'After Effects + 3D',
              url: 'https://www.youtube.com/results?search_query=after+effects+3d+tutorial',
              type: 'youtube',
              description: 'Integration workflows between 3D software and After Effects'
            }
          ]
        },
        {
          name: 'Product Design & CAD',
          resources: [
            {
              name: 'Product Design Online',
              url: 'https://productdesignonline.com',
              type: 'course',
              description: 'Industrial design courses focused on Fusion 360 and Rhino'
            },
            {
              name: 'Fusion 360 School',
              url: 'https://www.youtube.com/@Fusion360School',
              type: 'youtube',
              description: 'Complete Fusion 360 tutorials from beginner to advanced'
            },
            {
              name: 'SolidWorks Tutorials',
              url: 'https://www.solidworks.com/support/training-tutorials',
              type: 'course',
              description: 'Official SolidWorks training and certification programs'
            }
          ]
        }
      ]
    },
    community: {
      title: 'Communities & Forums',
      icon: Users,
      color: '#ef4444',
      sections: [
        {
          name: '3D Artist Communities',
          resources: [
            {
              name: 'ArtStation',
              url: 'https://www.artstation.com',
              type: 'community',
              description: 'Premier portfolio platform for 3D artists with job boards and challenges'
            },
            {
              name: 'Blender Artists',
              url: 'https://blenderartists.org',
              type: 'community',
              description: 'Official Blender community forum with 400k+ members'
            },
            {
              name: 'Polycount',
              url: 'https://polycount.com',
              type: 'community',
              description: 'Game art community forum for technical 3D discussions'
            },
            {
              name: 'ZBrush Central',
              url: 'https://www.zbrushcentral.com',
              type: 'community',
              description: 'Digital sculpting community with galleries and forums'
            },
            {
              name: 'CGSociety',
              url: 'https://cgsociety.org',
              type: 'community',
              description: 'Professional CG artist community with galleries and job boards'
            }
          ]
        },
        {
          name: 'Reddit Communities',
          resources: [
            {
              name: 'r/blender',
              url: 'https://www.reddit.com/r/blender',
              type: 'community',
              description: '1.5M+ members sharing Blender artwork and getting feedback'
            },
            {
              name: 'r/3Dmodeling',
              url: 'https://www.reddit.com/r/3Dmodeling',
              type: 'community',
              description: 'General 3D modeling community for all software and skill levels'
            },
            {
              name: 'r/ZBrush',
              url: 'https://www.reddit.com/r/ZBrush',
              type: 'community',
              description: 'Digital sculpting community for ZBrush artists'
            },
            {
              name: 'r/Unity3D',
              url: 'https://www.reddit.com/r/Unity3D',
              type: 'community',
              description: 'Game development community focused on Unity and 3D assets'
            },
            {
              name: 'r/unrealengine',
              url: 'https://www.reddit.com/r/unrealengine',
              type: 'community',
              description: 'Unreal Engine community for real-time 3D and game development'
            }
          ]
        },
        {
          name: 'Discord Servers',
          resources: [
            {
              name: 'Blender Official Discord',
              url: 'https://discord.com/invite/blender',
              type: 'community',
              description: 'Official Blender community server with channels for all topics'
            },
            {
              name: 'CG Cookie Discord',
              url: 'https://cgcookie.com/discord',
              type: 'community',
              description: 'Learning-focused community with daily challenges and critiques'
            },
            {
              name: 'FlippedNormals Discord',
              url: 'https://discord.gg/flippednormals',
              type: 'community',
              description: 'Professional 3D artists sharing industry insights and feedback'
            }
          ]
        }
      ]
    },
    addons: {
      title: 'Add-ons & Plugins',
      icon: Zap,
      color: '#a855f7',
      sections: [
        {
          name: 'Essential Blender Add-ons',
          resources: [
            {
              name: 'Hard Ops / Boxcutter',
              url: 'https://blendermarket.com/products/hard-ops--boxcutter-ultimate-bundle',
              type: 'tool',
              description: 'Hard surface modeling toolkit - industry-standard workflow - $60'
            },
            {
              name: 'Machine Tools',
              url: 'https://blendermarket.com/products/MACHIN3tools',
              type: 'tool',
              description: 'Essential workflow improvements and modeling tools - Free'
            },
            {
              name: 'Node Wrangler',
              url: 'https://docs.blender.org/manual/en/latest/addons/node/node_wrangler.html',
              type: 'tool',
              description: 'Built-in add-on for fast shader and compositor node workflows'
            },
            {
              name: 'Animation Nodes',
              url: 'https://animation-nodes.com',
              type: 'tool',
              description: 'Node-based visual scripting for motion graphics - Free'
            },
            {
              name: 'Real Camera',
              url: 'https://3d-wolf.com/products/camera.html',
              type: 'tool',
              description: 'Professional camera simulator with realistic lens behavior - $30'
            }
          ]
        },
        {
          name: 'Modeling & Sculpting Add-ons',
          resources: [
            {
              name: 'Mesh Machine',
              url: 'https://blendermarket.com/products/MESHmachine',
              type: 'tool',
              description: 'Advanced modeling toolkit for hard surface and chamfer workflows - $25'
            },
            {
              name: 'DECALmachine',
              url: 'https://blendermarket.com/products/DECALmachine',
              type: 'tool',
              description: 'Instant surface detailing with decal library - $38'
            },
            {
              name: 'Tissue',
              url: 'https://github.com/alessandro-zomparelli/tissue',
              type: 'tool',
              description: 'Computational design tools for generative modeling - Free'
            },
            {
              name: 'Fluent Materializer',
              url: 'https://blendermarket.com/products/fluent-materializer',
              type: 'tool',
              description: 'Material library with 1000+ PBR materials - $29'
            }
          ]
        },
        {
          name: 'Rendering & Lighting Add-ons',
          resources: [
            {
              name: 'Pro Lighting Studio',
              url: 'https://blendermarket.com/products/pro-lighting-studio',
              type: 'tool',
              description: 'Studio lighting presets and HDRI manager - $32'
            },
            {
              name: 'Lily Surface Scraper',
              url: 'https://github.com/eliemichel/LilySurfaceScraper',
              type: 'tool',
              description: 'Import materials directly from online libraries - Free'
            },
            {
              name: 'Physical Starlight and Atmosphere',
              url: 'https://blendermarket.com/products/physical-starlight-and-atmosphere',
              type: 'tool',
              description: 'Realistic sky and atmospheric rendering - $12'
            }
          ]
        }
      ]
    },
    tools: {
      title: 'Supporting Tools',
      icon: Settings,
      color: '#06b6d4',
      sections: [
        {
          name: 'Optimization & Baking',
          resources: [
            {
              name: 'Marmoset Toolbag',
              url: 'https://marmoset.co/toolbag',
              type: 'tool',
              description: 'Best-in-class normal map and texture baking - $199 one-time'
            },
            {
              name: 'Simplygon',
              url: 'https://www.simplygon.com',
              type: 'tool',
              description: 'Automatic 3D mesh optimization and LOD generation - Enterprise'
            },
            {
              name: 'InstaLOD',
              url: 'https://instalod.com',
              type: 'tool',
              description: 'AI-powered 3D optimization and remeshing tools'
            },
            {
              name: 'Meshroom',
              url: 'https://alicevision.org/#meshroom',
              type: 'tool',
              description: 'Free open-source photogrammetry software for 3D reconstruction'
            }
          ]
        },
        {
          name: 'File Conversion & Management',
          resources: [
            {
              name: 'Blender FBX Exporter',
              url: 'https://docs.blender.org/manual/en/latest/addons/import_export/scene_fbx.html',
              type: 'tool',
              description: 'Built-in FBX export for game engines and DCC software'
            },
            {
              name: 'Sketchfab Plugin',
              url: 'https://sketchfab.com/exporters/blender',
              type: 'tool',
              description: 'Direct upload to Sketchfab from Blender'
            },
            {
              name: 'glTF Exporter',
              url: 'https://www.khronos.org/gltf',
              type: 'tool',
              description: 'Standard 3D file format for web and AR/VR applications'
            }
          ]
        },
        {
          name: 'Reference & Productivity',
          resources: [
            {
              name: 'PureRef',
              url: 'https://www.pureref.com',
              type: 'tool',
              description: 'Reference image organizer for artists - Pay what you want'
            },
            {
              name: 'Kuadro',
              url: 'https://kruelgames.com/tools/kuadro',
              type: 'tool',
              description: 'In-viewport reference image viewer for Blender'
            },
            {
              name: 'Pinterest',
              url: 'https://www.pinterest.com',
              type: 'resource',
              description: 'Visual inspiration and reference board platform'
            }
          ]
        }
      ]
    }
  };

  // Category navigation
  const categories = [
    { id: 'all', label: 'All Resources', icon: Boxes },
    { id: 'software', label: 'Software', icon: Box },
    { id: 'learning', label: 'Learning', icon: BookOpen },
    { id: 'rendering', label: 'Rendering', icon: Eye },
    { id: 'texturing', label: 'Texturing', icon: Palette },
    { id: 'assets', label: 'Assets', icon: Package },
    { id: 'specializations', label: 'Specializations', icon: Award },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'addons', label: 'Add-ons', icon: Zap },
    { id: 'tools', label: 'Tools', icon: Settings }
  ];

  // Resource type badges
  const getTypeBadge = (type) => {
    const badges = {
      tool: { icon: Zap, color: '#3b82f6', label: 'Tool' },
      course: { icon: BookOpen, color: '#10b981', label: 'Course' },
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
              <Box className="w-7 h-7 text-[#8b5cf6]" />
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">3D Modeling Resource Hub</h1>
                <p className={`text-xs mt-0.5 hidden sm:block ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                  Comprehensive 3D creation directory
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
                  className={`pl-10 pr-4 py-2 w-64 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] ${
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
              className={`w-full pl-10 pr-4 py-2 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] ${
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
            { label: 'Total Resources', value: totalResources, icon: Boxes },
            { label: 'Categories', value: Object.keys(resources).length, icon: Layers },
            { label: 'Free Tools', value: '40%', icon: TrendingUp },
            { label: 'Updated', value: 'Nov 2025', icon: Zap }
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border text-center ${
                darkMode ? 'bg-[#0f0f0f] border-[#1a1a1a]' : 'bg-white border-gray-200'
              }`}
            >
              <stat.icon className="w-5 h-5 mx-auto mb-2 text-[#8b5cf6]" />
              <div className="text-xl sm:text-2xl font-semibold text-[#8b5cf6]">{stat.value}</div>
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
                            ? 'bg-[#8b5cf6]/10 text-[#8b5cf6]'
                            : 'bg-purple-50 text-purple-600'
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
                                ? 'bg-[#8b5cf6]/10 text-[#8b5cf6]'
                                : 'bg-purple-50 text-purple-600'
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
                                  darkMode ? 'hover:text-[#8b5cf6]' : 'hover:text-purple-600'
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
                                                  darkMode ? 'group-hover:text-[#8b5cf6]' : 'group-hover:text-purple-600'
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
              Last updated: November 2025 • {totalResources} curated 3D modeling resources
            </p>
            <div className="flex items-center gap-2 text-xs">
              <span className={darkMode ? 'text-gray-500' : 'text-gray-600'}>
                Built for 3D artists, by 3D artists
              </span>
              <Box className="w-4 h-4 text-[#8b5cf6]" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ThreeDModelingHub;
