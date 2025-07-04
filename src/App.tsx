import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-white font-inter">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Education Section */}
      <section id="education" className="bg-dark-900/50">
        <Education />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Certifications Section */}
      <section id="certifications">
        <Certifications />
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-dark-900/50">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
