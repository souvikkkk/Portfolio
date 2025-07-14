import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Globe,
  Database,
  Brain,
  Cloud,
  Wrench,
  ChevronRight
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [activeCategory, setActiveCategory] = useState('core');

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

    // Add the same falling keyframes
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

  const skillCategories = {
    core: {
      title: 'Core Technologies',
      icon: <Code2 className="w-5 h-5" />,
      skills: ['Python', 'Java', 'C', 'JavaScript', 'SQL']
    },
    web: {
      title: 'Web Development',
      icon: <Globe className="w-5 h-5" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'TailwindCSS', 'Node.js']
    },
    data: {
      title: 'Data Engineering & ML',
      icon: <Brain className="w-5 h-5" />,
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'TensorFlow']
    },
    database: {
      title: 'Database Systems',
      icon: <Database className="w-5 h-5" />,
      skills: ['MySQL', 'MongoDB', 'Firebase']
    },
    devops: {
      title: 'DevOps & Cloud',
      icon: <Cloud className="w-5 h-5" />,
      skills: ['Git', 'GitHub']
    },
    other: {
      title: 'Other Technical Skills',
      icon: <Wrench className="w-5 h-5" />,
      skills: ['Postman', 'VS Code', 'Jupyter Notebook']
    }
  };

  return (
    <div
      ref={ref}
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-black via-neutral-900 to-black"
    >
      {/* Star Background */}
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
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Skills & <span className="text-white">Expertise</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Continuously expanding my skill set through self-learning, formal education, and hands-on projects.
          </p>
        </motion.div>

        {/* Category Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 border ${
                activeCategory === key
                  ? 'bg-primary-500 text-dark-950 border-primary-500 shadow-lg'
                  : 'bg-white/5 text-gray-300 border-white/10 hover:border-white/30'
              }`}
            >
              {category.icon}
              <span>{category.title}</span>
              {activeCategory === key && <ChevronRight className="w-4 h-4" />}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                  y: -4
                }}
                className="w-36 sm:w-40 md:w-44 lg:w-48 min-h-[100px] bg-transparent border border-white/10 rounded-lg p-4 transition-transform duration-300 flex flex-col justify-center items-center"
              >
                <div className="mb-2 opacity-70">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div className="font-medium text-white">{skill}</div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 italic">
            Always learning and adapting to new technologies in the ever-evolving tech landscape.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
