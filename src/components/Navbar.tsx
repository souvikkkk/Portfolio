import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/95 backdrop-blur-md border-b border-primary-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* GitHub & LinkedIn Buttons */}
          <div className="flex space-x-3">
            <motion.a
              href="https://github.com/souvikkkk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 border border-cyan-500 text-cyan-500 px-3 py-1.5 rounded-lg font-medium hover:bg-cyan-500 hover:text-black transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/souvik-mukherjee-736740280"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 border border-blue-500 text-blue-500 px-3 py-1.5 rounded-lg font-medium hover:bg-blue-500 hover:text-black transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </motion.a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-gray-300 hover:text-primary-500 transition-colors duration-200"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-dark-900/95 backdrop-blur-md border border-primary-500/20 rounded-lg mb-4"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-primary-500 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex space-x-3 mt-4">
                <a
                  href="https://github.com/souvikkkk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 border border-cyan-500 text-cyan-500 px-3 py-1.5 rounded-lg font-medium hover:bg-cyan-500 hover:text-black transition-colors duration-200 w-full justify-center"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/souvik-mukherjee-736740280"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 border border-blue-500 text-blue-500 px-3 py-1.5 rounded-lg font-medium hover:bg-blue-500 hover:text-black transition-colors duration-200 w-full justify-center"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
