import React from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const badgesData = [
    { label: 'Crafting modern, meaningful web experiences', value: 'Built with Passion' },
    { label: 'Fast, scalable & SEO-ready websites', value: 'Modern Tech Stack' },
    { label: 'Your goals guide every decision', value: 'Client-First Mindset' },
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          {/* Left: 3D Avatar */}
          <motion.div
            className="about-image"
            data-aos="fade-right"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="avatar-box">
              <div className="avatar">
                <div className="avatar-inner">
                  <span className="avatar-emoji">👨‍💼</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div className="about-text" data-aos="fade-left">
            <h1>About Us</h1>
            <p>
              We’re a team of passionate web developers, designers, and SEO minds who love turning ideas into impactful digital products. With 5+ years of hands-on experience, we help startups move fast, scale smarter, and stand out online.
            </p>
            <p>
              By blending modern web technologies, intuitive design, and growth-driven SEO, we build websites that don’t just look great—they perform. From lightning-fast pages and clean code to search visibility and conversion optimization, everything we create is designed to fuel traction and real business growth.
            </p>

            {/* Badges */}
            <div className="badges">
              {badgesData.map((badge, index) => (
                <motion.div
                  key={index}
                  className="badge"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="badge-value">{badge.value}</div>
                  <div className="badge-label">{badge.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
