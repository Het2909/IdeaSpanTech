// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';
// import './Contact.css';

// const Contact = () => {

//   const [name,setName] = useState('')
//   const [email,setEmail] = useState('')
//   const [message,setMessage] = useState('')

//   const [submitted, setSubmitted] = useState(false);

//   const form = {
//     name: name,
//     email: email,
//     message: message
//   }


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const response = fetch("https://your-backend-domain.com/api/contact/", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(form)
// });
//   };

//   const socialLinks = [
//     { icon: FaEnvelope, label: 'Email', href: 'hetjain2909@gmail.com' },
//     { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
//     { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com//het_2909' },
//   ];

//   return (
//     <section className="contact" id="contact">
//       <div className="contact-background"></div>

//       <div className="contact-container">
//         <motion.div
//           className="contact-header"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: false }}
//         >
//           <h2>Get In Touch</h2>
//           <p>Have a project in mind? Let's collaborate and bring your ideas to life.</p>
//         </motion.div>

//         <div className="contact-content">
//           {/* Contact Form */}
//           <motion.form
//             className="contact-form"
//             onSubmit={handleSubmit}
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: false }}
//           >
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 // value={formData.name}
//                 onChange={(e)=>{setName(e.target.value)}}
//                 required
//                 className="form-input"
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 // value={formData.email}
//                 onChange={(e)=>{setEmail(e.target.value)}}
//                 required
//                 className="form-input"
//               />
//             </div>

//             <div className="form-group">
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 rows="6"
//                 // value={formData.message}
//                 onChange={(e)=>{setMessage(e.target.value)}}
//                 required
//                 className="form-input"
//               ></textarea>
//             </div>

//             <motion.button
//               type="submit"
//               className="form-button"
//               whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.4)' }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {submitted ? '✓ Message Sent!' : 'Send Message'}
//             </motion.button>
//           </motion.form>

//           {/* Social Links */}
//           <motion.div
//             className="contact-social"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: false }}
//           >
//             <h3>Connect With Us</h3>
//             <div className="social-icons">
//               {socialLinks.map((social, index) => {
//                 const Icon = social.icon;
//                 return (
//                   <motion.a
//                     key={index}
//                     href={social.href}
//                     className="social-icon-link"
//                     whileHover={{ scale: 1.2, rotate: 10 }}
//                     whileTap={{ scale: 0.9 }}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     title={social.label}
//                   >
//                     <Icon size={32} />
//                   </motion.a>
//                 );
//               })}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

















import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch(
       "https://script.google.com/macros/s/AKfycbzHtMe4RiQKbFq1u_q8OmgGrK8xhzt3__QaPv32GJWb9z3iJt4UYPIouSmmKLzqcKfhnQ/exec",
        {
          method: 'POST',
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitted(true);

        // Reset form
        setName('');
        setEmail('');
        setMessage('');

        // Reset button text after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Error submitting the form.');
    }
  };

  const socialLinks = [
    { icon: FaEnvelope, label: 'Email', href: 'mailto:hetjain2909@gmail.com' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com/het_2909' },
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-background"></div>

      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2>Get In Touch</h2>
          <p>Have a project in mind? Let's collaborate and bring your ideas to life.</p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >

            {/* Honeypot field (spam protection) */}
            <input
              type="text"
              name="company"
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="form-input"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="form-button"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(99, 102, 241, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </motion.button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            className="contact-social"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <h3>Connect With Us</h3>
            <div className="social-icons">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="social-icon-link"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                  >
                    <Icon size={32} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
