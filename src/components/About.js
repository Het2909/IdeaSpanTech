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
    { label: 'Years of Experience', value: '5+' },
    { label: 'Happy Clients', value: '50+' },
    { label: 'Completed Projects', value: '100+' },
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
            <h2>About Us</h2>
            <p>
              We are a team of passionate web developers and designers dedicated to crafting exceptional digital
              experiences. With over 5 years of experience, we've helped startups and enterprises transform their
              visions into powerful, scalable web solutions.
            </p>
            <p>
              Our approach combines cutting-edge technology, creative design, and strategic thinking to deliver
              websites that not only look stunning but also drive real business results.
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
