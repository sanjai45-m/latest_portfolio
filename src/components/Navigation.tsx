import { useState } from 'react';
import { Github, Linkedin, FileText, Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  isScrolling: boolean;
}

export default function Navigation({ activeSection, isScrolling }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const resumePath = import.meta.env.VITE_SANJAI_CV;

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://github.com/sanjai45-m', Icon: Github },
    { href: 'https://www.linkedin.com/in/sanjai-20-01-2002-m/', Icon: Linkedin },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolling || isMobileMenuOpen
        ? 'bg-dark-900/80 backdrop-blur-md border-b border-white/10 py-4'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="group relative z-50">
            <span className="text-2xl font-bold font-display tracking-tight">
              <span className="bg-gradient-to-r from-primary-400 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-primary-600 transition-all duration-300">
                MS
              </span>
              <span className="text-gray-400">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className={`text-sm font-medium transition-colors duration-300 ${activeSection === href.slice(1)
                    ? 'text-primary-400'
                    : 'text-gray-400 hover:text-white'
                    }`}
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="h-6 w-px bg-white/10"></div>

            <div className="flex items-center space-x-4">
              {socialLinks.map(({ href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
              <a
                href={resumePath}
                download="My_Resume.pdf"
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600/20 border border-primary-500/50 rounded-full hover:bg-primary-600/40 transition-all duration-300"
              >
                <FileText size={16} className="mr-2" />
                Resume
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#000000] border-l border-white/30 z-50 transition-transform duration-300 ease-in-out md:hidden shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-8">
          {/* Navigation Links */}
          <div className="flex flex-col space-y-1 mb-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium py-3 px-4 rounded-lg transition-all duration-200 ${activeSection === href.slice(1)
                  ? 'text-primary-400 bg-primary-500/10 border-l-4 border-primary-400'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 my-4"></div>

          {/* Social Links */}
          <div className="flex items-center space-x-4 mb-6">
            {socialLinks.map(({ href, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-lg text-gray-400 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <a
            href={resumePath}
            download="Sanjai_M_Resume.pdf"
            className="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/25"
          >
            <FileText size={20} className="mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
