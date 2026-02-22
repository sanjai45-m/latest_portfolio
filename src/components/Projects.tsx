import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { useState } from 'react';

// Direct image imports for proper bundling
import attiImage from '../../assets/atti.jpg';
import amsImage from '../../assets/ams.jpg';
import getTaxiImage from '../../assets/GetTaxi.png';
import marinaImage from '../../assets/marina.png';
import aiImage from '../../assets/ai.png';
import project1Image from '../../assets/project-1.png';
import project2Image from '../../assets/project-2.jpg';
import project3Image from '../../assets/project-3.jpeg';
import toasterImage from '../../assets/toaster_common.png';

// Android Icon Component
const AndroidIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.5 11.5 0 0 0-8.94 0L5.65 5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85l1.84 3.18C4.8 10.85 3.5 12.62 3.5 14.5h17c0-1.88-1.3-3.65-2.9-5.02zM10 12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm4 0c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5z" />
  </svg>
);

// iOS Icon Component
const IOSIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

// Project Card Component with "See More" functionality
const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 120; // Character limit before truncation
  const shouldTruncate = project.description.length > maxLength;

  return (
    <Reveal key={project.title} delay={index * 0.2}>
      <div className="group rounded-2xl overflow-hidden bg-dark-800 border border-white/10 hover:border-primary-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 flex flex-col h-full">
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60 z-10"></div>
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            src={project.image}
            alt={`${project.title} - ${project.technologies.slice(0, 3).join(', ')} project by Sanjai M`}
            className="w-full h-full object-cover"
          />

          {/* Store Buttons - Top Right */}
          <div className="absolute top-4 right-4 z-20 flex gap-2">
            {project.pubDevUrl && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={project.pubDevUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-900/80 backdrop-blur-md rounded-lg text-teal-400 hover:bg-teal-500 hover:text-white transition-all duration-300 border border-teal-500/30 hover:border-teal-500 shadow-lg"
                title="View on pub.dev"
              >
                <PubDevIcon size={20} />
              </motion.a>
            )}
            {project.playStoreUrl && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-900/80 backdrop-blur-md rounded-lg text-green-400 hover:bg-green-500 hover:text-white transition-all duration-300 border border-green-500/30 hover:border-green-500 shadow-lg"
                title="Get it on Google Play"
              >
                <AndroidIcon size={20} />
              </motion.a>
            )}
            {project.appStoreUrl && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-900/80 backdrop-blur-md rounded-lg text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 border border-blue-500/30 hover:border-blue-500 shadow-lg"
                title="Download on the App Store"
              >
                <IOSIcon size={20} />
              </motion.a>
            )}
          </div>

          {/* Live Demo Button - Shows on Hover */}
          <div className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary-500 transition-colors block"
            >
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          {/* Fixed height title - 2 lines max */}
          <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-primary-400 transition-colors h-14 line-clamp-2">
            {project.title}
          </h3>

          {/* Description with EXACT fixed height */}
          <div className="mb-4">
            <div className={`${!isExpanded ? 'h-[84px] overflow-hidden' : ''}`}>
              <p className={`text-gray-400 text-sm leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
                {isExpanded ? project.description : project.description}
              </p>
            </div>
            {shouldTruncate && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-primary-400 hover:text-primary-300 text-xs font-medium mt-2 transition-colors inline-flex items-center gap-1"
              >
                {isExpanded ? 'See less' : 'See more'}
                <span className="text-[10px]">{isExpanded ? '▲' : '▼'}</span>
              </button>
            )}
          </div>

          <div className="space-y-4 mt-auto">
            {/* EXACT fixed height for technology tags - 2 rows */}
            <div className="flex flex-wrap gap-2 h-[68px] overflow-hidden content-start">
              {project.technologies.slice(0, 6).map((tech: string) => (
                <span
                  key={tech}
                  className="text-xs font-medium text-primary-300 bg-primary-500/10 px-3 py-1 rounded-full border border-primary-500/20 h-fit"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 6 && (
                <span className="text-xs font-medium text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10 h-fit">
                  +{project.technologies.length - 6} more
                </span>
              )}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
              >
                <Github size={18} />
                <span>Source Code</span>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
              >
                <span>Live Demo</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

// pub.dev Icon Component
const PubDevIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export default function Projects() {
  const projects = [

    {
      title: 'toaster_common — Flutter Package',
      description: '🚀 Published on pub.dev because most Flutter toast packages don\'t support images — toaster_common uniquely supports both Network & Asset images inside toasts. Lightweight overlay toast with smooth scale & fade animations, top/bottom positioning, auto-dismiss, and fully custom widgets. 140 pub points • 102+ downloads.',
      image: toasterImage,
      technologies: ['Flutter', 'Dart', 'pub.dev', 'Open Source', 'Animation', 'Overlay'],
      githubUrl: 'https://github.com/sanjai45-m/toaster_common',
      liveUrl: 'https://pub.dev/packages/toaster_common',
      playStoreUrl: undefined,
      appStoreUrl: undefined,
      pubDevUrl: 'https://pub.dev/packages/toaster_common',
    },
    {
      title: 'ATTI Cafe',
      description: 'Developed a Flutter-based food ordering application supporting dine-in and takeaway workflows',
      image: attiImage,
      technologies: ['Flutter', 'Dart', 'Razorpay', 'Firebase Push Notification',],
      githubUrl: undefined,
      liveUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7375886283153457152/",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.aastratech.attitest&hl=en_IN", // Add Play Store URL when available
      appStoreUrl: "https://apps.apple.com/ph/app/le-atti-cafe/id6741426971",  // Add App Store URL when available
    }, {
      title: 'Aastra AMS',
      description: 'Built a cross-platform Flutter application for asset tracking and lifecycle management',
      image: amsImage,
      technologies: ['Flutter', 'Dart', 'Razorpay', 'Firebase Push Notification',],
      githubUrl: undefined,
      liveUrl: "https://play.google.com/store/apps/details?id=com.aastra.amscustomerapp&hl=en_IN",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.aastra.amscustomerapp&hl=en_IN", // Add Play Store URL when available
      appStoreUrl: "https://apps.apple.com/ph/app/aastraams/id6720722719",  // Add App Store URL when available
    }, {
      title: 'Get Taxi',
      description: 'I contributed as a Flutter Developer to the GetTaxi app, a ride-booking platform for users to book taxis and drivers to manage trips, where I developed the frontend, integrated APIs, and optimized performance for a seamless experience.',
      image: getTaxiImage,
      technologies: ['Flutter', 'Dart', 'Razorpay', 'Firebase Push Notification',],
      githubUrl: undefined,
      liveUrl: "https://play.google.com/store/apps/details?id=com.renixe.gettaxi&hl=en_IN",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.renixe.gettaxi&hl=en_IN", // Add Play Store URL when available
      appStoreUrl: undefined,  // Add App Store URL when available
    }, {
      title: 'Get Taxi Captain',
      description: 'I developed the frontend of GetTaxi Captain, a driver-focused ride management app using Flutter, enabling drivers to receive ride requests, navigate to locations, and manage trips efficiently, integrating APIs and optimizing performance.',
      image: getTaxiImage,
      technologies: ['Flutter', 'Dart', 'Razorpay', 'Firebase Push Notification',],
      githubUrl: undefined,
      liveUrl: "https://play.google.com/store/apps/details?id=com.renixe.gettaxicaptain&hl=en_IN",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.renixe.gettaxicaptain&hl=en_IN", // Add Play Store URL when available
      appStoreUrl: undefined,  // Add App Store URL when available
    },
    {
      title: 'Marina App',
      description: ' Developed a Flutter-based eCommerce platform enabling users to discover and access services from vendors',
      image: marinaImage,
      technologies: ['Flutter', 'Dart', 'Razorpay', 'Firebase Push Notification',],
      githubUrl: undefined,
      liveUrl: undefined,
      playStoreUrl: "https://play.google.com/store/apps/details?id=io.ionic.marina1&pcampaignid=web_share", // Add Play Store URL when available
      appStoreUrl: undefined,  // Add App Store URL when available
    },
    {
      title: 'Marina: S Partner',
      description: 'I developed the frontend of Marina S Partner, a service provider app using Flutter, enabling businesses to manage listings, receive bookings, and interact with customers, integrating APIs and optimizing performance for a seamless experience.',
      image: marinaImage,
      technologies: ['Flutter', 'Dart', 'Razorpay', 'Firebase Push Notification',],
      githubUrl: undefined,
      liveUrl: "https://play.google.com/store/apps/details?id=com.revosys.marinastore&hl=en_IN",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.revosys.marinastore&hl=en_IN", // Add Play Store URL when available
      appStoreUrl: undefined,  // Add App Store URL when available
    },

    {
      title: 'E-Parking Bill Generator',
      description: 'A full-stack e-commerce solution with real-time inventory management and payment processing.',
      image: project1Image,
      technologies: ['Flutter', 'Dart', 'Spring Boot', 'PostgreSQL'],
      githubUrl: 'https://github.com/sanjai45-m/E-bill',
      liveUrl: 'https://www.linkedin.com/posts/sanjai-20-01-2002-m_eparking-flutter-springboot-activity-7259461258578427904-mB7R',
      playStoreUrl: undefined, // Add Play Store URL when available
      appStoreUrl: undefined,  // Add App Store URL when available
    },

    {
      title: 'Sanjai – AI Assistant',
      description:
        'Built and deployed a web-based AI assistant that provides conversational question-answering and content drafting through a clean chat interface, architected as a modern web app with a frontend designed to integrate with multiple AI backends.',
      image: aiImage,
      technologies: ['JavaScript', 'TypeScript', 'React', 'REST API', 'AI Assistant', 'Gemini AI'],
      githubUrl: undefined,
      liveUrl: 'https://sanjai-ai-assistant.netlify.app/',
      playStoreUrl: undefined,
      appStoreUrl: undefined
    }
    ,
    {
      title: 'S-NEWS APP',
      description: 'A collaborative task management tool with real-time updates and team collaboration features.',
      image: project2Image,
      technologies: ['Flutter', 'Dart', 'Firebase', 'WebSocket'],
      githubUrl: 'https://github.com/sanjai45-m/S-NEWS-App',
      liveUrl: 'https://www.linkedin.com/posts/sanjai-20-01-2002-m_flutter-newsapp-mobileappdevelopment-activity-7236303159382450176-xKJp',
      playStoreUrl: undefined, // Add Play Store URL when available
      appStoreUrl: undefined,  // Add App Store URL when available
    },
    {
      title: 'S-NEWS Admin Panel',
      description: 'An AI-powered platform that generates high-quality content using machine learning algorithms.',
      image: project3Image,
      technologies: ['React.js', 'Firebase', 'Node.js'],
      githubUrl: 'https://github.com/sanjai45-m/Admin-Panel-S-NEWS-APP',
      liveUrl: 'https://www.linkedin.com/posts/sanjai-20-01-2002-m_snews-flutter-reactjs-activity-7238773992084398080-vUr7',
      playStoreUrl: undefined, // Add Play Store URL when available
      appStoreUrl: undefined,  // Add App Store URL when available
    },
    {
      title: 'HR Job Intelligence Dashboard',
      description:
        'Designed and developed a web-based job intelligence tool for HR teams that aggregates and normalises listings from Google Jobs, Naukri, LinkedIn, Hirist and Shine into a single searchable dashboard, built with a React frontend and Node.js/Python backend services for platform-specific crawling and APIs.',
      image: import.meta.env.VITE_PROJECT_2,
      technologies: ['React', 'Node.js', 'Express', 'Python', 'Web Scraping', 'REST API'],
      githubUrl: undefined,
      liveUrl: 'https://aastrajobsearch.netlify.app',
      playStoreUrl: undefined,
      appStoreUrl: undefined
    }
    ,
  ];

  return (
    <section id="projects" className="py-24 bg-dark-900 relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
              Featured <span className="text-primary-400">Projects</span>
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.4}>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Some of my recent work that showcases my skills and expertise in building complex applications.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}