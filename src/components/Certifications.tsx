import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, ExternalLink, Calendar } from "lucide-react";

const Certifications = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const certifications = [
    {
      title: "Diversion 2K24 AI Hackathon Participation",
      issuer: "Institute of Engineering & Management, Kolkata",
      date: "February 2024",
      platform: "Diversion 2K24",
      badge:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJJmuG5S4uzyZFBmQtq-yL6gIbQn0PbxM5g&s",
      link: "https://drive.google.com/file/d/1_LZW1kkycDRYS7nD5wqXZjxzifVxcXWP/view?usp=sharing",
    },
    {
      title: "Flipkart GRiD 6.0 E-Commerce & Tech Quiz",
      issuer: "Flipkart",
      date: "2024",
      platform: "Flipkart GRiD 6.0",
      badge:"https://static.vecteezy.com/system/resources/previews/018/930/698/non_2x/facebook-logo-facebook-icon-transparent-free-png.png",
      link: "https://drive.google.com/file/d/1C3m2-jLiq1jF7v4gDRC74gIzcS94ex1I/view?usp=sharing",
    },
    {
      title: "GenAI Job Simulation",
      issuer: "Forage",
      date: "December 2024",
      platform: "Forage",
      badge: "https://cdn-assets.theforage.com/images/forage-schema-logo.png",
      link: "https://drive.google.com/file/d/1-7iQfFnxEc-ZQCvaj9cJPrFiImDxeBnX/view?usp=sharing",
    },
    {
      title: "The Complete JavaScript Course 2025: From Zero to Expert!",
      issuer: "Udemy · Instructor: Jonas Schmedtmann",
      date: "June 30, 2025",
      platform: "Udemy",
      badge:
        "https://media.licdn.com/dms/image/v2/D560BAQEf_NHzN2yVQg/company-logo_200_200/company-logo_200_200/0/1723593046388/udemy_logo?e=2147483647&v=beta&t=_tl_e0tunbg9SkCl3nXHQEaQu4FlCGi4UU2chO9yBRs",
      link: "https://drive.google.com/file/d/16sodJYfl0XX8MqvwVQMsrNS97MvgsADv/view?usp=sharing",
    },
  ];

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

    const style = document.createElement("style");
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
              top: "-10px",
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `fall ${star.duration}s linear infinite`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 pt-28 relative z-10 px-4"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
          <span className="text-white">Certifications</span>
        </h2>
        <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 sm:px-16 lg:px-32 relative z-10">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group flex flex-col justify-between bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-500/30">
                  <img
                    src={cert.badge}
                    alt={cert.platform}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-1 text-gray-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                {cert.title}
              </h3>
              <p className="text-gray-300 mb-2">{cert.issuer}</p>
              <div className="text-sm text-primary-500 mb-4">via {cert.platform}</div>
            </div>

            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500/20 to-primary-600/20 text-primary-400 px-4 py-2 rounded-lg border border-primary-500/30 hover:bg-primary-500/30 hover:text-white transition-all duration-300 mt-4 group-hover:border-primary-500/60"
            >
              <Award className="w-4 h-4" />
              <span>View Certificate</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 text-center relative z-10 px-4"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">
              {certifications.length}
            </div>
            <div className="text-gray-400">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success-500 mb-2">4</div>
            <div className="text-gray-400">Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-500 mb-2">150+</div>
            <div className="text-gray-400">Study Hours</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">2025</div>
            <div className="text-gray-400">Recent Year</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Certifications;
