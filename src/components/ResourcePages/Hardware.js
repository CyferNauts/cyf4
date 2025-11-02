import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Moon, Sun, ExternalLink, Copy, ChevronDown, ChevronRight,
  Cpu, Monitor, HardDrive, Zap, BookOpen, Video, Download, Star,
  TrendingUp, Menu, X, Filter, Users, Award, Globe, Settings,
  Wifi, Smartphone, Wrench, ShoppingCart, FileText, Youtube,
  Thermometer, Fan, Battery, Gamepad2, Mic, Headphones, Keyboard,
  MousePointer, Laptop, Layers, Box, Radio, Usb
} from 'lucide-react';

const HardwareResourceHub = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedSections, setExpandedSections] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState('');

  // Comprehensive hardware resource database
  const resources = {
    reviews: {
      title: 'Hardware Reviews & News',
      icon: Monitor,
      color: '#3b82f6',
      sections: [
        {
          name: 'Major Review Sites',
          resources: [
            {
              name: 'Tom\'s Hardware',
              url: 'https://www.tomshardware.com',
              type: 'resource',
              description: 'In-depth hardware reviews, benchmarks, and buying guides - trusted since 1996'
            },
            {
              name: 'AnandTech',
              url: 'https://www.anandtech.com',
              type: 'resource',
              description: 'Technical deep-dives into CPUs, GPUs, and storage with detailed analysis'
            },
            {
              name: 'PCMag',
              url: 'https://www.pcmag.com',
              type: 'resource',
              description: 'Lab-tested reviews of hardware, software, and consumer electronics'
            },
            {
              name: 'TechSpot',
              url: 'https://www.techspot.com',
              type: 'resource',
              description: 'Hardware benchmarks, reviews, and tech news with performance charts'
            },
            {
              name: 'TechPowerUp',
              url: 'https://www.techpowerup.com',
              type: 'resource',
              description: 'GPU and CPU database with comprehensive reviews and specifications'
            },
            {
              name: 'Guru3D',
              url: 'https://www.guru3d.com',
              type: 'resource',
              description: 'Graphics card reviews, driver updates, and overclocking guides'
            },
            {
              name: 'Hardware Unboxed',
              url: 'https://www.youtube.com/@Hardwareunboxed',
              type: 'youtube',
              description: 'Comprehensive GPU and monitor reviews with extensive benchmarking - 1.5M+ subscribers'
            }
          ]
        },
        {
          name: 'YouTube Tech Channels',
          resources: [
            {
              name: 'Gamers Nexus',
              url: 'https://www.youtube.com/@GamersNexus',
              type: 'youtube',
              description: 'Detailed technical analysis, case reviews, and PC hardware testing - 2M+ subscribers'
            },
            {
              name: 'Linus Tech Tips',
              url: 'https://www.youtube.com/@LinusTechTips',
              type: 'youtube',
              description: 'Hardware reviews, PC builds, and tech entertainment - 16M+ subscribers'
            },
            {
              name: 'JayzTwoCents',
              url: 'https://www.youtube.com/@Jayztwocents',
              type: 'youtube',
              description: 'PC building, water cooling, and personal hardware reflections - 3.6M+ subscribers'
            },
            {
              name: 'Paul\'s Hardware',
              url: 'https://www.youtube.com/@paulshardware',
              type: 'youtube',
              description: 'PC build guides, hardware reviews, and monthly component deals - 2M+ subscribers'
            },
            {
              name: 'Optimum Tech',
              url: 'https://www.youtube.com/@OptimumTech',
              type: 'youtube',
              description: 'Small form factor PC builds and minimalist hardware setups - 1.2M+ subscribers'
            },
            {
              name: 'der8auer',
              url: 'https://www.youtube.com/@der8auer',
              type: 'youtube',
              description: 'Extreme overclocking and CPU engineering deep-dives - 1M+ subscribers'
            },
            {
              name: 'Geekerwan',
              url: 'https://www.youtube.com/@Geekerwan',
              type: 'youtube',
              description: 'In-depth technical analysis of mobile chips and hardware (Chinese with subtitles)'
            }
          ]
        },
        {
          name: 'Specialized Hardware Blogs',
          resources: [
            {
              name: 'ThinkComputers.org',
              url: 'https://thinkcomputers.org',
              type: 'resource',
              description: 'Daily hardware reviews covering graphics cards, motherboards, CPUs, and gaming accessories'
            },
            {
              name: 'Overclockers.com',
              url: 'https://www.overclockers.com',
              type: 'resource',
              description: 'Enthusiast community with expert reviews and overclocking guides'
            },
            {
              name: 'TFTCentral',
              url: 'https://tftcentral.co.uk',
              type: 'resource',
              description: 'Largest dedicated monitor review site with in-depth panel analysis'
            },
            {
              name: 'Vortez',
              url: 'https://www.vortez.net',
              type: 'resource',
              description: 'Detailed hardware reviews for enthusiasts, gamers, and PC builders'
            },
            {
              name: '[H]ard|Forum',
              url: 'https://hardforum.com',
              type: 'community',
              description: 'Long-running hardware enthusiast community with trusted reviews'
            }
          ]
        }
      ]
    },
    pcBuilding: {
      title: 'PC Building Guides',
      icon: Cpu,
      color: '#10b981',
      sections: [
        {
          name: 'Complete Build Guides',
          resources: [
            {
              name: 'PC Part Picker',
              url: 'https://pcpartpicker.com',
              type: 'tool',
              description: 'Compatibility checking, price tracking, and build planning with user-submitted builds'
            },
            {
              name: 'Logical Increments',
              url: 'https://www.logicalincrements.com',
              type: 'resource',
              description: 'PC parts guide organized by budget tiers with component recommendations'
            },
            {
              name: 'How to Build a PC 2025 - Linus Tech Tips',
              url: 'https://www.youtube.com/watch?v=s1fxZ-VWs2U',
              type: 'youtube',
              description: 'Complete 2-hour build guide covering every step from unboxing to BIOS - Updated 2024'
            },
            {
              name: 'PC Building Guide - Paul\'s Hardware',
              url: 'https://www.youtube.com/watch?v=Mho0M1Ns0Rw',
              type: 'youtube',
              description: 'Full detailed build guide with Intel/AMD CPU installation and troubleshooting'
            },
            {
              name: 'r/buildapc Wiki',
              url: 'https://www.reddit.com/r/buildapc/wiki',
              type: 'resource',
              description: 'Community-driven comprehensive PC building guide and troubleshooting resources'
            },
            {
              name: 'Tom\'s Hardware PC Building Guide',
              url: 'https://www.tomshardware.com/how-to/build-a-pc',
              type: 'resource',
              description: 'Step-by-step PC assembly tutorial with component selection advice'
            }
          ]
        },
        {
          name: 'Component Selection',
          resources: [
            {
              name: 'CPU Hierarchy & Benchmarks',
              url: 'https://www.tomshardware.com/reviews/cpu-hierarchy,4312.html',
              type: 'resource',
              description: 'Tom\'s Hardware CPU performance rankings and gaming benchmarks'
            },
            {
              name: 'GPU Hierarchy & Benchmarks',
              url: 'https://www.tomshardware.com/reviews/gpu-hierarchy,4388.html',
              type: 'resource',
              description: 'Graphics card performance rankings with 1080p, 1440p, 4K testing'
            },
            {
              name: 'PSU Tier List',
              url: 'https://cultists.network/140/psu-tier-list',
              type: 'resource',
              description: 'Community-maintained power supply ranking based on quality and reliability'
            },
            {
              name: 'JonnyGURU PSU Reviews',
              url: 'http://www.jonnyguru.com',
              type: 'resource',
              description: 'In-depth power supply testing and reviews - industry standard since 2005'
            },
            {
              name: 'RAM Speed & Timing Guide',
              url: 'https://www.crucial.com/articles/about-memory/difference-between-speed-and-latency',
              type: 'resource',
              description: 'Understanding memory speed, CAS latency, and performance impact'
            }
          ]
        },
        {
          name: 'Cooling Solutions',
          resources: [
            {
              name: 'CPU Cooler Reviews - Gamers Nexus',
              url: 'https://www.gamersnexus.net/guides/cpu-coolers',
              type: 'resource',
              description: 'Thermal testing and noise measurements for air and AIO liquid coolers'
            },
            {
              name: 'Case Airflow Optimization',
              url: 'https://www.youtube.com/results?search_query=case+airflow+guide',
              type: 'youtube',
              description: 'Fan configuration guides for optimal positive/negative pressure'
            },
            {
              name: 'Thermal Paste Application Guide',
              url: 'https://www.tomshardware.com/news/thermal-paste-application-guide,37667.html',
              type: 'resource',
              description: 'Testing different thermal paste application methods for best temperatures'
            },
            {
              name: 'Arctic Cooling Products',
              url: 'https://www.arctic.de',
              type: 'resource',
              description: 'Budget-friendly thermal solutions and case fans with excellent performance'
            }
          ]
        },
        {
          name: 'Case Selection',
          resources: [
            {
              name: 'Best PC Cases - Gamers Nexus',
              url: 'https://www.gamersnexus.net/guides/3604-best-gaming-pc-cases-2020',
              type: 'resource',
              description: 'Annual case roundup with thermal and noise testing methodology'
            },
            {
              name: 'SFF (Small Form Factor) Cases',
              url: 'https://www.reddit.com/r/sffpc',
              type: 'community',
              description: 'Community dedicated to compact PC builds under 20L volume'
            },
            {
              name: 'Fractal Design',
              url: 'https://www.fractal-design.com',
              type: 'resource',
              description: 'Minimalist cases with excellent build quality and airflow'
            },
            {
              name: 'Lian Li',
              url: 'https://lian-li.com',
              type: 'resource',
              description: 'Premium aluminum cases and innovative designs like O11 Dynamic'
            }
          ]
        }
      ]
    },
    components: {
      title: 'Component Databases',
      icon: HardDrive,
      color: '#8b5cf6',
      sections: [
        {
          name: 'CPU Resources',
          resources: [
            {
              name: 'Intel Ark',
              url: 'https://ark.intel.com',
              type: 'resource',
              description: 'Official Intel processor specifications database with detailed technical specs'
            },
            {
              name: 'AMD Product Specifications',
              url: 'https://www.amd.com/en/products/specifications/processors',
              type: 'resource',
              description: 'Official AMD Ryzen and EPYC processor specifications and documentation'
            },
            {
              name: 'CPU-World',
              url: 'http://www.cpu-world.com',
              type: 'resource',
              description: 'Comprehensive CPU database with historical processors and specifications'
            },
            {
              name: 'PassMark CPU Benchmarks',
              url: 'https://www.cpubenchmark.net',
              type: 'resource',
              description: 'User-submitted CPU performance benchmarks and comparison charts'
            }
          ]
        },
        {
          name: 'GPU Resources',
          resources: [
            {
              name: 'TechPowerUp GPU Database',
              url: 'https://www.techpowerup.com/gpu-specs',
              type: 'resource',
              description: 'Complete graphics card specifications with BIOS collection'
            },
            {
              name: 'NVIDIA GeForce',
              url: 'https://www.nvidia.com/en-us/geforce/graphics-cards',
              type: 'resource',
              description: 'Official NVIDIA RTX GPU specs, drivers, and support resources'
            },
            {
              name: 'AMD Radeon',
              url: 'https://www.amd.com/en/graphics',
              type: 'resource',
              description: 'Official AMD Radeon RX GPU specifications and driver downloads'
            },
            {
              name: '3DMark Benchmarks',
              url: 'https://www.3dmark.com',
              type: 'tool',
              description: 'Industry-standard GPU and system benchmarking tool with leaderboards'
            }
          ]
        },
        {
          name: 'Storage & Memory',
          resources: [
            {
              name: 'SSD Buying Guide - Tom\'s Hardware',
              url: 'https://www.tomshardware.com/reviews/best-ssds,3891.html',
              type: 'resource',
              description: 'Updated SSD recommendations and performance testing across price ranges'
            },
            {
              name: 'NVMe SSD List',
              url: 'https://docs.google.com/spreadsheets/d/1B27_j9NDPU3cNlj2HKcrfpJKHkOf-Oi1DbuuQva2gT4',
              type: 'resource',
              description: 'Community-maintained spreadsheet ranking NVMe SSDs by performance and value'
            },
            {
              name: 'Crucial Memory Advisor',
              url: 'https://www.crucial.com/store/advisor',
              type: 'tool',
              description: 'Find compatible RAM and SSD upgrades for your system'
            },
            {
              name: 'Western Digital',
              url: 'https://www.westerndigital.com',
              type: 'resource',
              description: 'HDDs, SSDs, and NAS storage solutions from WD, SanDisk, and WD Black'
            }
          ]
        },
        {
          name: 'Motherboards',
          resources: [
            {
              name: 'Motherboard VRM Tier List',
              url: 'https://www.reddit.com/r/Amd/comments/db60m3/the_zen_2_vrm_tier_list',
              type: 'resource',
              description: 'Community ranking of motherboard power delivery quality for overclocking'
            },
            {
              name: 'ASUS',
              url: 'https://www.asus.com/motherboards-components/motherboards',
              type: 'resource',
              description: 'ROG, TUF, and Prime motherboard lineups with extensive BIOS features'
            },
            {
              name: 'MSI',
              url: 'https://www.msi.com/Motherboards',
              type: 'resource',
              description: 'Gaming, professional, and enthusiast motherboards with Click BIOS'
            },
            {
              name: 'Gigabyte / Aorus',
              url: 'https://www.gigabyte.com/Motherboard',
              type: 'resource',
              description: 'High-end motherboards with premium VRMs and PCIe 5.0 support'
            }
          ]
        }
      ]
    },
    peripherals: {
      title: 'Peripherals & Accessories',
      icon: Keyboard,
      color: '#f59e0b',
      sections: [
        {
          name: 'Mechanical Keyboards',
          resources: [
            {
              name: 'r/MechanicalKeyboards',
              url: 'https://www.reddit.com/r/MechanicalKeyboards',
              type: 'community',
              description: '2M+ member community for custom keyboard enthusiasts and reviews'
            },
            {
              name: 'Switch & Click',
              url: 'https://www.switchandclick.com',
              type: 'resource',
              description: 'Mechanical keyboard reviews, switch guides, and modding tutorials'
            },
            {
              name: 'Keyboard University',
              url: 'https://www.keyboard.university',
              type: 'resource',
              description: 'Comprehensive guide to switches, keycaps, layouts, and custom builds'
            },
            {
              name: 'Keychron',
              url: 'https://www.keychron.com',
              type: 'resource',
              description: 'Popular wireless mechanical keyboards with hot-swappable switches'
            },
            {
              name: 'Drop (formerly Massdrop)',
              url: 'https://drop.com/mechanical-keyboards',
              type: 'resource',
              description: 'Group-buy platform for premium custom keyboards and keycaps'
            }
          ]
        },
        {
          name: 'Gaming Mice',
          resources: [
            {
              name: 'Rocket Jump Ninja',
              url: 'https://www.rocketjumpninja.com',
              type: 'resource',
              description: 'Comprehensive mouse reviews with top recommendations by hand size'
            },
            {
              name: 'r/MouseReview',
              url: 'https://www.reddit.com/r/MouseReview',
              type: 'community',
              description: 'Gaming mouse community with detailed reviews and sensor analysis'
            },
            {
              name: 'Logitech G',
              url: 'https://www.logitechg.com/en-us/products/gaming-mice.html',
              type: 'resource',
              description: 'HERO sensor mice with wireless technology and customization software'
            },
            {
              name: 'Razer',
              url: 'https://www.razer.com/pc/gaming-mice',
              type: 'resource',
              description: 'Wide range of gaming mice with Focus+ sensors and Chroma RGB'
            }
          ]
        },
        {
          name: 'Monitors',
          resources: [
            {
              name: 'RTINGs Monitor Reviews',
              url: 'https://www.rtings.com/monitor',
              type: 'resource',
              description: 'Lab-tested monitor reviews with comprehensive measurements and recommendations'
            },
            {
              name: 'Monitor Unboxed',
              url: 'https://www.youtube.com/@Techtesters',
              type: 'youtube',
              description: 'In-depth display reviews and calibration guides from Hardware Unboxed'
            },
            {
              name: 'Blur Busters',
              url: 'https://blurbusters.com',
              type: 'resource',
              description: 'Motion clarity testing, G-Sync/FreeSync guides, and refresh rate science'
            },
            {
              name: 'LG UltraGear',
              url: 'https://www.lg.com/us/monitors/gaming',
              type: 'resource',
              description: 'High refresh rate gaming monitors with OLED and Nano IPS panels'
            }
          ]
        },
        {
          name: 'Audio Equipment',
          resources: [
            {
              name: 'r/HeadphoneAdvice',
              url: 'https://www.reddit.com/r/HeadphoneAdvice',
              type: 'community',
              description: 'Headphone recommendations and purchase advice from audiophile community'
            },
            {
              name: 'Crinacle\'s Rankings',
              url: 'https://crinacle.com',
              type: 'resource',
              description: 'IEM and headphone rankings with detailed frequency response measurements'
            },
            {
              name: 'Audio Science Review',
              url: 'https://www.audiosciencereview.com',
              type: 'resource',
              description: 'Objective audio equipment testing with measurements and analysis'
            },
            {
              name: 'Sennheiser',
              url: 'https://www.sennheiser.com',
              type: 'resource',
              description: 'Professional and consumer audio with legendary HD series headphones'
            }
          ]
        }
      ]
    },
    embedded: {
      title: 'Embedded Systems & DIY',
      icon: Cpu,
      color: '#ec4899',
      sections: [
        {
          name: 'Arduino Learning',
          resources: [
            {
              name: 'Arduino Official',
              url: 'https://www.arduino.cc',
              type: 'resource',
              description: 'Official Arduino documentation, IDE downloads, and project tutorials'
            },
            {
              name: 'Arduino Project Hub',
              url: 'https://create.arduino.cc/projecthub',
              type: 'resource',
              description: 'Community-submitted Arduino projects with code and circuit diagrams'
            },
            {
              name: 'Paul McWhorter Arduino Tutorials',
              url: 'https://www.youtube.com/@paulmcwhorter',
              type: 'youtube',
              description: 'Complete beginner-friendly Arduino course with 60+ lessons'
            },
            {
              name: 'Jeremy Blum Arduino Tutorials',
              url: 'https://www.youtube.com/playlist?list=PLA567CE235D39FA84',
              type: 'youtube',
              description: 'Classic Arduino tutorial series covering fundamentals to advanced'
            },
            {
              name: 'Adafruit Learn',
              url: 'https://learn.adafruit.com',
              type: 'resource',
              description: 'Thousands of tutorials for Arduino, Raspberry Pi, and maker projects'
            }
          ]
        },
        {
          name: 'Raspberry Pi Resources',
          resources: [
            {
              name: 'Raspberry Pi Official',
              url: 'https://www.raspberrypi.org',
              type: 'resource',
              description: 'Official documentation, operating systems, and educational resources'
            },
            {
              name: 'Raspberry Pi Beginner\'s Guide',
              url: 'https://www.raspberrypi.org/magpi/issues/beginners-guide',
              type: 'resource',
              description: 'Free PDF guide covering setup, programming, and first projects'
            },
            {
              name: 'Coursera: Raspberry Pi & Arduino',
              url: 'https://www.coursera.org/learn/packt-raspberry-pi-and-arduino-go-to-the-next-level-npq2l',
              type: 'course',
              description: 'Complete course on serial communication and hardware integration between platforms'
            },
            {
              name: 'The MagPi Magazine',
              url: 'https://magpi.raspberrypi.com',
              type: 'resource',
              description: 'Free monthly digital magazine with projects, reviews, and tutorials'
            },
            {
              name: 'Raspberry Pi Imager',
              url: 'https://www.raspberrypi.com/software',
              type: 'tool',
              description: 'Official SD card imaging tool for easy Raspberry Pi OS installation'
            }
          ]
        },
        {
          name: 'ESP32 & IoT',
          resources: [
            {
              name: 'ESP32 Arduino Core',
              url: 'https://github.com/espressif/arduino-esp32',
              type: 'resource',
              description: 'Arduino framework for ESP32 microcontrollers with WiFi and Bluetooth'
            },
            {
              name: 'Random Nerd Tutorials',
              url: 'https://randomnerdtutorials.com',
              type: 'resource',
              description: 'ESP32, ESP8266, Arduino, and Raspberry Pi tutorials and projects'
            },
            {
              name: 'DroneBot Workshop',
              url: 'https://www.youtube.com/@Dronebotworkshop',
              type: 'youtube',
              description: 'Electronics and robotics tutorials for Arduino, ESP32, and sensors'
            },
            {
              name: 'Home Assistant',
              url: 'https://www.home-assistant.io',
              type: 'resource',
              description: 'Open-source home automation platform integrating with IoT devices'
            }
          ]
        },
        {
          name: 'Electronics Learning',
          resources: [
            {
              name: 'All About Circuits',
              url: 'https://www.allaboutcircuits.com',
              type: 'resource',
              description: 'Free electronics textbook, tutorials, and circuit design tools'
            },
            {
              name: 'Electronics Tutorials',
              url: 'https://www.electronics-tutorials.ws',
              type: 'resource',
              description: 'Comprehensive electronics theory from basic to advanced concepts'
            },
            {
              name: 'CircuitLab',
              url: 'https://www.circuitlab.com',
              type: 'tool',
              description: 'Online circuit simulator for designing and testing schematics'
            },
            {
              name: 'EEVblog',
              url: 'https://www.youtube.com/@EevblogDave',
              type: 'youtube',
              description: 'Electronics engineering video blog with teardowns and design tutorials'
            }
          ]
        }
      ]
    },
    shopping: {
      title: 'Shopping & Deals',
      icon: ShoppingCart,
      color: '#14b8a6',
      sections: [
        {
          name: 'Price Comparison',
          resources: [
            {
              name: 'PC Part Picker',
              url: 'https://pcpartpicker.com',
              type: 'tool',
              description: 'Price tracking across retailers with historical pricing data and alerts'
            },
            {
              name: 'CamelCamelCamel',
              url: 'https://camelcamelcamel.com',
              type: 'tool',
              description: 'Amazon price history tracker with price drop alerts and charts'
            },
            {
              name: 'Keepa',
              url: 'https://keepa.com',
              type: 'tool',
              description: 'Amazon price tracker browser extension with detailed analytics'
            },
            {
              name: 'Google Shopping',
              url: 'https://shopping.google.com',
              type: 'tool',
              description: 'Compare prices across multiple retailers with product reviews'
            }
          ]
        },
        {
          name: 'Major Retailers',
          resources: [
            {
              name: 'Newegg',
              url: 'https://www.newegg.com',
              type: 'resource',
              description: 'PC components and electronics with daily deals and combo discounts'
            },
            {
              name: 'Amazon',
              url: 'https://www.amazon.com/pc-parts',
              type: 'resource',
              description: 'Wide selection with Prime shipping and customer reviews'
            },
            {
              name: 'B&H Photo Video',
              url: 'https://www.bhphotovideo.com',
              type: 'resource',
              description: 'Professional equipment with no sales tax for many states'
            },
            {
              name: 'Micro Center',
              url: 'https://www.microcenter.com',
              type: 'resource',
              description: 'In-store and online deals - famous for CPU/motherboard bundles'
            },
            {
              name: 'Best Buy',
              url: 'https://www.bestbuy.com',
              type: 'resource',
              description: 'Consumer electronics with in-store pickup and Totaltech membership'
            }
          ]
        },
        {
          name: 'Deal Aggregators',
          resources: [
            {
              name: 'r/buildapcsales',
              url: 'https://www.reddit.com/r/buildapcsales',
              type: 'community',
              description: '2M+ users sharing PC component deals and price drops'
            },
            {
              name: 'Slickdeals',
              url: 'https://slickdeals.net',
              type: 'resource',
              description: 'Community-driven deal sharing with voting and alerts'
            },
            {
              name: 'TechBargains',
              url: 'https://www.techbargains.com',
              type: 'resource',
              description: 'Curated tech deals and coupon codes updated daily'
            },
            {
              name: 'DealNews',
              url: 'https://www.dealnews.com',
              type: 'resource',
              description: 'Hand-picked deals verified by editors since 1997'
            }
          ]
        },
        {
          name: 'International Retailers',
          resources: [
            {
              name: 'Overclockers UK',
              url: 'https://www.overclockers.co.uk',
              type: 'resource',
              description: 'UK-based PC components and custom build services'
            },
            {
              name: 'Scan Computers',
              url: 'https://www.scan.co.uk',
              type: 'resource',
              description: 'UK retailer with 3XS custom PC builds and component sales'
            },
            {
              name: 'Alternate.de',
              url: 'https://www.alternate.de',
              type: 'resource',
              description: 'German retailer shipping throughout Europe'
            },
            {
              name: 'PrimeABGB (India)',
              url: 'https://www.primeabgb.com',
              type: 'resource',
              description: 'Leading Indian PC hardware retailer with competitive pricing'
            }
          ]
        }
      ]
    },
    overclocking: {
      title: 'Overclocking & Tuning',
      icon: Zap,
      color: '#ef4444',
      sections: [
        {
          name: 'Overclocking Guides',
          resources: [
            {
              name: 'Overclock.net',
              url: 'https://www.overclock.net',
              type: 'community',
              description: 'Largest overclocking community with guides for CPUs, GPUs, and memory'
            },
            {
              name: 'r/overclocking',
              url: 'https://www.reddit.com/r/overclocking',
              type: 'community',
              description: 'Reddit community for overclocking discussions and result sharing'
            },
            {
              name: 'The Stilt\'s DRAM Calculator',
              url: 'https://www.techpowerup.com/download/ryzen-dram-calculator',
              type: 'tool',
              description: 'Calculate safe RAM overclocking settings for AMD Ryzen platforms'
            },
            {
              name: 'Intel XTU',
              url: 'https://www.intel.com/content/www/us/en/download/17881',
              type: 'tool',
              description: 'Official Intel Extreme Tuning Utility for CPU overclocking and monitoring'
            },
            {
              name: 'AMD Ryzen Master',
              url: 'https://www.amd.com/en/technologies/ryzen-master',
              type: 'tool',
              description: 'Official AMD overclocking utility with Precision Boost Overdrive'
            }
          ]
        },
        {
          name: 'Monitoring & Benchmarking',
          resources: [
            {
              name: 'HWiNFO',
              url: 'https://www.hwinfo.com',
              type: 'tool',
              description: 'Comprehensive system monitoring with sensor logging and detailed hardware info'
            },
            {
              name: 'CPU-Z',
              url: 'https://www.cpuid.com/softwares/cpu-z.html',
              type: 'tool',
              description: 'CPU identification and validation tool with benchmark database'
            },
            {
              name: 'GPU-Z',
              url: 'https://www.techpowerup.com/gpuz',
              type: 'tool',
              description: 'Graphics card monitoring with BIOS reading and sensor logs'
            },
            {
              name: 'MSI Afterburner',
              url: 'https://www.msi.com/Landing/afterburner',
              type: 'tool',
              description: 'GPU overclocking and monitoring with RivaTuner OSD integration'
            },
            {
              name: 'Cinebench',
              url: 'https://www.maxon.net/en/cinebench',
              type: 'tool',
              description: 'CPU rendering benchmark for testing stability and performance'
            }
          ]
        },
        {
          name: 'Stress Testing',
          resources: [
            {
              name: 'Prime95',
              url: 'https://www.mersenne.org/download',
              type: 'tool',
              description: 'CPU stress testing tool for stability validation and maximum heat generation'
            },
            {
              name: 'OCCT',
              url: 'https://www.ocbase.com',
              type: 'tool',
              description: 'All-in-one stability testing suite for CPU, GPU, RAM, and PSU'
            },
            {
              name: 'MemTest86',
              url: 'https://www.memtest86.com',
              type: 'tool',
              description: 'Bootable RAM testing tool for detecting memory errors'
            },
            {
              name: 'FurMark',
              url: 'https://www.geeks3d.com/furmark',
              type: 'tool',
              description: 'GPU stress test with extreme power consumption - use with caution'
            }
          ]
        }
      ]
    },
    communities: {
      title: 'Communities & Forums',
      icon: Users,
      color: '#a855f7',
      sections: [
        {
          name: 'Reddit Communities',
          resources: [
            {
              name: 'r/buildapc',
              url: 'https://www.reddit.com/r/buildapc',
              type: 'community',
              description: '5M+ members helping with PC builds, troubleshooting, and upgrades'
            },
            {
              name: 'r/hardware',
              url: 'https://www.reddit.com/r/hardware',
              type: 'community',
              description: 'Technical hardware discussions and news with 2M+ subscribers'
            },
            {
              name: 'r/pcmasterrace',
              url: 'https://www.reddit.com/r/pcmasterrace',
              type: 'community',
              description: '8M+ PC gaming enthusiasts sharing builds and memes'
            },
            {
              name: 'r/sffpc',
              url: 'https://www.reddit.com/r/sffpc',
              type: 'community',
              description: 'Small form factor PC builds under 20L with optimization guides'
            },
            {
              name: 'r/homelab',
              url: 'https://www.reddit.com/r/homelab',
              type: 'community',
              description: 'Home server and networking enthusiasts with enterprise hardware'
            }
          ]
        },
        {
          name: 'Major Forums',
          resources: [
            {
              name: 'Tom\'s Hardware Forum',
              url: 'https://forums.tomshardware.com',
              type: 'community',
              description: 'Active hardware forums with expert advice and troubleshooting'
            },
            {
              name: 'LinusTechTips Forum',
              url: 'https://linustechtips.com',
              type: 'community',
              description: 'Large community discussing hardware, builds, and tech topics'
            },
            {
              name: 'AnandTech Forums',
              url: 'https://forums.anandtech.com',
              type: 'community',
              description: 'Technical hardware discussions with knowledgeable community'
            },
            {
              name: 'TechPowerUp Forums',
              url: 'https://www.techpowerup.com/forums',
              type: 'community',
              description: 'GPU overclocking, BIOS modding, and driver discussions'
            }
          ]
        },
        {
          name: 'Discord Servers',
          resources: [
            {
              name: 'PC Master Race Discord',
              url: 'https://discord.gg/pcmr',
              type: 'community',
              description: 'Official PCMR server with channels for builds, troubleshooting, and deals'
            },
            {
              name: 'Linus Tech Tips Discord',
              url: 'https://discord.gg/ltt',
              type: 'community',
              description: 'LTT community server with tech support and discussion channels'
            },
            {
              name: 'BuildAPCSales Discord',
              url: 'https://discord.gg/buildapcsales',
              type: 'community',
              description: 'Real-time deal alerts and price drop notifications'
            }
          ]
        }
      ]
    },
    tools: {
      title: 'Software Tools',
      icon: Settings,
      color: '#06b6d4',
      sections: [
        {
          name: 'System Utilities',
          resources: [
            {
              name: 'HWiNFO',
              url: 'https://www.hwinfo.com',
              type: 'tool',
              description: 'Professional system information and monitoring with sensor logging'
            },
            {
              name: 'Speccy',
              url: 'https://www.ccleaner.com/speccy',
              type: 'tool',
              description: 'System information tool showing detailed hardware specifications'
            },
            {
              name: 'CrystalDiskInfo',
              url: 'https://crystalmark.info/en/software/crystaldiskinfo',
              type: 'tool',
              description: 'S.M.A.R.T. monitoring for HDD/SSD health and temperature tracking'
            },
            {
              name: 'CrystalDiskMark',
              url: 'https://crystalmark.info/en/software/crystaldiskmark',
              type: 'tool',
              description: 'Storage benchmark measuring sequential and random read/write speeds'
            }
          ]
        },
        {
          name: 'Driver Management',
          resources: [
            {
              name: 'NVIDIA GeForce Experience',
              url: 'https://www.nvidia.com/en-us/geforce/geforce-experience',
              type: 'tool',
              description: 'NVIDIA driver updates with game optimization and ShadowPlay recording'
            },
            {
              name: 'AMD Software Adrenalin',
              url: 'https://www.amd.com/en/support',
              type: 'tool',
              description: 'AMD driver package with Radeon Software and performance tuning'
            },
            {
              name: 'Display Driver Uninstaller (DDU)',
              url: 'https://www.guru3d.com/files-details/display-driver-uninstaller-download.html',
              type: 'tool',
              description: 'Complete GPU driver removal tool for clean reinstallation'
            },
            {
              name: 'Snappy Driver Installer',
              url: 'https://sdi-tool.org',
              type: 'tool',
              description: 'Open-source driver updater with offline driver database'
            }
          ]
        },
        {
          name: 'Performance Tools',
          resources: [
            {
              name: 'Process Lasso',
              url: 'https://bitsum.com',
              type: 'tool',
              description: 'CPU optimization and process priority automation for gaming'
            },
            {
              name: 'Intelligent Standby List Cleaner',
              url: 'https://www.wagnardsoft.com/forums/viewtopic.php?f=18&t=1256',
              type: 'tool',
              description: 'Free up standby memory on Windows for better performance'
            },
            {
              name: 'LatencyMon',
              url: 'https://www.resplendence.com/latencymon',
              type: 'tool',
              description: 'Monitor system latency and identify DPC latency issues'
            }
          ]
        }
      ]
    }
  };

  // Category navigation
  const categories = [
    { id: 'all', label: 'All Resources', icon: Cpu },
    { id: 'reviews', label: 'Reviews & News', icon: Monitor },
    { id: 'pcBuilding', label: 'PC Building', icon: Wrench },
    { id: 'components', label: 'Components', icon: HardDrive },
    { id: 'peripherals', label: 'Peripherals', icon: Keyboard },
    { id: 'embedded', label: 'DIY & Embedded', icon: Radio },
    { id: 'shopping', label: 'Shopping', icon: ShoppingCart },
    { id: 'overclocking', label: 'Overclocking', icon: Zap },
    { id: 'communities', label: 'Communities', icon: Users },
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
              <Cpu className="w-7 h-7 text-[#3b82f6]" />
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Hardware Resource Hub</h1>
                <p className={`text-xs mt-0.5 hidden sm:block ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                  Comprehensive PC hardware directory
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
            { label: 'Total Resources', value: totalResources, icon: Cpu },
            { label: 'Categories', value: Object.keys(resources).length, icon: Layers },
            { label: 'Communities', value: '20+', icon: Users },
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
              Last updated: November 2025 • {totalResources} curated hardware resources
            </p>
            <div className="flex items-center gap-2 text-xs">
              <span className={darkMode ? 'text-gray-500' : 'text-gray-600'}>
                Built for enthusiasts, by enthusiasts
              </span>
              <Cpu className="w-4 h-4 text-[#3b82f6]" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HardwareResourceHub;
