import { ChevronDown, ArrowRight, Code, Terminal, Cpu, Server, Layers, CodeIcon, KeyIcon, CreditCard, Repeat, Rocket, Play, Apple, GitBranch, Key, Layout, FileCode, Palette, Smartphone, Radio } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import profileImage from '../../assets/profile.jpg';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl will-change-transform"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, -20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl will-change-transform"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <div className="space-y-4">
              <Reveal>
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm font-medium mb-4">
                  <span className="flex h-2 w-2 rounded-full bg-primary-400 mr-2 animate-pulse"></span>
                  Available for work
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <h2 className="text-xl md:text-2xl text-gray-400 font-medium tracking-wide">Hello, I'm</h2>
              </Reveal>
              <Reveal delay={0.4}>
                <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight leading-tight">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                    Sanjai M
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.5}>
                <p className="text-2xl md:text-3xl text-primary-400 font-light tracking-wide">
                  Mobile & Web Application Developer
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.6}>
              <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                Build and ship production-ready Flutter and web applications — from secure authentication and payment gateways to Play Store and App Store deployment and real-world integrations.
              </p>
            </Reveal>

            <Reveal delay={0.7}>
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="group px-8 py-4 bg-primary-600 text-white rounded-full flex items-center gap-2 hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/25"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="px-8 py-4 border border-white/10 text-white rounded-full hover:bg-white/5 transition-colors backdrop-blur-sm"
                >
                  Contact Me
                </motion.a>
              </div>
            </Reveal>

            <Reveal delay={0.8}>
              <div className="pt-8 border-t border-white/10">
                <p className="text-sm text-gray-500 mb-4 font-medium uppercase tracking-wider">Tech Stack</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Flutter', icon: Cpu },
                    { name: 'Dart', icon: Code },
                    { name: 'REST APIs', icon: Server },
                    { name: 'Provider / MVVM', icon: Layers },
                    { name: 'JWT & Token Refresh Flow', icon: Key },
                    { name: 'Razorpay Integration', icon: CreditCard },
                    { name: 'CI/CD (GitHub Actions)', icon: Repeat },
                    { name: 'Fastlane (Android & iOS)', icon: Rocket },
                    { name: 'Play Store Deployment', icon: Play },
                    { name: 'App Store & TestFlight', icon: Apple },
                    { name: 'Git & Branching Strategy', icon: GitBranch },
                    { name: 'JavaScript', icon: Code },
                    { name: 'React.js', icon: Layout },
                    { name: 'HTML5', icon: FileCode },
                    { name: 'CSS3', icon: Palette },
                    { name: 'Android (Java)', icon: Smartphone },
                    { name: 'RFID Integration', icon: Radio }

                  ]
                    .map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-primary-500/50 hover:text-primary-400 transition-colors duration-300"
                      >
                        {tech.icon && <tech.icon size={14} />}
                        {tech.name}
                      </motion.div>
                    ))}
                </div>
              </div>
            </Reveal>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-purple-600/20 rounded-[2rem] blur-2xl transform rotate-6"></div>
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-dark-800/50 backdrop-blur-sm">
              <img
                src={profileImage}
                alt="Sanjai M - Mobile and Web Application Developer specializing in Flutter, React, and Android development"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
              />

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 right-8 p-6 bg-dark-900/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Current Status</p>
                    <p className="text-white font-medium">Open to Opportunities</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors">
          <ChevronDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}

// Helper component for Box icon since it might not be imported
function Box(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}