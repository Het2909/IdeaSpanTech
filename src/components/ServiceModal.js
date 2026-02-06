import React from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import './ServiceModal.css';

const serviceDetails = {
  1: {
    title: 'Web Development',
    description: 'Build fast, scalable, and modern web applications using latest technologies and best practices.',
    fullDescription:
      'We specialize in creating responsive, high-performance web applications that deliver exceptional user experiences. Our development process is backed by modern best practices and cutting-edge technologies.',
    features: [
      'React & Next.js Development',
      'RESTful API Integration',
      'Responsive Design',
      'Performance Optimization',
      'SEO-Friendly Architecture',
      'Cloud Deployment',
    ],
    tools: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'Git'],
  },
  2: {
    title: 'SEO',
    description: 'Boost your online visibility with strategic SEO optimization.',
    fullDescription:
      'Maximize your online presence with our comprehensive SEO strategies. We help your business rank higher and reach the right audience.',
    features: [
      'Keyword Research & Strategy',
      'On-Page & Off-Page SEO',
      'Content Marketing',
        'Technical SEO Audits',
      'Analytics & Reporting',
    ],
    tools: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Mailchimp'],
  },
  3: {
    title: 'UI/UX Design',
    description: 'Create stunning, user-friendly interfaces that engage and delight your audience.',
    fullDescription:
      'Crafted with precision and creativity, our UI/UX designs focus on usability and aesthetic appeal. We create interfaces that users love to interact with.',
    features: [
      'User Research & Personas',
      'Wireframing & Prototyping',
      'Visual Design System',
      'Interaction Design',
      'Usability Testing',
      'Design Documentation',
    ],
    tools: ['Figma', 'Adobe XD', 'Sketch', 'Protopie', 'UserTesting', 'Hotjar'],
  },
  4: {
    title: 'Digital Marketing',
    description: 'Keep your online presence alive and more strong with targeted digital marketing strategies.',
    fullDescription:
      'We help businesses grow their online presence through targeted digital marketing strategies. Our approach combines creativity, data-driven insights, and proven tactics to deliver measurable results.',
    features: [
      'Social Media Management',
      'PPC Campaigns',
      'Performance Monitoring',
        'Content Creation',
      '24/7 Support',
    ],
    tools: ['Google Ads', 'Facebook Ads', 'Hootsuite', 'Buffer', 'Canva', 'Google Analytics'],
  },
};

const ServiceModal = ({ isOpen, onClose, serviceId, onContactClick }) => {
  const service = serviceDetails[serviceId];

  if (!service) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <motion.div className="service-modal-content" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h2>{service.title}</h2>
        <p className="modal-description">{service.fullDescription}</p>

        <div className="modal-section">
          <h3>Key Features</h3>
          <ul className="features-list">
            {service.features.map((feature, index) => (
              <motion.li key={index} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                ✓ {feature}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="modal-section">
          <h3>Technologies & Tools</h3>
          <div className="tools-list">
            {service.tools.map((tool, index) => (
              <motion.span key={index} className="tool-badge" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }}>
                {tool}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.button className="modal-contact-btn" onClick={() => onContactClick(service.title)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Contact Us About {service.title}
        </motion.button>
      </motion.div>
    </Modal>
  );
};

export default ServiceModal;
