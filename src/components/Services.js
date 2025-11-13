import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCode, FaSearch, FaPalette, FaWrench } from 'react-icons/fa';
import ServiceModal from './ServiceModal';
import './Services.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const servicesData = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Build fast, scalable, and modern web applications using latest technologies and best practices.',
      icon: <FaCode size={40} />,
    },
    {
      id: 2,
      title: 'SEO & Marketing',
      description: 'Boost your online visibility with strategic SEO optimization and digital marketing solutions.',
      icon: <FaSearch size={40} />,
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Create stunning, user-friendly interfaces that engage and delight your audience.',
      icon: <FaPalette size={40} />,
    },
    {
      id: 4,
      title: 'Maintenance & Support',
      description: 'Keep your website running smoothly with ongoing updates, security, and performance optimization.',
      icon: <FaWrench size={40} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="services" id="services">
      <div className="services-container">
        <motion.div className="section-header" data-aos="fade-up">
          <h2>Our Services</h2>
          <p>We provide comprehensive web solutions tailored to your needs</p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={cardVariants}
              onClick={() => setSelectedService(service.id)}
            >
              <motion.div
                className="card-inner"
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="card-background"></div>
                <div className="card-content">
                  <motion.div
                    className="service-icon"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="card-cta">Click to learn more</div>
                </div>
                <div className="card-glow"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ServiceModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        serviceId={selectedService}
        onContactClick={(serviceName) => {
          setSelectedService(null);
          const contactForm = document.querySelector('.contact-form');
          if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth' });
            // Auto-fill the message field
            const messageInput = contactForm.querySelector('textarea[name="message"]');
            if (messageInput) {
              messageInput.value = `Interested in: ${serviceName}\n\n`;
              messageInput.focus();
            }
          }
        }}
      />
    </section>
  );
};

export default Services;
