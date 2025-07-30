import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Souvik";

  useEffect(() => {
    let index = 0;
    let typing = true;

    const interval = setInterval(() => {
      if (typing) {
        if (index < fullText.length) {
          setDisplayText(fullText.slice(0, index + 1));
          index++;
        } else {
          typing = false;
          setTimeout(() => {}, 500);
        }
      } else {
        if (index > 0) {
          index--;
          setDisplayText(fullText.slice(0, index));
        } else {
          typing = true;
        }
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Create random stars
  const stars = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 5 + 5,
    delay: Math.random() * 10,
  }));

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-neutral-900 overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 z-0">
        {stars.map(star => (
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

        {/* Inline keyframes */}
        <style>
          {`
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
          `}
        </style>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - Static Photo with Rotating Dotted Border */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Rotating Dotted Border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute w-56 h-56 lg:w-72 lg:h-72 rounded-full border-2 border-dotted border-indigo-500"
            />
            {/* Static Photo */}
            <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-lg border-4 border-indigo-500 z-10">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQGbH18leRRI8A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718288835926?e=1758153600&v=beta&t=opvfyjSr2XZreYeCnJGjWMzPIwKjBplL045z0D3iryE"
                alt="Souvik"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>

          {/* RIGHT SIDE - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6">
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-indigo-400">
                <span>{displayText}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block w-1 h-16 bg-indigo-400 ml-2"
                />
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg lg:text-xl text-gray-300 mb-3"
              >
                Web Developer | AI Enthusiast
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-sm lg:text-base text-gray-400 space-y-3 mt-4"
              >
                {[
                  { icon: "🚀", text: "Crafting end-to-end web solutions" },
                  { icon: "🤖", text: "Passionate about AI and language models" },
                  { icon: "💡", text: "Bringing innovative concepts to life" },
                  { icon: "📚", text: "Committed to continuous growth and learning" },
                ].map(({ icon, text }, i) => (
                  <motion.p
                    key={i}
                    whileHover={{ scale: 1.02, color: "#ffffff" }}
                    className="flex items-center gap-2 cursor-default"
                  >
                    <span className="text-xl">{icon}</span>
                    {text}
                  </motion.p>
                ))}
              </motion.div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="https://drive.google.com/file/d/106X7hDXbRs4qQv3MihAFw7o_r_eD4loX/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-indigo-500 text-indigo-500 px-5 py-2 rounded-full font-medium flex items-center space-x-2 transition hover:bg-indigo-500 hover:text-black"
              >
                <Download className="w-5 h-5" />
                <span>Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
