import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  RefreshCw,
  Users,
  Lightbulb,
  Download,
  Quote
} from 'lucide-react';

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [stars, setStars] = useState([]);
  useEffect(() => {
    const generatedStars = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 10,
    }));
    setStars(generatedStars);

    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fall {
        0% {
          transform: translateY(-10px);
          opacity: 0.7;
        }
        100% {
          transform: translateY(110vh);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const highlights = [
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: 'Open Source',
      description:
        "I'm passionate about contributing to open source projects and sharing knowledge with the community.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Mentorship',
      description:
        "Open to helping others grow in tech, sharing experiences, and guiding newcomers in their journey.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description:
        "I love solving complex problems with creative code and exploring cutting-edge technologies.",
    },
  ];

  return (
    <footer ref={ref} className="relative w-full overflow-hidden bg-gradient-to-b from-black via-neutral-900 to-black pt-20 pb-8">
      {/* Stars */}
      <div className="absolute inset-0 z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white opacity-70"
            style={{
              left: `${star.left}%`,
              top: '-10px',
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `fall ${star.duration}s linear infinite`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="text-center group bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-full text-primary-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                {highlight.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl"
        >
          <div className="max-w-3xl mx-auto">
            <Quote className="w-12 h-12 text-primary-500/30 mx-auto mb-6" />
            <blockquote className="text-xl lg:text-2xl text-gray-300 italic mb-6 leading-relaxed">
              “Working with Souvik has been an inspiring experience. His collaborative mindset, strong problem-solving skills, and ability to turn ideas into reality make him an invaluable asset to any team.”
            </blockquote>
            <div className="text-primary-400 font-semibold">
              — Student at UEM Kolkata
            </div>
          </div>
        </motion.div>

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-16"
        >
          <motion.a
            href="https://drive.google.com/file/d/106X7hDXbRs4qQv3MihAFw7o_r_eD4loX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(0, 212, 255, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-500 to-primary-600 text-dark-950 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 group"
          >
            <Download className="w-6 h-6 group-hover:animate-bounce" />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400">
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary-500 transition-colors">
                
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
