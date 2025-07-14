import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Star generation
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

    // Keyframes for falling
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

  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "University of Engineering and Management",
      duration: "2022 - 2026",
      location: "Kolkata",
      gpa: "CGPA : 8.3",
      highlights: [
        "Specialized in Artificial Intelligence and Machine Learning",
        "Built multiple AI-driven web applications",
        "Active member of the Coding and Robotics Clubs"
      ]
    },
    {
      degree: "Higher Secondary Education",
      institution: "Pathfinder Higher Secondary Public School",
      duration: "2020 - 2022",
      location: "Durgapur",
      gpa: "81%",
      highlights: [
        "Science Stream (PCM + Computer Science)"
      ]
    },
    {
      degree: "Secondary Education (10th Standard)",
      institution: "St Francis Xavier English Medium School",
      duration: "2020",
      location: "Andal",
      gpa: "79%",
      highlights: [
        "Completed with strong results",
        "Led school rules committee"
      ]
    }
  ];

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
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            My <span className="text-white">Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-700"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
              } md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-auto md:-ml-4 md:right-auto md:-mr-4 w-8 h-8 bg-gray-700 rounded-full border-4 border-black flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-black" />
              </div>

              {/* Transparent Card */}
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}
                className="ml-16 md:ml-0 bg-transparent border border-white/10 rounded-lg p-6 shadow-md transition-transform duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{edu.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Award className="w-4 h-4" />
                    <span className="font-medium">{edu.gpa}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>

                <div className="flex items-center space-x-2 text-gray-300 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{edu.institution}, {edu.location}</span>
                </div>

                <ul className="divide-y divide-white/10">
                  {edu.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start space-x-2 text-gray-300 py-1 first:pt-0 last:pb-0"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
