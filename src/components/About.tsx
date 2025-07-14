import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, GraduationCap, Heart } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Star animation
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

  return (
    <div ref={ref} className="relative w-full overflow-hidden bg-[#050505]">
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
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mt-12 mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-primary-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 bg-transparent backdrop-blur-md border border-white/10 p-6 rounded-xl"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a driven Full Stack Developer and AI enthusiast who thrives on building meaningful
              digital experiences. From crafting dynamic web apps to exploring the latest advancements
              in machine learning, I love the process of turning ideas into impactful solutions.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Whether it's experimenting with new technologies, contributing to open-source, or
              mentoring fellow developers, I’m always excited to grow, create, and make a difference.
              My journey is fueled by curiosity, creativity, and a relentless passion for innovation.
            </p>

            {/* Fun facts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {[
                {
                  icon: <MapPin className="w-6 h-6 text-primary-500" />,
                  title: 'Location',
                  subtitle: 'Kolkata, India',
                },
                {
                  icon: <GraduationCap className="w-6 h-6 text-primary-500" />,
                  title: 'Education',
                  subtitle: 'Computer Science',
                },
                {
                  icon: <Heart className="w-6 h-6 text-primary-500" />,
                  title: 'Passion',
                  subtitle: 'AI & Innovation',
                },
              ].map((fact) => (
                <motion.div
                  key={fact.title}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 p-4 bg-transparent backdrop-blur-md border border-white/10 rounded-lg"
                >
                  {fact.icon}
                  <div>
                    <div className="font-medium text-white">{fact.title}</div>
                    <div className="text-sm text-gray-400">{fact.subtitle}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Engineering Student"
              className="rounded-xl shadow-lg max-h-96 object-cover border border-primary-500/20"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
