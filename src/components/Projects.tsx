import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Filter } from "lucide-react";

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Parkinson’s Disease Detection",
      description:
        "Machine learning-based diagnostic model to detect Parkinson’s disease from medical data. Achieved 90% accuracy, reducing false positives by 15%.",
      technologies: [
        "Python",
        "Scikit-learn",
        "SVM",
        "Random Forest",
        "Pandas",
        "Healthcare AI",
      ],
      category: "AI",
      image:
        "https://images.pexels.com/photos/5863389/pexels-photo-5863389.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "https://github.com/souvikkkk/Parkinson-s-Disease-Prediction",
    },
    {
      title: "BCG GenAI Financial Chatbot",
      description:
        "AI-powered financial chatbot to analyze 10-K and 10-Q reports, extracting insights and trends for efficient financial analysis.",
      technologies: [
        "Python",
        "NLP",
        "Pandas",
        "Jupyter",
        "Excel",
        "Chatbot Development",
      ],
      category: "AI",
      image:
        "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "#",
    },
    {
      title: "Hotel Management System",
      description:
        "Desktop-based hotel management app with customer check-in/check-out, database storage, and a user-friendly GUI.",
      technologies: ["Python", "SQLite3", "Tkinter"],
      category: "App",
      image:
        "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "https://github.com/souvikkkk/HOTEL-MANAGEMENT-SYSTEM",
    },
    {
      title: "Multi-Agent Debate",
      description:
        "Constructed a debate simulation system using LangGraph where two AI agents engage in a structured argument over a fixed topic with memory and automated judgment.",
      technologies: ["LangGraph", "Python", "AI Agents", "Prompt Engineering"],
      category: "AI",
      image:
        "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "https://github.com/souvikkkk/Multi-Agent-Debate",
    },
  ];

  const filters = ["All", "App", "AI"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 pt-28 relative z-10 px-4"
      >
        <h2
          id="projects"
          className="scroll-mt-24 text-4xl lg:text-5xl font-bold mb-4 text-white"
        >
          My <span className="text-white">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-12 relative z-10 px-4"
      >
        {filters.map((filter) => (
          <motion.button
            key={filter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter(filter)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeFilter === filter
                ? "bg-primary-500 text-dark-950"
                : "bg-white/5 text-gray-300 border border-white/10 hover:border-white/30"
            }`}
          >
            <Filter className="w-4 h-4" />
            <span>{filter}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 sm:px-16 lg:px-40 relative z-10"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            layout
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group flex flex-col backdrop-blur-md bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-primary-500/50 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-40">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-primary-500/10 text-primary-400 rounded-full text-xs border border-primary-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.a
                href={project.github}
                whileHover={{ scale: 1.05 }}
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors text-sm mt-auto"
              >
                <Github className="w-4 h-4 mr-1" />
                Code
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
