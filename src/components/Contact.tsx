import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Github,
  Linkedin,
  Handshake,
  PlaneTakeoff,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    projectType: "",
    message: "",
    agree: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Stars animation setup
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? e.target.checked : value,
    }));
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
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
          Let's <span className="text-primary-500">Connect</span>
        </h2>
        <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-300 mb-4">
          Open for collaborations, freelance opportunities, or just a tech chat.
        </p>
        <div className="flex items-center justify-center space-x-2 text-success-500">
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">Available for new opportunities</span>
        </div>
        <p className="text-sm text-gray-400 mt-2">
          Currently accepting projects starting May 2025
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 px-6 sm:px-16 lg:px-32 relative z-10">
        {/* Left Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Handshake className="w-6 h-6 text-primary-500" />
            <h3 className="text-2xl font-bold text-white">
              Let's Build Something Amazing
            </h3>
          </div>
          <p className="text-gray-300 mb-8">
            I'm always excited to collaborate on innovative projects and bring
            creative ideas to life. Let's connect and discuss how we can work
            together!
          </p>

          <div className="space-y-6 mb-8">
            {[
              {
                icon: <Phone className="w-5 h-5 text-primary-500" />,
                label: "Phone",
                value: "+91 7384674675",
              },
              {
                icon: <Mail className="w-5 h-5 text-primary-500" />,
                label: "Email",
                value: "souvikmukherjee084@gmail.com",
              },
              {
                icon: <MapPin className="w-5 h-5 text-primary-500" />,
                label: "Location",
                value: "Kolkata, West Bengal, India",
              },
              {
                icon: <Clock className="w-5 h-5 text-primary-500" />,
                label: "Timezone",
                value: "UTC+5:30",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <div className="text-gray-400 text-sm">{item.label}</div>
                  <div className="text-white font-medium">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white mb-4">
              Preferred Project Types
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Web Apps", "Data Engineering", "AI", "Automation"].map(
                (type) => (
                  <span
                    key={type}
                    className="px-3 py-1 bg-success-500/20 text-success-400 rounded-full text-sm border border-success-500/30"
                  >
                    {type}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="flex space-x-4">
            {[
              {
                icon: <Github className="w-5 h-5" />,
                href: "https://github.com/souvikkkk",
              },
              {
                icon: <Linkedin className="w-5 h-5" />,
                href:
                  "https://www.linkedin.com/in/souvik-mukherjee-736740280",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-dark-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary-500 hover:bg-primary-500/20 transition-all duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Card (Contact Form) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <PlaneTakeoff className="w-6 h-6 text-primary-500" />
            <h3 className="text-2xl font-bold text-white">
              Send Me a Message
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Project Type
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-700/50 border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              >
                <option value="">Select project type</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile App</option>
                <option value="ai">AI/ML Project</option>
                <option value="data">Data Engineering</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-dark-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
                className="w-4 h-4 text-primary-500 bg-dark-700 border-gray-600 rounded focus:ring-primary-500"
              />
              <label className="text-sm text-gray-300">
                I agree to be contacted regarding this inquiry
              </label>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitted}
              className={`w-full flex items-center justify-center space-x-3 px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                isSubmitted
                  ? "bg-success-500 text-white"
                  : "bg-gradient-to-r from-success-500 to-success-600 text-white hover:shadow-2xl"
              }`}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>Message Sent!</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
